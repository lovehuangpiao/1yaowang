import React from 'react'
import {connect} from 'react-redux'
import Banner from '../../components/banner/banner'
import * as actions  from '../../action/'

const makeStateToProps = (state,ownProps) => {
  let banner = null;
  let tailbanner = null;
  try {
    banner = state.headData.headData.data.banner ||[]
  } catch (error) {
    banner = [];    
  }
  try {
    tailbanner = state.headData.tailData.data.bigMatch || []
    
  } catch (error) {
    tailbanner = []
  }
  // console.log('====================================');
  // console.log(tailbanner,'55555555555');
  // console.log('====================================');
  return {
    banner:banner,
    tailbanner:tailbanner,
    type:ownProps.position
  }
}

const makeDispatchToProps = (dispatch)=>{
  return {
    getData : config =>{
      
    }
  }
}

export default connect(makeStateToProps)(Banner);