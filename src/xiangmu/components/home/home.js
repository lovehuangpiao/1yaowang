import React from "react"

import BodyComponent from "../common/common.js"
import Header from '../header/header'
import FilterBanner from '../../container/filterbanner/filterbanner'
import Nav from '../nav/nav'
import Notice from '../notice/notice'
import Shoplist from '../shoplist/shoplist'

import Discount from '../discount/discount'

import '../../../../node_modules/swiper/dist/css/swiper.css'

class HomeComponent extends React.Component{
  static defaultProps = {
      config:{
        url: 'http://gateway.fangkuaiyi.com/mobile/home/getHeadData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1526204106336&signature=****&siteid=9',
        data: {}
      }
    }
    
    render(){
      return (
        
              <div className="icon-font" style={{fontSize: 14 + 'px',background:'#e0e0e0',paddingBottom:50+"px"}}>
              {console.log(this.props,'666')}
                <Header />
                <FilterBanner />
                <Nav />
                <Notice />
                <Discount />
                <FilterBanner />
                <Shoplist />
                <BodyComponent />
              </div>
        )
    }
    componentDidMount(){
      this.props.getData(this.props.config)
      // console.log('====================================');
      // console.log(this.props);
      // console.log('====================================');
    }
    
}

export default HomeComponent