
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from '@/components/icons/logo';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/placeholder-data';
import type { LucideIcon } from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export function Header() {
  const pathname = usePathname();

  const NavLink = ({ href, label, icon: Icon, mobile = false }: NavItem & { mobile?: boolean }) => (
    <Button
      variant="ghost"
      asChild
      className={cn(
        "justify-start text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground",
        mobile ? "w-full text-base py-3 px-4" : ""
      )}
    >
      <Link href={href}>
        <Icon className={cn("h-4 w-4", mobile ? "mr-3" : "mr-2")} />
        {label}
      </Link>
    </Button>
  );
  
  const MobileNavLink = ({ href, label, icon: Icon }: NavItem) => (
     <SheetClose asChild>
        <NavLink href={href} label={label} icon={Icon} mobile={true} />
     </SheetClose>
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="PersonaLink Home">
          <Logo />
        </Link>

        <nav className="hidden flex-grow items-center justify-center space-x-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" asChild className="hidden md:flex">
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Link>
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-0">
                <div className="flex h-full flex-col">
                  <div className="border-b p-4">
                     <Link href="/" className="flex items-center gap-2" aria-label="PersonaLink Home">
                        <Logo />
                      </Link>
                  </div>
                  <nav className="flex flex-1 flex-col gap-2 p-4">
                    {navItems.map((item) => (
                       <MobileNavLink key={item.href} {...item} />
                    ))}
                  </nav>
                  <div className="mt-auto border-t p-4">
                    <SheetClose asChild>
                       <Button variant="outline" asChild className="w-full">
                        <Link href="/login">
                          <LogIn className="mr-2 h-4 w-4" /> Login
                        </Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
