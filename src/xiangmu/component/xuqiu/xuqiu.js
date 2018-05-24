import './xuqiu.scss'

import React from "react"
import {Link} from "react-router"

class XuqiuComponent extends React.Component{
    render(){
        return (
            <div className="xuqiu">
                <ul className="header">
                    <li className="header_l">
                        <Link to="/car"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></Link>
                    </li>
                    <li className="header_z">
                        
                    <Link to="/car"><span>购物车</span></Link>
                        <Link to="/"><span>需求清单</span></Link>
                    </li>
                    <li className="header_r">
                        <Link to="/"><span>...</span></Link>
                    </li>
                </ul>
                
            </div>

        )
    }
}
    
export default XuqiuComponent