import {
  ShopHistoryRoute,
  AccountRoute,
  AddressRoute,
  ProfileRoute,
  WishlistRoute,
  ShopRoute
} from './routes.constant'

export const categoryList: { name: string; route: string }[] = [
  { name: 'cama, mesa e banho', route: `${ShopRoute}/camamesabanho` },
  { name: 'móveis', route: `${ShopRoute}/moveis` },
  { name: 'eletrodomésticos', route: `${ShopRoute}/eletrodomesticos` },
  { name: 'tv e vídeo', route: `${ShopRoute}/tvevideo` },
  { name: 'informática', route: `${ShopRoute}/informatica` }
]

export const AccountList: { name: string; route: string }[] = [
  { name: 'Meu perfil', route: ProfileRoute },
  { name: 'Meus endereços', route: AddressRoute },
  { name: 'Meus Cartões', route: AccountRoute },
  { name: 'Lista de desejo', route: WishlistRoute },
  { name: 'Minhas compras', route: ShopHistoryRoute }
]

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
