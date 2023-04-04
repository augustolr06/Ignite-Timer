import { Outlet } from 'react-router-dom'
import { Header } from '../../Components/Header/Header'
import { DefaultLayoutContainer } from './DefaultLayout.styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  )
}
