import React from "react"

import BodyComponent from "../common/common.js"

class MyComponent extends React.Component{
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