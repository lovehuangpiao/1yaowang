import {combineReducers} from 'redux'
import headDataReducer from './headDataReducer'


let rootReducer =  combineReducers({
  headData:headDataReducer
});

export default rootReducer;