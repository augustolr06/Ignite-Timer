/* eslint-disable prettier/prettier */
import 'styled-components'

export interface AppTheme {
  white: string

  gray_100: string
  gray_300: string
  gray_400: string
  gray_500: string
  gray_600: string
  gray_700: string
  gray_800: string
  gray_900: string

  green_300: string
  green_500: string
  green_700: string

  red_500: string
  red_700: string

  yellow_500: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme { }
}
