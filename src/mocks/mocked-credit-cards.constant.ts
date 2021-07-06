import { CreditCardInfo } from '../types/credit-card-info'

export const mockedCreditCards: CreditCardInfo[] = [
  {
    name: 'Cartão da Mãe',
    default: true,
    last_digits: '4448',
    owner_name: 'Tiago',
    due_date: '10/2021',
    ccv: '288'
  },
  {
    name: 'Cartão do Pai',
    default: true,
    last_digits: '4851',
    owner_name: 'Evelyn',
    due_date: '10/2021',
    ccv: '288'
  },
  {
    name: 'Meu cartão',
    default: true,
    last_digits: '9987',
    owner_name: 'Thiago',
    due_date: '10/2021',
    ccv: '288'
  }
]
