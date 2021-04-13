export const CategoryList: string[] = [
  'cama, mesa e banho',
  'móveis',
  'eletrodomésticos',
  'tv e vídeo',
  'informática'
]

export const AccountList: any = {
  'Meu perfil': 'profile',
  'Meus endereços': 'adresses',
  'Meus Cartões': 'accounts',
  'Lista de desejos': 'wishlist',
  'Minhas compras': 'shopHistory'
}

type ShopHistoryMenu = {
  color: string
  textLabel: string
  icon: string
  route: string
}

export const ShopHistoryList: ShopHistoryMenu[] = [
  {
    color: 'default',
    textLabel: 'Todas',
    icon: 'ShopTwo',
    route: ''
  },
  {
    color: 'default',
    textLabel: 'A enviar',
    icon: 'Payment',
    route: '/toSend'
  },
  {
    color: 'default',
    textLabel: 'A receber',
    icon: 'Room',
    route: '/toReceive'
  }
]
