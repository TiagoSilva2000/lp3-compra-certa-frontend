import { storageTokenKey } from './constants'

function withoutPrefix(): string | null {
  return sessionStorage.getItem(storageTokenKey)
}

function withPrefix(): string | null {
  const token = withoutPrefix()
  if (!token) return null
  return `Bearer ${token}`
}

const getToken = {
  withoutPrefix,
  withPrefix
}

export default getToken
