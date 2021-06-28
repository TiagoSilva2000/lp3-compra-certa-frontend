import { storageTokenKey } from './constants'

export const tokenChecking = () => {
  if (!sessionStorage.getItem(storageTokenKey))
    window.open('/not-found', '_self')
}
