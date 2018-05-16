import React from "react"

import BodyComponent from "../common/common.js"
import {connect} from 'react-redux'
import Header from '../header/header'
import Zixun from './zixun'
import Content from '../content/content'
import './zhaoyao.scss'
class ZhaoyaoComponent extends React.Component{
    render(){
        return (
            <div className="zhaoyao" style={{fontSize:14 + "px",height:100+"%"}}>
              <Header issearch={true} />
              <Zixun />
              <Content />
              <BodyComponent />
            </div>
        )
    }
}

export default connect()(ZhaoyaoComponent)