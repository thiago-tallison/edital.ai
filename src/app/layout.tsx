import MenuLink from '@/components/menu-link'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Github, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DialogComponent } from '@/components/dialog'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'edital.ai',
  description:
    'Um site para você organizar o edital do seu concurso público com inteligência artificial.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <div className='flex min-h-screen flex-col'>
          <Header />

          <main className='flex w-full max-w-5xl flex-1 justify-between self-center px-4 py-4 sm:px-10'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
