import "./reg.scss"
import http from "../../pei-api/utils/httpclient.js"

import React from "react"

class Reg extends React.Component{
    back(){
        window.history.back();
    }
    state = {
        random:2222
    }
    componentDidMount(){ 
        var verifyCode = new GVerify({
            id:"container",
            type:"blend"
        });
    }
    huan(){
        console.log($("#verifyCanvas")[0])
        var verifyCode = new GVerify({
            id:"container",
            type:"blend"
        });
        $("#container #verifyCanvas:last-child").prev().remove();
        verifyCode.refresh();
    }
    btn(){
        let phone = this.refs.phone.value;
        let yan = this.refs.yan.value;
        let password = this.refs.password.value;
        console.log(phone)
        if(!/^1[3-8]\d{9}$/i.test(phone)){
            alert("手机号不合法");
            return false;
        }
        // if(verifyCode.validate(yan) === false){
        //     alert("验证码不正确");
        //     return false;
        // }
        if(password == ""){
            alert("密码不能为空")
            return false;
        }
        if(!this.refs.checked.checked){
            alert("请勾选协议");
            return false;
        }
        http.post("reg",{phone,password}).then((res)=>{
            console.log(res)
            if(res.insertedCount == 1){
                this.props.router.push({pathname: '/login', query: {username: phone}})
            }else{
                alert("手机号已被注册，请换一个");
                return false
            }
        })
    }
    render(){
        return (
            <div className="reg">
                <div className="head">
                    <i className="fa fa-angle-left left" aria-hidden="true" onClick={this.back.bind(this)}></i>
                    <span className="pu">快速注册</span>
                </div>
                <div className="denglu">
                    <div>
                        <div  className="log">
                            <input type="text" placeholder="手机号" ref="phone"/>
                        </div>
                        <div  className="log">
                            <input type="text" placeholder="手机验证码" ref="yan"/>
                            <i className="tu" id="container"></i>
                            <span className="huan" onClick={this.huan.bind(this)}>换一张</span>
                        </div>
                        <div  className="log">
                            <input type="password" placeholder="密码" ref="password"/>
                        </div>
                    </div>
                    <div className="box">
                        <input type="checkbox" className="box1" ref="checked"/>
                        <span className="sp1">同意<i style={{color:"red"}}>《1药网用户协议》</i></span>
                        <span className="sp2">忘记密码？</span>
                    </div>
                    <div className="btn" onClick={this.btn.bind(this)} ref="btn">注册</div>
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

export default Reg