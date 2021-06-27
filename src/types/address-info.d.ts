export interface IAddressInfo {
  id: number
  user_id?: number
  city: string
  state: string
  country?: string
  cep: string
  street: string
  neighbour: string
  number: string
  notes: string
  ownerName: string
  ownerPhone: string
  default?: boolean
}
