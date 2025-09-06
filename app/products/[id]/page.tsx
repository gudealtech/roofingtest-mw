import { products } from "@/lib/products"
import ProductDetailClient from "./product-detail-client"

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductDetailPage() {
  return <ProductDetailClient />
}
