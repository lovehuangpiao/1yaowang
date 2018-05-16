import * as constants from '../action/constant'
import * as actions from '../action/'

// const request = require('superagent');
import HttpClient from '../utils/httpclient'

export default (store)=>(dispatch)=>(action)=>{
  // console.log('====================================');
  // console.log(action,'middleware');
  // console.log('====================================');
  let {url,method,data} = action;
  if(url){
    if(url && method==='get'){
      HttpClient.get(url,data).then(res=>{
        if(res.data.banner){
          return dispatch(actions.action_head_requested(res))
        }else{
          return dispatch(actions.action_tail_requested(res))
        }
      }).catch(err=>{
        return dispatch(actions.action_head_error(err))
      })
    }
  }else{
    return dispatch(action);
  }
}