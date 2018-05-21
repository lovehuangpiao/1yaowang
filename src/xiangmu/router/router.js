import React from "react"
import {Router,Route,hashHistory,IndexRoute} from "react-router"

import HomeComponent from "../components/home/home.js"
import ZhaoyaoComponent from "../components/zhaoyao/zhaoyao.js"
import CarComponent from "../components/car/car.js"
import MyComponent from "../components/my/my.js"
import BianJiComponent from "../components/bianji/bianji.js"
import SlideComponent from "../components/slide/slide.js"
import XuqiuComponent from "../components/xuqiu/xuqiu.js"
import SettleComponent from "../components/settle/settle.js"
import NullComponent from "../components/null/null.js"
import GengduoComponent from "../components/gengduo/gengduo.js"

export default class RouterComponent extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HomeComponent} /> 
                <Route path="/zhaoyao" component={ZhaoyaoComponent} />
                <Route path="/car" component={CarComponent} />
                <Route path="/my" component={MyComponent} />
                <Route path="/bianji" component={BianJiComponent} />
                <Route path="/slide" component={SlideComponent} />
                <Route path="/xuqiu" component={XuqiuComponent} />
                <Route path="/settle" component={SettleComponent} />
                <Route path="/null" component={NullComponent} />
                <Route path="/gengduo" component={GengduoComponent} />
            </Router>
        )
    }
}
    