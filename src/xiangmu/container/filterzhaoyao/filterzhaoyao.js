
/*
 * Author: 李锦沛
 * E-Mail: 13169840505@163.com
 * NickName: les
 */

import React from 'react'

import {connect} from 'react-redux'
import Zhaoyao from '../../components/zhaoyao/zhaoyao'
import * as actions from '../../action/'

// const makeStateToProps = (state)=>{
//   let data = [];
//   try {
//     data =  state.catetoryData.data.data ||{}
//   } catch (error) {
//     data = [];
//   }
//   return {
//     data : data
//   }
// }

const makeDispatchToProps=(dispatch)=>{

  return {
    getData : (config)=>{
      dispatch(actions.action_catetory());
    }
  }
}

export default connect(null,makeDispatchToProps)(Zhaoyao);