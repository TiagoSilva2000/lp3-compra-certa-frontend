import { GetAuthResponse } from '../interfaces/responses'
import {
  storageFirstNameKey,
  storageTokenKey,
  storageShopcartKey,
  storageShopcartQntKey
} from './constants'

export function setStorageVariables(result: GetAuthResponse): void {
  sessionStorage.setItem(storageTokenKey, result.token.token)
  sessionStorage.setItem(storageFirstNameKey, result.user.first_name)
  sessionStorage.setItem(storageShopcartKey, '')
  sessionStorage.setItem(storageShopcartQntKey, '0')
}
