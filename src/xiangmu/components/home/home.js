import React from "react"

import BodyComponent from "../common/common.js"
import Header from '../header/header'
import Banner from '../banner/banner'
import Nav from '../nav/nav'
import Notice from '../notice/notice'
import Shoplist from '../shoplist/shoplist'

import Discount from '../discount/discount'

import '../../../../node_modules/swiper/dist/css/swiper.css'

class HomeComponent extends React.Component{
    render(){
        return (
            <div className="icon-font" style={{fontSize: 14 + 'px',background:'#e0e0e0',paddingBottom:50+"px"}}>
                <Header />
                <Banner />
                <Nav />
                <Notice />
                <Discount />
                <Banner />
                <Shoplist />
                <BodyComponent />
            </div>
        )
    }
}

export default HomeComponent