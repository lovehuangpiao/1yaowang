import React from "react"
import {Router,Route,hashHistory,IndexRoute} from "react-router"

import HomeComponent from "../container/getdatahome/getdatahome"
import ZhaoyaoComponent from "../container/filterzhaoyao/filterzhaoyao"
import CarComponent from "../component/car/car.js"
import MyComponent from "../component/my/my.js"
import LoginComponent from "../component/login/login.js"
import RegComponent from "../component/reg/reg.js"

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
    