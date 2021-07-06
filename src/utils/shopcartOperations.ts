import { ShopcartRequestItem } from '../interfaces/shopcart-request'
import { storageShopcartKey, storageShopcartQntKey } from './constants'

export function getShopcart(): ShopcartRequestItem[] | undefined {
  const shopcart = sessionStorage.getItem(storageShopcartKey)

  if (shopcart === undefined || shopcart === null) return undefined
  if (shopcart.length === 0) return []

  return JSON.parse(shopcart)
}

export function clearShopcart(): void {
  sessionStorage.setItem(storageShopcartKey, '')
}

export function arrayToShopcart(productsIds: ShopcartRequestItem[]): string {
  const shopcartString = JSON.stringify(productsIds)

  sessionStorage.setItem(storageShopcartKey, shopcartString)
  sessionStorage.setItem(
    storageShopcartQntKey,
    productsIds
      .reduce((acc, curr) => {
        acc += curr.qnt
        return acc
      }, 0)
      .toString()
  )
  return shopcartString
}

export function pushToShopcart(productId: number, qnt = 1): void {
  const shopcart = getShopcart()

  if (shopcart) {
    const idx = shopcart.findIndex(v => v.id === productId)
    if (idx === -1) {
      shopcart.push({ id: productId, qnt })
    } else {
      shopcart[idx].qnt += qnt
    }

    arrayToShopcart(shopcart)
  }
}

export function isInShopcart(productId: number): boolean {
  const shopcart = getShopcart()

  if (shopcart === undefined || shopcart === null) return false

  return shopcart.findIndex(v => v.id === productId) !== -1
}

export function removeFromShopcart(productId: number): void {
  const shopcart = getShopcart()

  if (shopcart) {
    arrayToShopcart(shopcart.filter(v => v.id !== productId))
  }
}
