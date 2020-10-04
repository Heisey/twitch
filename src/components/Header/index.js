import React, { useEffect } from 'react'

import styles from './styles'

const Header = () => {

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
        scope: 'email'
      })
    })
  }, [])
  return (
    <styles.Base>
    <styles.Logo>
    <styles.NavLink
        to='/'
      >
        TWITCH
      </styles.NavLink>
    </styles.Logo> 
    <styles.Container>
      <styles.NavButton>
        <styles.NavLink
          to='/streams/new'
        >
          Streams
        </styles.NavLink>
      </styles.NavButton>
      <styles.NavButton>Login</styles.NavButton> 
    </styles.Container>
  </styles.Base>
  )
}

export default Header