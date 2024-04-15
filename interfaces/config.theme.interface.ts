export interface ThemeSettingsInterface {
    isNavigationTop: boolean
    stickBanner: boolean
    stickBox: boolean
    banner: Banner
    fontFamily: FontFamily
    color: Color
  }
  
  export interface Banner {
    isFeatured: boolean
    isPreview: boolean
  }
  
  export interface FontFamily {
    cdnUrl: string
    name: string
  }
  
  export interface Color {
    primary: string
    secondary: string
    tertiary: string
  }
  