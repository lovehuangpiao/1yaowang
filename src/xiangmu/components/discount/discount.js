import React,{Component} from 'react'
import './discount.scss'
import FilterFreebanner from '../../container/filterfreebanner/filterfreebanner'

import {connect} from 'react-redux'

 class Discount extends Component{

  render(){
    // console.log('====================================');
    // console.log(this.props.banner);
    // console.log('====================================');
    if(this.props.banner.length >0){

      return (<div className="discount">
    <div>
      <a href="http://yzm.111.com.cn/m/yw-twwz/index.html?channel=yiyaoapp">
        <img src="https://p3.maiyaole.com/img/mobile/20184/1525742547765107.jpg" />
      </a>
    </div>
    <FilterFreebanner banner={this.props.banner}  />
  </div>)
    }else{
      return <div></div>
    }
  }
  
}
const makeStateToProps = (state)=>{
  let banner = null;
  try {
    banner = state.headData.tailData.data.grabTogether.mobileFlashSaleNewItems || []
  } catch (error) {
    banner = []
  }
  return {
    banner : banner
  }
   
}
export default connect(makeStateToProps)(Discount);