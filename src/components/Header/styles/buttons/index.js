import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Logo = styled.div`
  flex-grow: 1;
  color: white;
  font-size: 30px;
`

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: white;
`

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`