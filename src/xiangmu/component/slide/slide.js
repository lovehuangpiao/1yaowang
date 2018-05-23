import './slide.scss'
import '../../css/swiper.min.css'
import Swiper  from '../swiper.min.js';
import React from "react"

class CarComponent extends React.Component{
    render(){
        return (
            <div className="changyong">
                <ul className="chang">
                    <li className="chang1">常用药物</li>
                    <li className="chang2">更多 > </li>
                </ul>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                            <ul>
                                <li>
                                    <img src={require('../../img/car2.png')} alt="" />
                                    <img src={require('../../img/car3.png')} alt="" />
                                    <img src={require('../../img/car2.png')} alt="" />
                                </li>
                            </ul>
                      </div>
                      <div className="swiper-slide">
                            <ul>
                                <li>
                                  <img src={require('../../img/car2.png')} alt="" />
                                  <img src={require('../../img/car3.png')} alt="" />
                                  <img src={require('../../img/car2.png')} alt="" />
                                </li>
                            </ul>
                      </div>
                      <div className="swiper-slide">
                            <ul>
                                <li>
                                    <img src={require('../../img/car2.png')} alt="" />
                                    <img src={require('../../img/car3.png')} alt="" />
                                    <img src={require('../../img/car2.png')} alt="" />
                                </li>
                            </ul>
                      </div>
                      <div className="swiper-slide">
                            <ul>
                                <li>
                                    <img src={require('../../img/car2.png')} alt="" />
                                    <img src={require('../../img/car3.png')} alt="" />
                                    <img src={require('../../img/car2.png')} alt="" />
                                </li>
                            </ul>
                      </div>
                      <div className="swiper-slide">
                            <ul>
                                <li>
                                    <img src={require('../../img/car2.png')} alt="" />
                                    <img src={require('../../img/car3.png')} alt="" />
                                    <img src={require('../../img/car2.png')} alt="" />
                                </li>
                            </ul>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var swiper = new Swiper('.swiper-container',);
    }
}

export default CarComponent