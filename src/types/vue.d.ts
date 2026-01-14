import { ComponentCustomProperties } from 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $siteTitle: string,
    $assetUrl: string
  }
}
