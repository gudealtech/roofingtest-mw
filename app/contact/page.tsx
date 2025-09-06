"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Building, Users, Truck, MessageCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function ContactPage() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      description: "Speak directly with our sales team",
      details: "+1 (555) 123-4567",
      action: "Call Now",
      href: "tel:+15551234567",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Send us your inquiries and requests",
      details: "info@roofmaterials.com",
      action: "Send Email",
      href: "mailto:info@roofmaterials.com",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Sales Inquiries",
      description: "For quotes and bulk orders",
      details: "sales@roofmaterials.com",
      action: "Contact Sales",
      href: "mailto:sales@roofmaterials.com",
    },
  ]

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency Support", hours: "24/7 Available" },
  ]

  const departments = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Sales Department",
      description: "Product inquiries, quotes, and orders",
      contact: "sales@roofmaterials.com",
    },
    {
      icon: <Truck className="h-5 w-5" />,
      title: "Logistics",
      description: "Delivery scheduling and tracking",
      contact: "logistics@roofmaterials.com",
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "Customer Service",
      description: "General support and account management",
      contact: "support@roofmaterials.com",
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
              Get in Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("getInTouch")}</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Ready to discuss your roofing material needs? Our experienced team is here to help you find the right
              solutions for your projects.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mx-auto mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-4">{method.details}</p>
                  <Button asChild className="w-full">
                    <a href={method.href}>{method.action}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Business Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t("address")}</h3>
                      <p className="text-muted-foreground">
                        1234 Industrial Blvd
                        <br />
                        Roofing District, RD 12345
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-lg flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Business Hours</h3>
                      <div className="space-y-2">
                        {businessHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{schedule.day}:</span>
                            <span className="font-medium">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Departments */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Departments</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-md flex-shrink-0">
                        {dept.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{dept.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{dept.description}</p>
                        <a href={`mailto:${dept.contact}`} className="text-sm text-primary hover:underline">
                          {dept.contact}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Location</h2>
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RoofMaterials Location"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Located in the heart of the industrial district with easy access for pickup and delivery services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact us today to discuss your roofing material needs and get a customized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+15551234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:sales@roofmaterials.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Sales
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
