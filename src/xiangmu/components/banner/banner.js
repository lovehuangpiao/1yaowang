import React,{Component} from 'react'
import Swiper from 'swiper'
import './banner.scss'

export default class Banner extends Component{


  render(){
    return (
    <div className="banner" >
    
      <div className="swiper-wrapper">
        <div className="swiper-slide"><img src="https://p1.maiyaole.com/img/mobile/20184/1526177310873228.jpg"
 /></div>
        <div className="swiper-slide"><img src="https://p1.maiyaole.com/img/mobile/20184/1526177310873228.jpg"
 /></div>
        <div className="swiper-slide"><img src="https://p1.maiyaole.com/img/mobile/20184/1526177310873228.jpg"
 /></div>
        <div className="swiper-slide"><img src="https://p1.maiyaole.com/img/mobile/20184/1526177310873228.jpg"
 /></div>
        <div className="swiper-slide"><img src="https://p1.maiyaole.com/img/mobile/20184/1526177310873228.jpg"
 /></div>
      </div>
      <div className="swiper-pagination"></div>
    </div>)
  }

  componentDidMount(){

    try{
      // this.props.getData(this.props.config);
      // console.log('====================================');
      // console.log(actions.action_head_requesting(this.props.config),'banner');
      // console.log('====================================');
    }catch(err){
      console.log(err,'出错');
    }

    var mySwiper = new Swiper('.banner', {
      spaceBetween: 30,
      centeredSlides: true,
      slidesPerView: 1,
      loop:true,
      // direction:'horizontal',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay:3000,
        disableOnInteraction: false,
      }
    })
  }
}