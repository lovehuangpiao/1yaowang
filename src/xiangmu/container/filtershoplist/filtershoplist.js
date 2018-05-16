import {connect} from 'react-redux'
import Shoplist from '../../components/shoplist/shoplist'


const makeStateToProps = (state)=>{
  let data = null;
  try {
    data = state.headData.tailData.data.goodTopic || []
  } catch (error) {
    data = []
  }
  return {
    data : data
  }
   
}

export default connect(makeStateToProps)(Shoplist);