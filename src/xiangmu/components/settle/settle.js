import "./settle.scss"
import React from "react"
import ReactDOM from 'react-dom'
import {Link} from "react-router"

var check = true;

class OrderComponent extends React.Component{
    focus(){
        if(check==true){
            console.log(555)
            document.querySelector('.tishi').style.display = 'block';
            check=false;
        }else{
            document.querySelector('.tishi').style.display = 'none';
            check=true;
        }
    }
    sub(item){
        if(check==true){
            document.querySelector('.ding_n').style.display = 'block';
            check=false;
        }else{
            document.querySelector('.ding_n').style.display = 'none';
            check=true;
        }
    }
    submit(e){
            if(check==true){
            document.querySelector('.p1').style.display = 'none';
            document.querySelector('.p2').style.display = 'block';
            check=false;
        }else if(check==false){
            document.querySelector('.p1').style.display = 'block';
            document.querySelector('.p2').style.display = 'none';
            check=true;
        }
    }

    render(){
        return (
            <div className="settle">
                <ul className="header">
                    <li className="header_l">
                        <i className="fa fa-paper-plane-o" aria-hidden="true" onClick={this.focus}></i>

                        <span>确认订单</span>
                        <p></p>
                    </li>
                    
                </ul>
                <div className="tishi">
                    <h2>你确定要放弃吗？</h2>
                    <h3>
                        <Link to="/car"><span className="sp1">是</span></Link>
                        <span className="sp2"  onClick={this.focus}>否</span>
                    </h3>
                </div>
                <div className="contains">
                    <ul>
                        <Link to="/null"><li className="dz">
                            <Link to="/null"><i className="fa fa-paper-plane-o fa1" aria-hidden="true"></i></Link>
                            <Link to="/null"><span>添加你的收获地址</span></Link>
                            <Link to="/null"><i className="fa fa-paper-plane-o fa2" aria-hidden="true"></i></Link>
                        </li></Link>
                        <li className="ding_1">
                            <span className="ding_1_1">1药网</span>
                            <span value="sub" onClick={this.sub}>
                                <i className="fa fa-paper-plane-o fa3" aria-hidden="true"> 
                                </i>
                        </span>
                        </li>
                        <li className="ding_n">
                            <h1>
                                <img src=""/>
                            </h1>
                            <p>空间看见我的烦恼电风扇第三方</p>
                            <h2><span>￥33</span><p>x1</p></h2>
                        </li>
                        <li className="ding_zf">
                            <span className="ding_1_1">支付方式</span>
                            <Link to="/"><i className="fa fa-paper-plane-o fa3" aria-hidden="true"></i></Link>
                        </li>
                        <li className="ding_yh">
                            <span className="ding_1_1">优惠卷</span>
                            <Link to="/"><i className="fa fa-paper-plane-o fa3" aria-hidden="true"></i></Link>
                        </li>
                        <li className="ding_zh">
                            <span className="ding_1_1">账户余额</span>
                            <Link to="/"><i className="fa fa-paper-plane-o fa3" aria-hidden="true"></i></Link>
                        </li>
                        <li className="ding_xz">
                            <span className="ding_1_1">选择私密包装</span>
                            <div className="fa3" value="submit" onClick={this.submit}>
                                <p className="p1"></p>
                                <p className="p2"></p>
                            </div>
                        </li>
                        <li className="ding_fp">
                            <span className="ding_1_1">发票信息</span>
                            <Link to="/"><i className="fa fa-paper-plane-o fa3" aria-hidden="true"></i></Link>
                        </li>
                        <li className="ding_sp">
                            <span className="ding_1_1">商品金额</span>
                            <Link to="/"><i className="fa fa-paper-plane-o fa3" aria-hidden="true"></i></Link>
                        </li>
                        <li className="ding_zy">
                            <span className="ding_1_1">总运费</span>
                            <Link to="/"><i className="fa fa-paper-plane-o fa3" aria-hidden="true"></i></Link>
                        </li>
                    </ul>
                </div>
                <div className="footer">
                    <div className="qx">
                        <h2>应付金额：0.00</h2>
                    </div>
                    <h4 className="shanchu">
                        提交订单
                    </h4>
                </div>
            </div>
        )
    }
}
jQuery(function(){

})
export default OrderComponent