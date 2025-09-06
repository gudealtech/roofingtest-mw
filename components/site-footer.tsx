"use client"

import { useLanguage } from "@/hooks/use-language"
import { Phone, Mail } from "lucide-react"
import Link from "next/link"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-24 w-24 rounded-md overflow-hidden bg-transparent">
                <img
                  src="/gudeal-logo-grayscale.svg"
                  alt="Gudeal Canada"
                  className="h-full w-full object-contain bg-transparent"
                />
              </div>
              <span className="font-bold text-xl">Gudeal Canada</span>
            </div>
            <p className="text-secondary-foreground/80 mb-4 max-w-md">
              Your trusted partner for professional roofing materials. Serving contractors and distributors across
              Canada with quality products and exceptional service.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {t("products")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("contact")}</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-secondary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-secondary-foreground/80">info@gudealcanada.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/60">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
