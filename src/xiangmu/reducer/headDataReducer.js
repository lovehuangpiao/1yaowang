import * as contants from '../action/constant'

export default (state={},action)=>{
  // console.log('====================================');
  // console.log(action);
  // console.log('====================================');
  switch(action.type){
    case contants.HEADDATA_REQUESTING:
      return {
        ...state,
        loading:ture
      };
    case contants.HEADDATA_REQUESTED:
      return {
        ...state,
        headData:action.headData,
        loading:false
      }
    case contants.TAILDATA_REQUESTED:
      return {
        ...state,
        tailData : action.tailData,
        loading : false
      }
    case contants.HEADDATA_REQUEST_ERROE:
      return {
        ...state,
        err:action.err,
        loading:false
      };
    
    default: 
      return state;
  }
}