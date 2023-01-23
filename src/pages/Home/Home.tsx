import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskFormContainer,
  TaskInput,
} from './Home.styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <TaskFormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            name="task"
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Outro projeto qualquer" />
          </datalist>
          <label htmlFor="task">Durante</label>
          <MinutesAmountInput
            type="number"
            name="minutesAmount"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </TaskFormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} /> Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
