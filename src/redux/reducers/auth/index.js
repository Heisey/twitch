const INIT_STATE = {
  isSignedIn: null
}

export default (state = INIT_STATE, action) => {
  switch(action.type) {
    case 'SIGN_IN':
      return {...state, isSignIn: true}
    case 'SIGN_OUT':
      return {...state, isSignIn: false}
    default:
      return state
  }
}