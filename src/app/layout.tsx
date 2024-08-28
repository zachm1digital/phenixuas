import '@/styles/globals.css';
import '@/styles/media-content.css';

import { Metadata } from 'next';
import { Oxanium, Sofia_Sans_Semi_Condensed } from 'next/font/google';
import Script from 'next/script';
import { ReactNode } from 'react';

import ChatButton from '@/components/molecules/ChatButton';
import { MainProvider } from '@/components/providers/MainProvider';
import { MainLayout } from '@/components/templates/MainLayout';

import { cn } from '@/lib/utils';
const sofiaSans = Sofia_Sans_Semi_Condensed({ subsets: ['latin'], variable: '--font-primary' });
const oxanium = Oxanium({ subsets: ['latin'], variable: '--font-secondary' });

export const metadata: Metadata = {
  title: 'Home page | Nextjs boilerplate',
  description:
    '🚀 Boilerplate and Starter for Next.js, Tailwind CSS and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, React Testing Library, PostCSS, Tailwind CSS, Storybook, Plop, GH actions.'
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <Script id="Google_Tag_Manager">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5TN6V5N');`}
      </Script>
      <body
        className={cn(sofiaSans.variable, oxanium.variable, 'font-primary')}
        suppressHydrationWarning
      >
        <MainProvider>
          <MainLayout>
            <main>{children}</main>
          </MainLayout>
        </MainProvider>
        <ChatButton />

        <Script id="hbspt" src="//js.hsforms.net/forms/embed/v2.js"></Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5TN6V5N"
            height="0"
            width="0"
            style={{
              display: 'none',
              visibility: 'hidden'
            }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
};

export default RootLayout;
