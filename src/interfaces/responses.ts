export interface GetUserResponse {
  id: number
  email: string
  first_name: string
  last_name: string
  password: string
  phone: string
  cpf: string
  user_type: number
}

export interface GetTokenResponse {
  user_id: number
  token: string
}

export interface GetAuthResponse {
  user: GetUserResponse
  token: GetTokenResponse
  favs: number[]
}

export interface GetAddressResponse {
  id: number
  user_id: number
  city: string
  state: string
  country: string
  cep: string
  street: string
  neighbour: string
  house_id: string
  details: string
  owner_phone: string
  owner_name?: string
  default?: boolean
}
export interface StatusResponse {
  message: string
  http_code: number
}
export interface CreditCardResponse {
  owner_name: string
  last_digits: string
  due_date: string
}
export interface PaymentResponse {
  id: number
  name?: string
  paymentMethod: string
  default: boolean
  payment?: CreditCardResponse
}

export interface MediaResponse {
  path: string
  ext: string
  main: boolean
}

export interface PriceResponse {
  value: number
  divided_max: number
  payment_discount?: number
  active: boolean
}
export interface ProductResponse {
  id: number
  name: string
  rating: number
  type: string
  description: string
  stock: number
  provider_id: number
  sold_qnt: number
  active_price: PriceResponse
  main_media?: MediaResponse
}
