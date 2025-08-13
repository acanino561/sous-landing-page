"use client";

import { useEffect, useState, useRef } from "react";

interface Ingredient {
  id: number;
  emoji: string;
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  floatOffset: number;
  floatSpeed: number;
  baseX: number;
  baseY: number;
  velocityX: number;
  velocityY: number;
}

export default function FloatingIngredients() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  const ingredientEmojis = ['🥕', '🍅', '🥬', '🧄', '🧅', '🥔', '🌶️', '🥒', '🍋', '🥑', '🍆', '🥦'];

  useEffect(() => {
    // Wait for document to be ready
    const initializeIngredients = () => {
      const documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, 4000);
      const documentWidth = window.innerWidth;
      
      // Better distribution algorithm using golden ratio spiral across full document
      const initialIngredients: Ingredient[] = Array.from({ length: 50 }, (_, i) => {
        const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians
        const radius = Math.sqrt(i) * 120; // Spiral radius adjusted for document height
        const theta = i * goldenAngle; // Angle for this point
        
        // Convert polar to cartesian and center on document center
        const spiralX = Math.cos(theta) * radius + documentWidth / 2;
        const spiralY = Math.sin(theta) * radius + documentHeight / 3; // Start from top third
        
        // Add randomness and spread throughout document height
        const randomOffsetX = (Math.random() - 0.5) * 300;
        const randomOffsetY = (Math.random() - 0.5) * documentHeight * 0.8; // Spread across 80% of document
        
        const baseX = spiralX + randomOffsetX;
        const baseY = spiralY + randomOffsetY;
        
        // Keep ingredients within document bounds
        const clampedX = Math.max(50, Math.min(documentWidth - 50, baseX));
        const clampedY = Math.max(50, Math.min(documentHeight - 50, baseY));
        
        return {
          id: i,
          emoji: ingredientEmojis[Math.floor(Math.random() * ingredientEmojis.length)],
          x: clampedX,
          y: clampedY,
          baseX: clampedX,
          baseY: clampedY,
          size: Math.random() * 12 + 28,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
          floatOffset: Math.random() * Math.PI * 2,
          floatSpeed: Math.random() * 0.001 + 0.0005,
          velocityX: 0,
          velocityY: 0,
        };
      });

      setIngredients(initialIngredients);
    };

    // Initialize after a short delay to ensure document is ready
    setTimeout(initializeIngredients, 100);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Track mouse position relative to document, not just viewport
      mousePositionRef.current = { 
        x: e.clientX, 
        y: e.clientY + window.scrollY 
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animateIngredients = () => {
      setIngredients(prev => prev.map(ingredient => {
        const mousePos = mousePositionRef.current;
        
        // Base floating movement - continuous gentle drift (slower)
        const baseVelocityX = (Math.random() - 0.5) * 0.03;
        const baseVelocityY = (Math.random() - 0.5) * 0.03;
        
        // Distance to mouse
        const dx = mousePos.x - ingredient.x;
        const dy = mousePos.y - ingredient.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Proximity repulsion - stronger and more responsive
        let repulsionX = 0;
        let repulsionY = 0;
        
        if (distance < 200 && distance > 0) {
          const force = (200 - distance) / 200;
          const repulsionStrength = force * force * 3; // Quadratic falloff for more dramatic effect
          
          repulsionX = -(dx / distance) * repulsionStrength;
          repulsionY = -(dy / distance) * repulsionStrength;
        }
        
        // Return to base position when far from mouse
        const distanceFromBase = Math.sqrt(
          Math.pow(ingredient.x - ingredient.baseX, 2) + 
          Math.pow(ingredient.y - ingredient.baseY, 2)
        );
        
        let returnX = 0;
        let returnY = 0;
        if (distanceFromBase > 60 && distance > 250) {
          const returnForce = 0.015;
          returnX = (ingredient.baseX - ingredient.x) * returnForce;
          returnY = (ingredient.baseY - ingredient.y) * returnForce;
        }
        
        // Combine all forces
        const totalVelocityX = baseVelocityX + repulsionX + returnX;
        const totalVelocityY = baseVelocityY + repulsionY + returnY;
        
        // Apply movement with momentum (smooth acceleration/deceleration)
        const damping = 0.85;
        let newVelocityX = ingredient.velocityX * damping + totalVelocityX * 0.15;
        let newVelocityY = ingredient.velocityY * damping + totalVelocityY * 0.15;
        
        let newX = ingredient.x + newVelocityX;
        let newY = ingredient.y + newVelocityY;
        
        // Boundary handling with elastic collision - use document dimensions
        const margin = 30;
        const documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, 4000);
        
        if (newX < margin) {
          newX = margin;
          newVelocityX *= -0.5;
        }
        if (newX > window.innerWidth - margin) {
          newX = window.innerWidth - margin;
          newVelocityX *= -0.5;
        }
        if (newY < margin) {
          newY = margin;
          newVelocityY *= -0.5;
        }
        if (newY > documentHeight - margin) {
          newY = documentHeight - margin;
          newVelocityY *= -0.5;
        }
        
        // Floating motion overlay - independent of cursor
        const time = Date.now() * ingredient.floatSpeed;
        const floatY = Math.sin(ingredient.floatOffset + time) * 2;
        const floatX = Math.cos(ingredient.floatOffset + time * 0.7) * 1.5;
        
        return {
          ...ingredient,
          x: newX + floatX,
          y: newY + floatY,
          velocityX: newVelocityX,
          velocityY: newVelocityY,
          rotation: ingredient.rotation + ingredient.rotationSpeed,
        };
      }));
      
      animationRef.current = requestAnimationFrame(animateIngredients);
    };

    animationRef.current = requestAnimationFrame(animateIngredients);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []); // No dependencies - continuous animation

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-1">
      {ingredients.map((ingredient) => (
        <div
          key={ingredient.id}
          className="absolute opacity-40"
          style={{
            left: ingredient.x,
            top: ingredient.y,
            fontSize: ingredient.size,
            transform: `translate(-50%, -50%) rotate(${ingredient.rotation}deg)`,
            filter: 'drop-shadow(0 0 2px rgba(233, 150, 122, 0.1)) brightness(1.1) saturate(1.2)',
            textShadow: '0 0 6px rgba(233, 150, 122, 0.2)',
            transition: 'none', // Remove CSS transitions to avoid conflicts with animation loop
          }}
        >
          {ingredient.emoji}
        </div>
      ))}
    </div>
  );
}