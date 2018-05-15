import React,{Component} from 'react';
import './nav.scss'
import {connect} from 'react-redux'
class Nav extends Component{


  render(){
    let data = this.props.data || [];
    return (
      <div>
      <ul className="nav">
        {
          data.map((item)=>{
            return (<li key={item.id}>
              <a href={item.cmsUrl}> <img src={item.adPic}/> <span>{item.adTitle}</span></a>
            </li>)
          })
        }
        {/* <li><img src="https://p1.maiyaole.com/img/mobile/20177/1503569986080169.png" /><span>哈哈啊</span></li>
        <li><img src="https://p1.maiyaole.com/img/mobile/20177/1503569986080169.png" /><span>哈哈啊</span></li>
        <li><img src="https://p1.maiyaole.com/img/mobile/20177/1503569986080169.png" /><span>哈哈啊</span></li>
        <li><img src="https://p1.maiyaole.com/img/mobile/20177/1503569986080169.png" /><span>哈哈啊</span></li>
        <li><img src="https://p1.maiyaole.com/img/mobile/20177/1503569986080169.png" /><span>哈哈啊</span></li>
        <li><img src="https://p1.maiyaole.com/img/mobile/20177/1503569986080169.png" /><span>哈哈啊</span></li>
        <li><img src="https://p1.maiyaole.com/img/mobile/20177/1503569986080169.png" /><span>哈哈啊</span></li>
        <li><img src="https://p1.maiyaole.com/img/mobile/20177/1503569986080169.png" /><span>哈哈啊</span></li>
        <li><img src="https://p1.maiyaole.com/img/mobile/20177/1503569986080169.png" /><span>哈哈啊</span></li>
        <li><img src="https://p1.maiyaole.com/img/mobile/20177/1503569986080169.png" /><span>哈哈啊</span></li> */}
      </ul>
      {/* <a href="https://m.111.com.cn/maps/index.html?pageId=22&type=release"><img src="https://p1.maiyaole.com/img/mobile/20177/1502355470621151.jpg" /></a> */}
      </div>)
  }
}

const makeStateToProps = (state)=>{
  let data = null;
  try {
    data = state.headData.headData.data.templatedata[0].contentList || []
  } catch (error) {
    data = []
  }
  return {
    data : data
  }
   
}

export default connect(makeStateToProps)(Nav);