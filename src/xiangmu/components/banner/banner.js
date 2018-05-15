import React,{Component} from 'react'
import Swiper from 'swiper'
import './banner.scss'

export default class Banner extends Component{

  state = {
    swiper : null
  }

  render(){
      if(this.props.position === 'top'){
        return (
          <div className="banner" >
            <div className="swiper-wrapper">
              {
                this.props.banner.map(item=>{
                  return (<div className="swiper-slide" key={item.id}>
                  <img src={item.pic} />
                  </div>)
                })
              }
            </div>
            <div className="swiper-pagination"></div>
          </div>)
      }
      if(this.props.position=== 'middle'){
        return (<div className="banner">
          <div className="swiper-wrapper">
            {
              this.props.tailbanner.map(item=>{
                return (<div className="swiper-slide" key={item.id}>
                <a href={item.href}><img src={item.picurl} /></a>
                </div>)
              })
            }
          </div>
        </div>)
      }
    }
  
    mSwiper = null;
  componentDidMount(){
   
    if(this.props.position ==='top'){
      this.mSwiper = new Swiper('.banner', {
        centeredSlides: true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
          delay:3000,
          disableOnInteraction: false,
        }
      })
    }else{
      this.mSwiper = new Swiper('.banner', {
        centeredSlides: true,
      loop:true,
      autoplay: {
          delay:3000,
          disableOnInteraction: false,
        }
      })
    }
  }
  componentWillUpdate(){
    // this.state.swiper.stop();
  }
  componentDidUpdate(){
    if(this.props.position ==='top'){
      this.mSwiper = new Swiper('.banner', {
        centeredSlides: true,
      loop:true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
          delay:3000,
          disableOnInteraction: false,
        }
      })
    }else{
      this.mSwiper = new Swiper('.banner', {
        centeredSlides: true,
      loop:true,
      autoplay: {
          delay:3000,
          disableOnInteraction: false,
        }
      })
    }
  }
}