import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './Home.styles'
import { useContext } from 'react'
import { NewCycleForm } from './components/NewCycleForm/NewCycleForm'
import { Countdown } from './components/Countdown/Countdown'
import { CyclesContext } from '../../contexts/CyclesContext'

/* interface NewCycleFormData {
  task: string
  minutesAmount: number
} */

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'informe a tarefa'),
  owner: zod.string().optional(),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo deve ter um tempo maior que 5 minutos')
    .max(60, 'O ciclo deve ter um tempo menor que 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, reset, watch } = newCycleForm

  const taskField = watch('task')
  const minutesAmountField = watch('minutesAmount')
  const isSubmitDisabled = !taskField || !minutesAmountField

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} /> Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} /> Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
