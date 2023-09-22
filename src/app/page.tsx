import MenuLink from '@/components/menulink'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <div className='flex items-center justify-between border-b px-6 py-3'>
        <h1 className='cursor-pointer select-none text-xl font-bold'>
          edital.ai
        </h1>

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
