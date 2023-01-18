import { ThemeProvider } from "styled-components"
import { Button } from "./Components/Button/Button"
import { defaultTheme } from "./styles/themes/defaut"

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="neutral" />
      <Button />
    </ThemeProvider>
  )
}
