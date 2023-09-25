'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

type MenuLinkProps = {
  orientation?: 'horizontal' | 'vertical'
}

export default function MenuLink({ orientation }: MenuLinkProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={orientation === 'vertical' ? 'flex flex-col' : ''}
      >
        <NavigationMenuItem>
          <Link href='/how-to-use' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Como usar
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href='#' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Exemplos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
