"use client"

import { useParams } from "next/navigation"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Check, Phone, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { getProductById, products } from "@/lib/products"

export default function ProductDetailPage() {
  const params = useParams()
  const { t } = useLanguage()
  const productId = Number.parseInt(params.id as string)
  const product = getProductById(productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <SiteHeader />

      {/* Breadcrumb */}
      <section className="py-4 border-b">
        <div className="container">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="outline">{t(product.category)}</Badge>
                  {product.inStock ? (
                    <Badge variant="default" className="bg-green-100 text-green-800 border-green-200">
                      <Check className="w-3 h-3 mr-1" />
                      In Stock
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Out of Stock</Badge>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground mb-6">{product.fullDescription}</p>
                {product.price && <div className="text-3xl font-bold text-primary mb-6">{product.price}</div>}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1" disabled={!product.inStock}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Request Quote
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Sales
                  </Link>
                </Button>
              </div>

              <Separator />

              {/* Specifications */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border/50">
                      <span className="font-medium">{key}:</span>
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Technical Details */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Details</h3>
                <ul className="space-y-2">
                  {product.technicalDetails.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-muted/50">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="aspect-[4/3] bg-muted rounded-t-lg overflow-hidden">
                      <img
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {t(relatedProduct.category)}
                    </Badge>
                    <CardTitle className="text-lg mb-2">{relatedProduct.name}</CardTitle>
                    <CardDescription className="text-sm mb-3">{relatedProduct.description}</CardDescription>
                    {relatedProduct.price && (
                      <p className="text-lg font-semibold text-primary mb-3">{relatedProduct.price}</p>
                    )}
                    <Button variant="ghost" size="sm" className="w-full" asChild>
                      <Link href={`/products/${relatedProduct.id}`}>{t("viewDetails")}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Products */}
      <section className="py-8">
        <div className="container">
          <Button variant="outline" asChild>
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Products
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
