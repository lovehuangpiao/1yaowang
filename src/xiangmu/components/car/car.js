import React from "react"

import BodyComponent from "../common/common.js"

class CarComponent extends React.Component{
    componentDidMount(){
        $('.car').addClass('red').siblings('a').removeClass('red');
    }
    render(){
        return (
            <div>
                <h1>购物车</h1>
                <BodyComponent />
            </div>

        )
    }
}

export default CarComponent