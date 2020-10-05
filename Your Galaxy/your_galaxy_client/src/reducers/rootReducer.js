import { combineReducers } from 'redux'
import { phoneReducer } from './phoneReducer'
import { postReducer } from './postReducer'

export const rootReducer = combineReducers({
  phones: phoneReducer,
  posts: postReducer
})
