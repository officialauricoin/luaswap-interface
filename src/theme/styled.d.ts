import { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components'

export type Color = string
export interface Colors {
  // base
  white: Color
  black: Color

  // text
  text1: Color
  text2: Color
  text3: Color
  text4: Color
  text5: Color
  text6: Color

  // backgrounds / greys
  bg1: Color
  bg2: Color
  bg3: Color
  bg4: Color
  bg5: Color
  bg6: Color

  modalBG: Color
  advancedBG: Color

  //blues
  primary1: Color
  primary2: Color
  primary3: Color
  primary4: Color
  primary5: Color

  primaryText1: Color

  // pinks
  secondary1: Color
  secondary2: Color
  secondary3: Color

  // other
  red1: Color
  red2: Color
  green1: Color
  yellow1: Color
  yellow2: Color
  blue1: Color

  textColor: Color
  panelColor: Color
  backgroundColor: Color
  uniswapPink: Color
  concreteGray: Color
  inputBackground: Color
  shadowColor: Color
  mercuryGray: Color
  onlyLight: Color
  divider: Color
  link: Color
  blue: Color
  background: Color
}

export interface Grids {
  sm: number
  md: number
  lg: number
}

export interface Spacing {
  1: number
  2: number
  3: number
  4: number
  5: number
  6: number
  7: number
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {
    grids: Grids

    // shadows
    shadow1: string

    // spacing
    spacing: Spacing

    // SiteWidth

    siteWidth: number

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
    }

    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation
    flexRowNoWrap: FlattenSimpleInterpolation
  }
}
