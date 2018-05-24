import './gengduo.scss'
import React from "react"
import {Link} from "react-router"


class GengduoComponent extends React.Component{
    render(){
        return (
            <div className="gengduo">
                <div className="sanjiaoxing"></div>
                <ul className="gengduo_1">
                    <li>
                        <Link to="/"><i className="fa fa-drupal" aria-hidden="true"></i><span>首页</span></Link>
                    </li>
                    <li>
                        <Link to="/"><i className="fa fa-drupal" aria-hidden="true"></i><span>分类</span></Link>
                    </li>
                    <li className="san">
                        <Link to="/my"><i className="fa fa-drupal" aria-hidden="true"></i><span>我的</span></Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default GengduoComponent