import { CreditCardInfo } from '../types/credit-card-info'

export const mockedCreditCards: CreditCardInfo[] = [
  {
    cardName: 'Cartão da Mãe',
    default: true,
    lastDigits: '4448',
    ownerName: 'Tiago',
    dueDate: '10/2021',
    ccv: '288'
  },
  {
    cardName: 'Cartão do Pai',
    default: true,
    lastDigits: '4851',
    ownerName: 'Evelyn',
    dueDate: '10/2021',
    ccv: '288'
  },
  {
    cardName: 'Meu cartão',
    default: true,
    lastDigits: '9987',
    ownerName: 'Thiago',
    dueDate: '10/2021',
    ccv: '288'
  }
]
