import React from "react"
import {Router,Route,hashHistory,IndexRoute} from "react-router"

import HomeComponent from "../components/home/home.js"
import ZhaoyaoComponent from "../components/zhaoyao/zhaoyao.js"
import CarComponent from "../components/car/car.js"
import MyComponent from "../components/my/my.js"
import LoginComponent from "../components/login/login.js"
import RegComponent from "../components/reg/reg.js"

export default class RouterComponent extends React.Component{
    render(){
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HomeComponent} /> 
                <Route path="/zhaoyao" component={ZhaoyaoComponent} />
                <Route path="/car" component={CarComponent} />
                <Route path="/my" component={MyComponent} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/reg" component={RegComponent} />
            </Router>
        )
    }
}
    