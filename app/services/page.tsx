"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Truck,
  Users,
  Shield,
  Award,
  Clock,
  Calculator,
  Headphones,
  Package,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"

export default function ServicesPage() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Bulk Ordering",
      description: "Large quantity discounts with flexible delivery schedules to meet your project timelines.",
      features: [
        "Volume pricing tiers",
        "Flexible delivery scheduling",
        "Project-based ordering",
        "Inventory management support",
      ],
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Contractor Discounts",
      description: "Special pricing programs for certified contractors and repeat customers.",
      features: [
        "Tiered discount structure",
        "Loyalty rewards program",
        "Net payment terms",
        "Exclusive contractor pricing",
      ],
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Professional Support",
      description: "Expert technical support and product recommendations from roofing specialists.",
      features: ["Technical consultation", "Product selection guidance", "Installation support", "Warranty assistance"],
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics & Delivery",
      description: "Reliable delivery services with tracking and flexible scheduling options.",
      features: ["Same-day delivery available", "Job site delivery", "Real-time tracking", "Flexible scheduling"],
    },
    {
      icon: <Calculator className="h-8 w-8" />,
      title: "Project Estimation",
      description: "Material calculation and project planning assistance for accurate ordering.",
      features: [
        "Material quantity calculations",
        "Cost estimation tools",
        "Project planning support",
        "Waste factor analysis",
      ],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "All materials meet or exceed industry standards with comprehensive warranties.",
      features: [
        "Industry certification compliance",
        "Quality control testing",
        "Manufacturer warranties",
        "Return/exchange policies",
      ],
    },
  ]

  const benefits = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "25+ Years Experience",
      description: "Serving the roofing industry with expertise and reliability",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "99% On-Time Delivery",
      description: "Consistent, reliable delivery to keep your projects on schedule",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certified Products",
      description: "All materials meet industry standards and manufacturer specifications",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service for urgent project needs",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <SiteHeader />

      {/* Page Header */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Wholesale Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("ourServices")}</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Comprehensive wholesale solutions designed specifically for roofing contractors and distributors. We
              provide the materials, support, and services you need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose RoofMaterials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional service and quality materials to help your business thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="bg-primary rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Partner with Us?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your wholesale needs and discover how we can support your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/contact">
                  {t("contactUs")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
