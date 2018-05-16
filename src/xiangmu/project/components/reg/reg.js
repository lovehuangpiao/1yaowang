import "./reg.scss"

import React from "react"

class Reg extends React.Component{
    back(){
        window.history.back();
    }
    state = {
        random:2222
    }
    componentDidMount(){
        var num = "";  
        for(var i=0;i<4;i++){  
            num += Math.floor(Math.random()*10)  
        }  
        console.log(num);
        this.setState({
            random:num
        }) 
    }
    huan(){
         var num = "";  
        for(var i=0;i<4;i++){  
            num += Math.floor(Math.random()*10)  
        }  
        console.log(num);
        this.setState({
            random:num
        }) 
    }
    render(){
        return (
            <div className="reg">
                <div className="head">
                    <i className="fa fa-angle-left left" aria-hidden="true" onClick={this.back.bind(this)}></i>
                    <span className="pu">快速登录</span>
                </div>
                <div className="denglu">
                    <div>
                        <div  className="log">
                            <input type="text" placeholder="手机号"/>
                        </div>
                        <div  className="log">
                            <input type="text" placeholder="图片验证码" />
                            <i className="tu">{this.state.random}</i>
                            <span className="huan" onClick={this.huan.bind(this)}>换一张</span>
                        </div>
                        <div  className="log">
                            <input type="text" placeholder="手机验证码"/>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box1"></div>
                        <span className="sp1">同意《1药网用户协议》</span>
                        <span className="sp2">忘记密码？</span>
                    </div>
                    <div className="btn">登录</div>
                </div>
            </div>
        )
    }
}

export default Reg