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
