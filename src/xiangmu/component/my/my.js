import React from "react"

import BodyComponent from "../common/common.js"

class MyComponent extends React.Component{
    componentDidMount(){
        $('.my').addClass('red').siblings('a').removeClass('red');
    }
    render(){
        return (
            <div>
                <h1>我的</h1>
                <BodyComponent />
            </div>
        )
    }
}

export default MyComponent