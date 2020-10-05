import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { actions } from '../../redux'
import styles from './styles'

const Header = (props) => {
  const {
    isSignedIn,
    signIn,
    signOut
  } = props

  const [authApi, authApiHandler] = useState(null);

  useEffect(() => {
    const onAuthChange = (signedInStatus) => {
      if (signedInStatus) {
        signIn();
      } else {
        signOut();
      }
    }

    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
        scope: 'email'
      })
      .then(() => {
        window.gapi.auth2.getAuthInstance()
        .then(authObj => {
          authApiHandler(authObj)
          onAuthChange(authObj.isSignedIn.get())
          authObj.isSignedIn.listen(onAuthChange)
        })
      })
    })
  }, [isSignedIn, signIn, signOut])

 const handleLogin = () => {
   if (isSignedIn) {
     authApi.signOut()
   } else {
     authApi.signIn()
   }
 }

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
        onClick={handleLogin}
      >
        {isSignedIn ? "LOGOUT" : 'LOGIN'}
      </styles.NavButton> 
    </styles.Container>
  </styles.Base>
  )
}

const mapStateToProps = (state) => {
  return {
      isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {
  signIn: actions.signIn,
  signOut: actions.signOut
})(Header)