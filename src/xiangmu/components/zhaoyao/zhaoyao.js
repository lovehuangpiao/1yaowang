import React from "react"

import BodyComponent from "../common/common.js"

class ZhaoyaoComponent extends React.Component{
    componentDidMount(){
        $('.zhaoyao').addClass('red').siblings('a').removeClass('red');
    }
    render(){
        return (
            <div>
                <h1>找药</h1>
                <BodyComponent />
            </div>
        )
    }
}

export default ZhaoyaoComponent