import { createStore, combineReducers } from 'redux'
import placaCpf from './reducers/placaCpf'

const reducers = combineReducers({
    placaCpf: placaCpf
})

const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig