"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Truck, Users, Award } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  const { t } = useLanguage()

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Valley Flashing",
      category: "valley",
      image: "/placeholder-d525q.png",
      description: "Durable valley solutions for superior water channeling and protection",
    },
    {
      id: 2,
      name: "High-Performance Underlayment",
      category: "synthetic-underlayment",
      image: "/placeholder-yw5p1.png",
      description: "Advanced synthetic protection for long-lasting roof performance",
    },
    {
      id: 3,
      name: "Professional Coil Nails",
      category: "coil-nails",
      image: "/placeholder-l8q35.png",
      description: "High-quality fasteners for reliable roofing installations",
    },
    {
      id: 4,
      name: "Roof & Bathroom Vents",
      category: "vents",
      image: "/placeholder-bc8ko.png",
      description: "Complete ventilation solutions for optimal airflow and moisture control",
    },
    {
      id: 5,
      name: "Plumbing Boot Flashing",
      category: "plumbing-flashing",
      image: "/placeholder-d525q.png",
      description: "Watertight sealing around pipe penetrations and roof fixtures",
    },
    {
      id: 6,
      name: "Blades & Gloves",
      category: "accessories",
      image: "/placeholder-yw5p1.png",
      description: "Essential tools and safety gear for roofing professionals",
    },
  ]

  const benefits = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Bulk Ordering",
      description: "Large quantity discounts and efficient delivery systems for contractors",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Contractor Discounts",
      description: "Special pricing tiers for certified contractors and repeat customers",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "All materials meet or exceed industry standards and certifications",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professional Support",
      description: "Expert technical support and product recommendations",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted to-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/placeholder-bikyj.png')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Professional Grade Materials
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">{t("heroTitle")}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8">{t("heroSubtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/products">
                  {t("exploreProducts")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                <Link href="/contact">{t("contactUs")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("featuredProducts")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular roofing materials trusted by professionals nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-[4/3] bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2">
                    {t(product.category)}
                  </Badge>
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.description}</CardDescription>
                  <Button variant="ghost" size="sm" className="mt-3 p-0 h-auto" asChild>
                    <Link href={`/products/${product.id}`}>
                      {t("viewDetails")} <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("whyChooseUs")}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive wholesale solutions for roofing professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Browse our complete catalog or speak with our team about your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/products">
                  Browse Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/contact">Speak with Expert</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
