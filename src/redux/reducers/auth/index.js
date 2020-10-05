import { 
  SIGN_IN,
  SIGN_OUT,
  SET_USER_ID,
  REMOVE_USER_ID
} from '../../keys'
const INIT_STATE = {
  isSignedIn: null,
  userId: null
}

export default (state = INIT_STATE, action) => {
  switch(action.type) {
    case SIGN_IN:
      return {...state, isSignedIn: true}
    case SIGN_OUT:
      return {...state, isSignedIn: false}
    case SET_USER_ID:
      return {...state, userId: action.payload}
    case REMOVE_USER_ID:
      return {...state, userId: null}
    default:
      return state
  }
}