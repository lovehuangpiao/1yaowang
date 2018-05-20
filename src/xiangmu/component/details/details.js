
import "./details.scss";

import React from "react";

import Swiper from "swiper";
import http from "../../pei-api/utils/httpclient.js"


export default class DetailsComponent extends React.Component{

    componentDidMount(){
        let id = this.props.params.id;
        console.log(id)
        let goods;
        http.post("list",{list_id:id}).then((res) =>{
            goods = res.status.data[0];
            
            console.log(typeof(goods._id));
            this.setState({
                details:res.status.data
            })
        })
        new Swiper ('.swiper-container', {
            direction: 'vertical',
            loop: true,
              
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
              
            // 如果需要前进后退按钮
            /* navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },*/
              
            // 如果需要滚动条
            /*scrollbar: {
                el: '.swiper-scrollbar',
            },*/      
        })        

        $(".addCart").on("click",function(){
            let user = window.localStorage.getItem('username');
            console.log(user);
            let id = goods.id;
            let img = goods.img;
            let name = goods.name;
            let price = goods.price;
            let qty = goods.qty;
            let data = {
                use:user,
                id:id,
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
            console.log(data)
        })


    }

    state = {
        details:[]
    }
    render(){
        return(
            <div id="details">
                <ul className="details-top">
                    <li><i className="fa fa-chevron-left" aria-hidden="true"></i></li>
                    <li className="details-top-center">
                        <span className="active">商品</span>
                        <span>详情</span>
                        <span>评价</span>
                    </li>
                    <li><i className="fa fa-ellipsis-h" aria-hidden="true"></i></li>
                </ul>
                <main>
                    {
                        this.state.details.map(function(item){
                            return(
                                <div key={item.id}>
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide"><img src={item.img} id="Img" /></div>
                                            <div className="swiper-slide"><img src={item.img} /></div>
                                            <div className="swiper-slide"><img src="https://p4.maiyaole.com/img/item/201804/11/200_20180411182334525.jpg" /></div>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                    <ul>
                                        <li>
                                            <span className="ziying">自营</span>
                                            <span>{item.name}</span>
                                        </li>
                                        <li>
                                            <p>￥<span className="details-price">{item.price}</span></p>
                                            <p>本商品由1药网自营提供现货</p>
                                            <p>批准文号：国药准字Z44021940<span>(国家食药局查询)</span></p>
                                            <p>
                                                <span>
                                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                                    <span>满69元包邮</span>
                                                </span>
                                                <span>
                                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                                    <span>正品保证</span>
                                                </span>
                                                <span>
                                                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                                                    <span>药监认证</span>
                                                </span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </main>
                <footer>
                    <ul className="details-bottom">
                        <li><i className="fa fa-heart-o" aria-hidden="true"></i><span>客服</span></li>
                        <li><i className="fa fa-star-o" aria-hidden="true"></i><span>收藏</span></li>
                        <li><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>购物车</span><span className="goodsNum">0</span></li>
                        <li className="addCart">加入购物车</li>
                    </ul>
                </footer>
            </div>
        );
    }

}