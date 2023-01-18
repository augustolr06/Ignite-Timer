import "styled-components";

export interface AppTheme {
  primary: string,
  secondary: string,
  neutral: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme { }
}

