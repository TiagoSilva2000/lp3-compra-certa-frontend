export type CreditCardBasicInfo = {
  name?: string
  owner_name: string
  last_digits: string
  default: boolean
}

export type CreditCardInfo = CreditCardBasicInfo & {
  // ownerName: string
  // cardName: string
  // lastDigits: string
  // default: boolean
  due_date: string
  ccv: string
}
