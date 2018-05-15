import React from "react"

import BodyComponent from "../common/common.js"
import {connect} from 'react-redux'
import Header from '../header/header'

class ZhaoyaoComponent extends React.Component{
    render(){
        return (
            <div>
              <Header />  
              <BodyComponent />
            </div>
        )
    }
}

export default connect()(ZhaoyaoComponent)