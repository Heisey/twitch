import React, { useEffect, useState } from 'react'

import styles from './styles'

const Header = () => {
  const [auth, authHandler] = useState({})
  const [signedIn, signedInHandler] = useState(null)

  useEffect(() => {
    let authObj
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        authObj = window.gapi.auth2.getAuthInstance()
        authHandler(authObj)
      }).then(() => {
        signedInHandler(authObj.isSignedIn.get())
        authObj.isSignedIn.listen(() => {
          signedInHandler(authObj.isSignedIn.get())
        })
      })
    })
  }, [])


  const handleClick= () => {
    if (signedIn) {
      auth.signOut()
    } else {
      auth.signIn()
    }
  }

  console.log(signedIn)

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
          STREAMS
        </styles.NavLink>
      </styles.NavButton>
      <styles.NavButton
        onClick={handleClick}
      >
        {signedIn ? "LOGOUT" : 'LOGIN'}
      </styles.NavButton> 
    </styles.Container>
  </styles.Base>
  )
}

export default Header