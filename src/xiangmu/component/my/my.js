import React from "react"
import {Link} from "react-router"

import BodyComponent from "../common/common.js"

import "./my.scss"

class MyComponent extends React.Component{
    state = {
        login:"登录",
        reg:"注册",
    }
    componentDidMount(){
        $('.my').addClass('red').siblings('a').removeClass('red');
        let username = window.localStorage.getItem('username');
        console.log(username)
        this.setState({
            login:username,
            reg:""
        })
        if(!username){
            this.props.router.push({pathname: '/login'});
        }else{
            $(".btn").css({display:"block"})
        }
    }
    btn(){
        window.localStorage.removeItem('username')
    }
    render(){
        return (
            <div className="my">
                <div className="myhead">
                    <div className="dizhi">
                        <i className="fa fa-map-marker" aria-hidden="true"></i><span>广州</span>
                    </div>
                    <div className="tou">
                        <i className="fa fa-drupal" aria-hidden="true"></i>
                        <Link to="/login"><span className="sp1" ref="login">{this.state.login}</span></Link><Link to="/reg"><span className="sp2" ref="reg">{this.state.reg}</span></Link>
                    </div>
                    <div className="hui">
                        <i className="fa fa-vimeo-square" aria-hidden="true"></i><span>1+会员<br/>每月专属优惠</span>
                    </div>
                </div>
                <ul className="money">
                    <li className="li1">可用余额 ￥<i>0.00</i></li>
                    <li>优惠券 <i>0</i>张</li>
                </ul>
                <div className="dan">
                    <div className="quan">
                        <ul>
                           <li><i className="iconfont icon-daifukuan"></i><span>待支付</span></li>
                            <li><i className="iconfont icon-daishouhuo"></i><span>待收货</span></li>
                            <li><i className="iconfont icon-pingjia"></i><span>待评价</span></li>
                            <li><i className="iconfont icon-tuihuochuli"></i><span>退换货</span></li>
                        </ul>
                        <div className="ding">
                            <span>全部订单</span>
                            <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </div>
                    </div>
                    <ul className="me">    
                        <li><i className="iconfont icon-wujiaoxingkong"></i><span>我的收藏</span></li>
                        <li><i className="iconfont icon-zuji"></i><span>我的足迹</span></li>
                        <li><i className="iconfont icon-qingdan"></i><span>常用菜单</span></li>
                        <li style={{borderRight:"none"}}><i className="iconfont icon-lishijilu"></i><span>问诊记录</span></li>
                        <li><i className="iconfont icon-viphuiyuanhuangguan"></i><span>地址管理</span></li>
                        <li><i className="iconfont icon-zhanghaoguanli"></i><span>账号管理</span></li>
                        <li><i className="iconfont icon-erji"></i><span>售后服务</span></li>
                        <li style={{borderRight:"none"}}><i className="iconfont icon-shezhi"></i><span>设置</span></li>
                    </ul>
                    <Link to="/login"><div className="btn" onClick={this.btn.bind(this)}>退出当前账户</div></Link>
                </div>
                <BodyComponent />
            </div>
        )
    }
}

export default MyComponent