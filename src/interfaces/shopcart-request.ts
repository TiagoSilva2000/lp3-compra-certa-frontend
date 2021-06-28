export interface ShopcartRequestItem {
  id: number
  qnt: number
}

export interface ShopcartRequest {
  items: ShopcartRequestItem[]
}
