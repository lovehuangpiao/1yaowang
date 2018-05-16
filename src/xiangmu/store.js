import rootReducer from './reducer/'
import {createStore,applyMiddleware} from 'redux'

import getdataMiddleware from './middlewares/getdataMiddleware'

export default createStore(rootReducer,applyMiddleware(getdataMiddleware));