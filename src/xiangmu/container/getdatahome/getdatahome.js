import {connect} from 'react-redux'

import Home from '../../components/home/home'
import * as actions from '../../action/'

const makeStateToProps = (state)=>{
  return {
    headData:state
  }
}

const makeDispatchToProps = (dispatch)=>{
  return {
    getData:(config)=>{
      dispatch(actions.action_head_requesting(config))
    }
  }
}


export default connect(makeStateToProps,makeDispatchToProps)(Home)