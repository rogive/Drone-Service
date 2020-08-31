import { createStore } from 'redux'

const SET_GLOBAL_USER = 'SET_GLOBAL_USER'
const RESET_GLOBAL_USER = 'RESET_GLOBAL_USER'

export function setGlobalUser(userData) {
  return {
    type: SET_GLOBAL_USER,
    payload: userData 
  }
}

export function resetGlobalUser() {
  return {
    type: RESET_GLOBAL_USER,
    payload: null
  }
}

function reducer(state, action) {
  switch(action.type) {
    case SET_GLOBAL_USER:
      return {
        ...state,
        userName: action.payload.name,
        userId: action.payload._id
      }
    case RESET_GLOBAL_USER:
      return {
        ...state,
        userName: action.payload,
        userId: action.payload
      }
      default:
        return state
  }
}

const initialState = {
  userName: null,
  userId: null
}

export const store = createStore(reducer, initialState)