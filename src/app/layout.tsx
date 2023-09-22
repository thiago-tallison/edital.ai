import MenuLink from '@/components/menulink'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
          <div className='flex items-center justify-center border-b px-6 py-3'>
            <div className='flex flex-1 items-center justify-between md:max-w-5xl'>
              <Link href='/'>
                <h1 className='cursor-pointer select-none text-xl font-bold'>
                  edital.ai
                </h1>
              </Link>

              <MenuLink />

              <div>
                <Button variant='outline'>
                  <Github className='mr-2 h-4 w-4' />
                  Github
                </Button>
              </div>
            </div>
          </div>
          <div className='mx-10 md:mx-auto md:mt-6 md:max-w-5xl'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
