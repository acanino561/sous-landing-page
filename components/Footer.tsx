import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#E9967A]/20 py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and tagline */}
          <div className="mb-8 md:mb-0">
            <h3 
              className="text-2xl font-bold text-[#E9967A] mb-2"
              style={{ fontFamily: 'var(--font-winky)' }}
            >
              Sous
            </h3>
            <p 
              className="text-[#FFFFFF]/70"
              style={{ fontFamily: 'var(--font-winky)' }}
            >
              Your AI-powered culinary companion
            </p>
          </div>
          
          {/* Social media icons */}
          <div className="flex space-x-6 mb-8 md:mb-0">
            <a 
              href="#" 
              className="text-[#FFFFFF]/70 hover:text-[#E9967A] transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-[#FFFFFF]/70 hover:text-[#E9967A] transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-[#FFFFFF]/70 hover:text-[#E9967A] transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="text-[#FFFFFF]/70 hover:text-[#E9967A] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          
          {/* Links */}
          <div className="flex space-x-8 text-sm">
            <a 
              href="#" 
              className="text-[#FFFFFF]/70 hover:text-[#E9967A] transition-colors duration-200"
              style={{ fontFamily: 'var(--font-winky)' }}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-[#FFFFFF]/70 hover:text-[#E9967A] transition-colors duration-200"
              style={{ fontFamily: 'var(--font-winky)' }}
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-[#FFFFFF]/70 hover:text-[#E9967A] transition-colors duration-200"
              style={{ fontFamily: 'var(--font-winky)' }}
            >
              Support
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#E9967A]/20 mt-8 pt-8 text-center">
          <p 
            className="text-[#FFFFFF]/50 text-sm"
            style={{ fontFamily: 'var(--font-winky)' }}
          >
            © 2025 Aurora Technologies LLC. All rights reserved. Made with ❤️ for home cooks everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}