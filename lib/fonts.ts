import localFont from 'next/font/local'

export const winkySans = localFont({
  src: [
    {
      path: '../public/fonts/WinkySans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/WinkySans-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/WinkySans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/WinkySans-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/WinkySans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/WinkySans-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/WinkySans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/WinkySans-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/WinkySans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/WinkySans-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/WinkySans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/WinkySans-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../public/fonts/WinkySans-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/WinkySans-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-winky',
  display: 'swap',
})