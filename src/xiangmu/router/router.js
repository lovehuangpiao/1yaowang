import React from "react"
import {Router,Route,hashHistory,IndexRoute} from "react-router"

import HomeComponent from "../container/getdatahome/getdatahome"
import ZhaoyaoComponent from "../container/filterzhaoyao/filterzhaoyao"
import CarComponent from "../component/car/car.js"
import MyComponent from "../component/my/my.js"
import LoginComponent from "../component/login/login.js"
import RegComponent from "../component/reg/reg.js"
import ListComponent from "../component/list/list.js"
import DetailsComponent from "../component/details/details.js"
import BianJiComponent from "../component/bianji/bianji.js"
import SlideComponent from "../component/slide/slide.js"
import XuqiuComponent from "../component/xuqiu/xuqiu.js"
import SettleComponent from "../component/settle/settle.js"
import NullComponent from "../component/null/null.js"
import GengduoComponent from "../component/gengduo/gengduo.js"

import store from '../store'
import {Provider} from 'react-redux'

export default class RouterComponent extends React.Component{
    render(){
        return (
            <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={HomeComponent} /> 
                <Route path="/zhaoyao" component={ZhaoyaoComponent} >
                  <Route path="list/:data"></Route>
                </Route>
                <Route path="/car" component={CarComponent} />
                <Route path="/my" component={MyComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/reg" component={RegComponent} />
                <Route path="/list" component={ListComponent} />
                <Route path="/details" component={DetailsComponent} />
                <Route path="/details(/:id)" component={DetailsComponent} />
                <Route path="/bianji" component={BianJiComponent} />
                <Route path="/slide" component={SlideComponent} />
                <Route path="/xuqiu" component={XuqiuComponent} />
                <Route path="/settle" component={SettleComponent} />
                <Route path="/null" component={NullComponent} />
                <Route path="/gengduo" component={GengduoComponent} />
            </Router>
            </Provider>
        )
    }
    componentDidMount(){
      // hashHistory.push({
      //   pathname:'/',
      //   state:{
      //     url: 'http://gateway.fangkuaiyi.com/mobile/home/getHeadData?tradername=yw_app&trader=h5&closesignature=yes&signature_method=md5&timestamp=1526204106336&signature=****&siteid=9',
      //     data: {}
      //   }
      // });
    }
}
    