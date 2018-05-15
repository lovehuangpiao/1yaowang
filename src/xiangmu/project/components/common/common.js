import "./common.scss"

import http from "../../../pei-api/utils/httpclient.js"

import React from "react"
import {Link} from "react-router"

export default class BodyComponent extends React.Component{
    componentDidMount(){
        http.get("shouyeSelect").then((res)=>{
            this.dataset = res.data;
            console.log(this.dataset)
        })
    }
    post(){
        console.log(this)
        fetch('http://localhost:88/class',{
            method:"POST",
            body:JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    }
    render(){
        return (
            <div className="yibody">
                <Link to="/" onClick={this.post.bind(this)}><i className="fa fa-paper-plane-o" aria-hidden="true"></i><span>首页</span></Link>
                <Link to="/zhaoyao"><i className="fa fa-drupal" aria-hidden="true"></i><span>找药</span></Link>
                <Link to="/car"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>购物车</span></Link>
                <Link to="/my"><i className="fa fa-user" aria-hidden="true"></i><span>我的</span></Link>
            </div>
        )
    }
}


