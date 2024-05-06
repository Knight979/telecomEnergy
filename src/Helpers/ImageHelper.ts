import Config from 'react-native-config'
type Image_Size = 320 | 768 | 1280 | 'original'

export const getImageURL = (imageHash: string | null, size?: Image_Size) => {
  if (!imageHash) {
    return ''
  }
  return `${Config.ASSET_URL}/${size ? size : 768}/${imageHash}`
}
