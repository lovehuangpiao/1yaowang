import "./list.scss";

import React from "react";
import {Link} from "react-router";
import http from "../../pei-api/utils/httpclient.js"

export default class ListComponent extends React.Component{

    back(){
        window.history.back();
    }
    state = {
        goods : []
    }
    componentDidMount(){
        let username = window.localStorage.getItem('username');
        console.log(username)
        let Arr;
        let qty = 0;
        http.post("list").then((res) =>{
            console.log(typeof(res.status.data[0]._id));
            this.setState({
                goods: res.status.data
            })
        })
        http.get("cardata/"+username).then((res) =>{
            console.log(res.data.data)
            Arr = res.data.data;
            console.log(Arr)
            Arr.map(function(item){
                qty += item.qty
                console.log(qty)
                return qty;
            })
            $(".goodsNum").text(qty);

        })
        $(".main").on("click",".cart",function(){

            // for(let i=0; i<li.length; i++){
            console.log(this.closest('li'))
            // }
            let li = $(this).closest('li');
            console.log(li)
            var cart = $('.goodsNum');
            var imgtodrag = li.find('#Img');
            console.log(imgtodrag)
            if (imgtodrag) {
                var imgclone = imgtodrag.clone().offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                })
                    .css({
                    'opacity': '0.5',
                        'position': 'absolute',
                        'height': '80px',
                        'width': '100px',
                        'z-index': '100'
                })
                    .appendTo($('body'))
                    .animate({
                        'top': cart.offset().top,
                        'left': cart.offset().left,
                        'width': 25,
                        'height': 25
                }, 1000, 'easeInOutExpo');
                
                imgclone.animate({
                    'width': 0,
                    'height': 0
                }, function () {
                    $(this).detach();
                    let num = $(".goodsNum").text()*1 + 1;
                    $(".goodsNum").text(num);
                });
            }

            let id = li.attr("id");
            console.log(id)
            console.log(li.find('#name').text());
            let img = li.find('#Img').attr("src");
            let name = li.find('#name').text();
            let price = li.find('#price').text();
            let qty = 1;
            let data = {
                username:username,
                id:Number(id),
                img:img,
                name:name,
                price:price,
                qty:qty
            }
            fetch('http://10.3.133.33:88/insertcardata',{
                method:"POST",
                body:JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
        })
    }
    render(){
        return (
            <div id="list">
                <ul className="header">
                    <li className="head_top">
                        <ul>
                            <li><i className="fa fa-chevron-left" aria-hidden="true" onClick={this.back.bind(this)}></i></li>
                            <li>
                                <i className="fa fa-search sousuo" aria-hidden="true"></i>
                                <input type="text" placeholder="壹药网"/>
                            </li>
                            <li className="list-car"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span className="goodsNum">0</span></li>
                        </ul>
                    </li>
                    <li className="head_center">
                        <ul>
                            <li>
                                <span>感冒</span>
                                <i className="fa fa-caret-down" aria-hidden="true"></i>
                            </li>
                            <li>
                                <span>综合排序</span>
                                <i className="fa fa-caret-down" aria-hidden="true"></i>
                            </li>
                            <li>
                                <i className="fa fa-list" aria-hidden="true"></i>
                                列表
                            </li>
                            <li>
                                <i className="fa fa-filter" aria-hidden="true"></i>
                                筛选
                            </li>
                        </ul>
                    </li>
                    <li className="head_bottom">
                        <ul>
                            <li>
                                <span>自营</span>
                            </li>
                            <li>
                                <span>促销<i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                 
                            </li>
                            <li>
                                <span>品牌<i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                
                            </li>
                            <li>
                                <span>价格<i className="fa fa-caret-down" aria-hidden="true"></i></span>

                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="main">
                    {
                        this.state.goods.map(function(item){
                            return <li key={item.id} id={item.id}>
                                <Link to={`/details/${item.id}`}><img src={item.img}  id="Img" /></Link>
                                <div className="main-right-top">
                                    <p className="goods-name">
                                        <span className="ziying">自营</span>
                                        <span id="name">{item.name}</span>
                                    </p>
                                    <p className="cheng">中成药</p><br/>
                                    <p className="taocan">套餐</p>
                                </div>
                                <div className="main-right-bottom">
                                <span>￥<span id="price">{item.price}</span></span>
                                    <p>14161条评论 好评率99.30%<i className="fa fa-shopping-cart cart" aria-hidden="true"></i></p>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
