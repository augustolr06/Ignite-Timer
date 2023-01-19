import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'neutral'

interface ButtonContainerProps {
  variant?: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 300px;

  height: 40px;

  background-color: blue;
`
