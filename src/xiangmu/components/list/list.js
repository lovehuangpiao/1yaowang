import "./list.scss";

import React from "react";


export default class ListComponent extends React.Component{
    // componentWillMount(){
        
    // }
    state = {
        data:[
            {
                id:123,
                name:"三九/999 感冒灵颗粒 10g*9袋",
                price:100,
                img:"https://p4.maiyaole.com/img/item/201804/25/200_20180425163449933.jpg"
            },{
                id:125,
                name:"三九/999 感冒灵颗粒 10g*9袋",
                price:100,
                img:"https://p4.maiyaole.com/img/item/201804/25/200_20180425163449933.jpg"
            },

        ]
    }
    render(){
        return (
            <div id="list">
                <ul className="header">
                    <li className="head_top">
                        <ul>
                            <li><i className="fa fa-chevron-left" aria-hidden="true"></i></li>
                            <li>
                                <i className="fa fa-search sousuo" aria-hidden="true"></i>
                                <input type="text" placeholder="壹药网"/>
                            </li>
                            <li className="list-car"><i className="fa fa-shopping-cart" aria-hidden="true"></i><span>0</span></li>
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
                        this.state.data.map(function(item){
                            console.log(item);
                            return <li key={item.id}>
                                <img src={item.img}  className="list-img" />
                                <div className="main-right-top">
                                    <p className="goods-name">
                                        <span className="ziying">自营</span>
                                        <span>{item.name}</span>
                                    </p>
                                    <p className="cheng">中成药</p><br/>
                                    <p className="taocan">套餐</p>
                                </div>
                                <div className="main-right-bottom">
                                    <span>￥{item.price}</span>
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
