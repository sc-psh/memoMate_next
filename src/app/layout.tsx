import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Memo Mate Web Site',
  description: 'Memo Mate Web Site',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <html lang="en">
         <body className={inter.className}>
          <ClerkProvider>
            <Header />
            {children}
          </ClerkProvider>
        </body>
      </html>
    
  )
}