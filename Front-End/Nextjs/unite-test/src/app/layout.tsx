import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/Theme/theme-provider'

import './globals.css'
import { ThemeToggle } from '@/components/Theme/ThemeToggle'
export const metadata: Metadata = {
  title: 'To-Do App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className='fixed right-4'>
          <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
