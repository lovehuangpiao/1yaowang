import React from "react"

import BodyComponent from "../common/common.js"

class HomeComponent extends React.Component{
    render(){
        return (
            <div>
                <h1>首页</h1>
                <BodyComponent />
            </div>
        )
    }
}

export default HomeComponent