import React from 'react'
import {connect} from 'react-redux'
import Banner from '../../components/banner/banner'
import * as actions  from '../../action/'

const makeStateToProps = (state) => {
  
  return {
    
  }
}

const makeDispatchToProps = (dispatch)=>{
  return {
    getData : config =>{
      
    }
  }
}

export default connect(makeStateToProps,makeDispatchToProps)(Banner);