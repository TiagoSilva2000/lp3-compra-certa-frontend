import { UserType } from '../enum/user-type.enum'
import { storageTokenKey, storageUserRoleKey } from './constants'

export const tokenChecking = (allowRole?: UserType): void => {
  const role = sessionStorage.getItem(storageUserRoleKey)
  const token = sessionStorage.getItem(storageTokenKey)
  if (!token || (allowRole && role !== allowRole.toString())) {
    window.open('/not-found', '_self')
  }
}
