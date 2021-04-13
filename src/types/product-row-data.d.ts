type trackingList = {
  date: string
  status: string
}

export type ProductRowData = {
  product: string
  img: string
  quantity: number
  total: number
  trackingCode: string
  address: string
  tracking: trackingList[]
}
