
import "./details.scss";

import React from "react";

import Swiper from "swiper";

export default class DetailsComponent extends React.Component{

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
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img src="https://p4.maiyaole.com/img/item/201804/25/200_20180425163449933.jpg" /></div>
                            <div className="swiper-slide">Slide 2</div>
                            <div className="swiper-slide">Slide 3</div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <ul>
                        <li>
                            <span className="ziying">自营</span>
                            <span>三九/999 感冒灵颗粒 10g*9袋</span>
                        </li>
                        <li>
                            <p>￥<span className="details-price">10.2</span></p>
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
    componentDidMount(){
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
    }
}