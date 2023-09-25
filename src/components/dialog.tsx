'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import './dialog.css'

import MenuLink from './menu-link'
import Link from 'next/link'

export function DialogComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <Menu className='cursor-pointer' />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0' />
        <Dialog.Content className='data-[state=open]:duration-250 fixed inset-y-0 left-0 z-50 h-full w-3/4 gap-4 bg-background p-6 pr-0 shadow-lg transition ease-in-out data-[state=closed]:duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm'>
          <Dialog.Title asChild>
            <Link href='/' className='font-sm select-none font-bold'>
              edital.ai
            </Link>
          </Dialog.Title>

          <MenuLink orientation='vertical' />

          <Dialog.Close asChild className='IconButton'>
            <X className='cursor-pointer' />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
