import {combineReducers} from 'redux'
import headDataReducer from './headDataReducer'
import catetoryData from './catetoryreducer'


let rootReducer =  combineReducers({
  headData:headDataReducer,
  catetoryData : catetoryData
});

export default rootReducer;