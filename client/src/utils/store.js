// create the Redux store
// export the Redux store
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(reducer)

export default store;