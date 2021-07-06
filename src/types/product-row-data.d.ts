type trackingList = {
  date: string
  status: string
}

export type ProductRowData = {
  id: number
  product: string
  img: string
  quantity: number
  total: number
  trackingCode: string
  address: string
  tracking: trackingList[]
}
