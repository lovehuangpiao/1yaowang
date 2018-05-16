import * as types from '../action/constant'

export default (state={},action)=>{
  
  switch(action.type){
    case types.CATEGORY_LIST:
    return {
      ...state,
      catetorydata:action.catetorydata
    }
    case types.SUBCATEGORY_LIST:
    return {
      ...state,
      subcatetorydata: action.subcatetorydata
    }
    default :
      return state;
  }
}