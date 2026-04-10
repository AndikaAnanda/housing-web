// types/index.ts
export type HouseSpecs = {
  lt: number
  lb: number
  kt: number
  km: number
  garasi: number
  lantai: number
}

export type House = {
  id: string
  name: string
  type: string
  status: 'available' | 'indent' | 'sold'
  price: number
  priceDisplay: string
  salePrice?: number
  salePriceDisplay?: string
  rentPrice?: number
  rentPriceDisplay?: string
  rentFurnishedPrice?: number
  rentFurnishedPriceDisplay?: string
  specs: HouseSpecs
  address: string
  description: string
  features: string[]
  images: string[]
  virtualTourUrl: string
  whatsapp: string
}