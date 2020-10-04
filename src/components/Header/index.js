import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { actions } from '../../redux'
import styles from './styles'

const Header = (props) => {
  const {
    signIn,
    signOut,
    isSignedIn
  } = props

  // const [auth, authHandler] = useState({})
  const [signedIn, signedInHandler] = useState(false)

  const handleLogin = () => {
    console.log('puppy click', isSignedIn)
    if (isSignedIn) {
      signIn()
    } else if (isSignedIn === null) {
      signIn()
    } else {
      signOut()
    }
  }

  useEffect(() => {
    console.log('puppies')
    // let authObj
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
        scope: 'email'
      }).then(() => {
        handleLogin(isSignedIn)
        // authObj = window.gapi.auth2.getAuthInstance()
        // authHandler(authObj)
      })//.then(() => {
    //     signedInHandler(authObj.isSignedIn.get())
    //     authObj.isSignedIn.listen((isLoggedIn) => {
    //       handleLogin(isLoggedIn)
    //       signedInHandler(isLoggedIn)
    //     })
    //   })
    })
  }, [handleLogin, isSignedIn])

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
        {signedIn ? "LOGOUT" : 'LOGIN'}
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