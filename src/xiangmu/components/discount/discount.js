import React,{Component} from 'react'
import './discount.scss'
import Freebanner from '../banner/freebanner'

export default class Discount extends Component{

  render(){
    return (<div className="discount">
    <div>
      <a href="http://yzm.111.com.cn/m/yw-twwz/index.html?channel=yiyaoapp">
        <img src="https://p3.maiyaole.com/img/mobile/20184/1525742547765107.jpg" />
      </a>
    </div>
    <Freebanner />
  </div>)
  }
  
}