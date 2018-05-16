import "./common.scss"

import React from "react"
import {Link} from "react-router"

export default class BodyComponent extends React.Component{

    
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


