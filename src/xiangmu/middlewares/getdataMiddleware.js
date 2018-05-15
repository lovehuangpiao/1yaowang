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
        // console.log('====================================');
        // console.log(actions.action_head_requested(res),'data');
        // console.log('====================================');
        dispatch(actions.action_head_requested(res))
      }).catch(err=>{
        dispatch(actions.action_head_error(err))
      })
    }
  }else{
    dispatch(action);
  }
}