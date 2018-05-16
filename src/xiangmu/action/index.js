import * as type from './constant'

export function action_head_requesting(config){
  // console.log('====================================');
  // console.log(config,'action');
  // console.log('====================================');
  return {
    type : type.HEADDATA_REQUESTING,
    url : config.url,
    method : config.method || 'get',
    data : config.data,
  }
}

export function action_head_requested(data){
  return {
    type : type.HEADDATA_REQUESTED,
    headData : data
  }
}

export function action_head_error(err){
  return {
    type : type.HEADDATA_REQUEST_ERROE,
    headData : err
  }
}


export function action_tail_requested(data){
  return {
    type : type.TAILDATA_REQUESTED,
    tailData : data
  }
}

export function action_tail_error(err){
  return {
    type : type.TAILDATA_REQUEST_ERROE,
    tailData : err
  }
}

