import "./login.scss"

import React from "react"
import {Link} from "react-router"

class Login extends React.Component{
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
            <div className="login">
                <div className="head">
                    <i className="fa fa-angle-left left" aria-hidden="true" onClick={this.back.bind(this)}></i>
                    <span className="pu">普通登录</span>
                    <Link to="/reg">
                        <span className="kuai">快速登录</span>
                    </Link>
                </div>
                <div className="denglu">
                    <div>
                        <div  className="log">
                            <input type="text" placeholder="手机号/邮箱/用户名"/>
                        </div>
                        <div  className="log">
                            <input type="text" placeholder="登录密码"/>
                        </div>
                        <div  className="log">
                            <input type="text" placeholder="图片验证码" />
                            <i className="tu">{this.state.random}</i>
                            <span className="huan" onClick={this.huan.bind(this)}>换一张</span>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box1"></div>
                        <span className="sp1">7天免登陆</span>
                        <span className="sp2">忘记密码？</span>
                    </div>
                    <div className="btn">登录</div>
                </div>
                <div className="new">
                    新用户可通过快速登录注册账号
                </div>
                <div className="qita">
                    <i className="i1"></i>
                    <span>用其他方式登录</span>
                    <i className="i2"></i>
                </div>
                <div className="wang">
                    <div className="item"><i className="fa fa-qq" aria-hidden="true"></i></div>
                    <div className="item item3"><i className="fa fa-weixin" aria-hidden="true"></i></div>
                    <div className="item item2"><i className="fa fa-weibo" aria-hidden="true"></i></div>
                    <div className="item"><i className="fa fa-twitter-square" aria-hidden="true"></i></div>
                    <div className="item item1"><i className="fa fa-github" aria-hidden="true"></i></div>
                </div>
            </div>
        )
    }
}

export default Login