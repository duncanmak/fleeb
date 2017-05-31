import { combineReducers } from 'redux'

const fooReducer = (state = 'SHOW_ALL', action: any) => {
  switch (action.type) {
    case 'REQUEST_FOO':
      return action.filter
    case 'RECEIVED_FOO':
    
    default:
      return state
  }
}
const reducers = combineReducers({
  fooReducer
})

export default reducers