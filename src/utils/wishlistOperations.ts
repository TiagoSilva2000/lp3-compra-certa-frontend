import { storageWishlistKey } from './constants'

export function getWishlist(): number[] | undefined {
  const Wishlist = sessionStorage.getItem(storageWishlistKey)

  if (Wishlist === undefined || Wishlist === null) return undefined
  const products = Wishlist.split(',').filter(item => item.length > 0)

  return products.map(p => parseInt(p))
}

export function arrayToWishlist(productsIds: number[]): string {
  const wishlistString = productsIds.toString()

  sessionStorage.setItem(storageWishlistKey, wishlistString)
  return wishlistString
}

export function isInWishlist(productId: number): boolean {
  const wishlist = getWishlist()

  if (wishlist === undefined || wishlist === null) return false

  return wishlist.findIndex(w => w === productId) !== -1
}

export function pushToWishlist(productId: number): void {
  const wishlist = getWishlist()
  if (wishlist) {
    arrayToWishlist([...wishlist, productId])
  }
}

export function removeFromWishlist(productId: number): void {
  const wishlist = getWishlist()

  if (wishlist) {
    arrayToWishlist(wishlist.filter(id => id !== productId))
  }
}
