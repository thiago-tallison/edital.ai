import Link from 'next/link'
import { DialogComponent } from './dialog'
import MenuLink from './menu-link'
import { buttonVariants } from './ui/button'
import { Github } from 'lucide-react'

export default function Header() {
  return (
    <header className='flex items-center justify-center border-b px-6 py-3'>
      <div className='mr-3 block sm:hidden'>
        <DialogComponent />
      </div>

      <div className='flex flex-1 items-center justify-between md:max-w-5xl'>
        <Link href='/'>
          <h1 className='cursor-pointer select-none text-xl font-bold'>
            edital.ai
          </h1>
        </Link>

        <div className='hidden sm:block'>
          <MenuLink />
        </div>

        <div>
          <Link
            target='_blank'
            href='https://github.com/thiago-tallison/edital.ai'
            className={buttonVariants({ variant: 'outline' })}
          >
            <Github className='mr-2 h-4 w-4' />
            Github
          </Link>
        </div>
      </div>
    </header>
  )
}
