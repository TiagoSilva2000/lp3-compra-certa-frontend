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
