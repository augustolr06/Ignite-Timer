import { ThemeProvider } from "styled-components"
import { Button } from "./Components/Button/Button"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="neutral" />
      <Button />
    </ThemeProvider>
  )
}
