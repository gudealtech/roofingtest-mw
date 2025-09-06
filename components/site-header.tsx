"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { LanguageSelector } from "@/components/language-selector"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { href: "/", label: t("home") },
    { href: "/products", label: t("products") },
    { href: "/services", label: t("services") },
    { href: "/contact", label: t("contact") },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">RM</span>
            </div>
            <span className="font-bold text-xl">RoofMaterials</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                isActive(item.href) ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Language Selector */}
        <div className="hidden md:block">
          <LanguageSelector />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="sm" className="px-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between pb-4 border-b">
                <div className="flex items-center space-x-2">
                  <div className="h-6 w-6 bg-primary rounded-md flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xs">RM</span>
                  </div>
                  <span className="font-bold">RoofMaterials</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="px-2">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4 py-6 flex-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary px-2 py-1 rounded-md",
                      isActive(item.href) ? "text-foreground bg-muted" : "text-muted-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Language Selector */}
              <div className="border-t pt-4">
                <div className="px-2">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
