import { storageShopcartKey, storageShopcartQntKey } from './constants'

export function getShopcart(): number[] | undefined {
  const shopcart = sessionStorage.getItem(storageShopcartKey)

  if (shopcart === undefined || shopcart === null) return undefined
  const products = shopcart.split(',').filter(item => item.length > 0)

  return products.map(p => parseInt(p))
}

export function getMappedShopcart(): { id: number; qnt: number }[] | undefined {
  const shopcart = getShopcart()
  const mappedShopcart: { id: number; qnt: number }[] = []
  if (shopcart === undefined || shopcart === null) return undefined

  // for (let i = 0; i < shopcart.length; i++) {

  // }

  return mappedShopcart
}

export function arrayToShopcart(productsIds: number[]): string {
  let shopcartString = ''

  productsIds.forEach((id, idx, arr) => {
    shopcartString += id.toString()
    if (arr[idx + 1]) shopcartString += ','
  })

  sessionStorage.setItem(storageShopcartKey, shopcartString)
  sessionStorage.setItem(storageShopcartQntKey, productsIds.length.toString())
  return shopcartString
}

export function pushToShopcart(productId: number): void {
  const shopcart = getShopcart()
  console.log({ shopcart })
  if (shopcart) {
    arrayToShopcart([...shopcart, productId])
  }
}

export function removeFromShopcart(productId: number): void {
  const shopcart = getShopcart()

  if (shopcart) {
    arrayToShopcart(shopcart.filter(id => id !== productId))
  }
}
