import {
  SIGN_IN,
  SIGN_OUT,
  SET_USER_ID,
  REMOVE_USER_ID
} from '../../keys'

export const signIn = () => {
  return {
    type: SIGN_IN
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const setUserId = ( payload ) => {
  return {
    type: SET_USER_ID,
    payload
  }
}

export const removeUserId = () => {
  return {
    type: REMOVE_USER_ID
  }
}