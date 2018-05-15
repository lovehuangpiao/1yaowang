import React from "react"

import BodyComponent from "../common/common.js"
import Header from '../header/header'
import FilterBanner from '../../container/filterbanner/filterbanner'
import Nav from '../nav/nav'
import Notice from '../notice/notice'
import FilterShoplist from '../../container/filtershoplist/filtershoplist'

import Discount from '../discount/discount'
import Copyright from '../copyright/copyright'
import '../../../../node_modules/swiper/dist/css/swiper.css'

class HomeComponent extends React.Component{
  static defaultProps = {
      headconfig:{
        url: 'http://gateway.fangkuaiyi.com/mobile/home/getHeadData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1526204106336&signature=****&siteid=9',
        data: {}
      },
      tailconfig :{
        url: 'http://gateway.fangkuaiyi.com/mobile/home/getTailData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1526349709838&signature=****&siteid=9',
        data: {}
      }
    }
    
    render(){
      // console.log(this.props,'home')
      return (
        <div className="icon-font" style={{fontSize: 14 + 'px',background:'#e0e0e0',paddingBottom:50+"px"}}>
          <Header />
          <FilterBanner position="top" />
          <Nav />
          <Notice />
          <Discount />
          <FilterBanner position="middle" />
          <FilterShoplist />
          <Copyright />
          <BodyComponent />
        </div>
        )
    }
    componentDidMount(){
      this.props.getData(this.props.headconfig)
      this.props.getData(this.props.tailconfig)
    }
    
}

export default HomeComponent