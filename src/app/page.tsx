import MenuLink from '@/components/menulink'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex items-center justify-between border-b px-6 py-3'>
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
  )
}
