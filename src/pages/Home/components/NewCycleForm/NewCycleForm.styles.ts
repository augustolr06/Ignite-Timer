import styled from 'styled-components'

export const TaskFormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme.gray_100};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.gray_500};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.gray_100};

  &:focus {
    box-shadow: none;
    border-color: ${(porps) => porps.theme.green_500};
  }

  &::placeholder {
    color: ${(props) => props.theme.gray_500};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-wekbit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
