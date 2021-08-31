import { createStore } from 'redux'
import reducer from './reducers/anecdoteReducer'

const store = () => {
  const storeCreation = createStore(
    reducer,
    composeWithDevTools
  )

  return storeCreation
}

export default store
