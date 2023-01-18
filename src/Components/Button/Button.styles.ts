
import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'neutral'

interface ButtonContainerProps {
  variant?: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 300px;


  height: 40px;

  background-color: ${props => {
    if (props.variant === "primary") return props.theme.primary;
    else if (props.variant === "secondary") return props.theme.secondary;
    else if (props.variant === "neutral") return props.theme.neutral;
    else return 'unset';
  }};
`


