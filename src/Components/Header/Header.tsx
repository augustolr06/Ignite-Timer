import { HeaderContainer, HeaderMenu } from './Header.styles'
import IgniteLogo from '../../assets/IgniteLogo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <img src={IgniteLogo} alt="" />
        <HeaderMenu>
          <NavLink to="/" title="Timer">
            <Timer size={24} />
          </NavLink>

          <NavLink to="/history" title="Histórico">
            <Scroll size={24} />
          </NavLink>
        </HeaderMenu>
      </HeaderContainer>
    </div>
  )
}
