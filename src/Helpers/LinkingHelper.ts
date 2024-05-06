import { Linking } from 'react-native'

export const linkingOpenURL = (href: string) => {
  if (href.includes('https://') || href.includes('http://')) {
    Linking.openURL(href)
  } else {
    Linking.openURL(`https://${href}`)
  }
}

export const linkingOpenPhone = (phone: string) => {
  Linking.openURL(`tel:${phone}`)
}

export const apiLinkWithFilterToURL = (url: string, filter: any) => {
  let query = ''
  if (filter) {
    query = Object.keys(filter)
      .map(key => `${key}=${filter[key]}`)
      .join('&')
  }
  return `${url}?${query}`
}
