import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
}

export function Button(props: ButtonProps) {
  return (
    <div>
      <ButtonContainer variant={props.variant}> Enviar </ButtonContainer>
    </div>
  )
}
