import Cookies from 'js-cookie'

const TokenKey = 'JSESSIONID'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function getTokens(tokenKey) {
  return Cookies.get(tokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}