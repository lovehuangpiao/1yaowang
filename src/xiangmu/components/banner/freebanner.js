import React,{Component} from 'react'
import Swiper from 'swiper'
import './banner.scss'

export default class Freebanner extends Component{


  render(){
    if(this.props.position ==='good'){
      return  (<div className="discountBanner">
        <ul className="swiper-wrapper">
        {
          this.props.banner.map((item)=>{
            
            return (<li key={item.itemid} className="discount_list swiper-slide">
              <div className="imgside">
                <img src = {item.productImg}/>
              </div>
              <p className="name">{item.productName}</p>
              <p className="price">￥{item.sellPrice}</p>
            </li>)
          })
        }
        </ul>
        </div>)
    }
    if(this.props.banner){
      return  (<div className="discountBanner">
        <ul className="swiper-wrapper">
        {
          this.props.banner.map((item)=>{
            
            return (<li key={item.id} className="discount_list swiper-slide">
              <div className="imgside">
                <img src = {item.mainimg3}/>
              </div>
              <p className="name">{item.flashSaleProductName}</p>
              <p className="price">￥{item.promotionPrice}</p>
            </li>)
          })
        }
        </ul>
        </div>)
    }else{
      return (<div className="discountBanner">
      <ul className="swiper-wrapper">
        <li className="discount_list swiper-slide">
          <div className="imgside">
            <img src = "https://p1.maiyaole.com/img/item/201804/25/160_20180425163353490.jpg"/>
          </div>
          <p className="name">江东高炮健胃消食破案</p>
          <p className="price">￥45</p>
        </li>
        <li className="swiper-slide">
          <div>
            <img src = "https://p1.maiyaole.com/img/item/201804/25/160_20180425163353490.jpg"/>
          </div>
          <p className="name">江东高炮健胃消食破案</p>
          <p className="price">￥45</p>
        </li>
        <li className="swiper-slide">
          <div>
            <img src = "https://p1.maiyaole.com/img/item/201804/25/160_20180425163353490.jpg"/>
          </div>
          <p className="name">江东高炮健胃消食破案</p>
          <p className="price">￥45</p>
        </li>
        <li className="swiper-slide">
          <div>
            <img src = "https://p1.maiyaole.com/img/item/201804/25/160_20180425163353490.jpg"/>
          </div>
          <p className="name">江东高炮健胃消食破案</p>
          <p className="price">￥45</p>
        </li>
        <li className="swiper-slide">
          <div>
            <img src = "https://p1.maiyaole.com/img/item/201804/25/160_20180425163353490.jpg"/>
          </div>
          <p className="name">江东高炮健胃消食破案</p>
          <p className="price">￥45</p>
        </li>
        <li className="swiper-slide">
          <div>
            <img src = "https://p1.maiyaole.com/img/item/201804/25/160_20180425163353490.jpg"/>
          </div>
          <p className="name">江东高炮健胃消食破案</p>
          <p className="price">￥45</p>
        </li>
      </ul>
    </div>)
    }
    
  }
  componentDidMount(){
    var swiper = new Swiper('.discountBanner', {
      slidesPerView: 3.3,
      spaceBetween: 8,
      freeMode: true,
    });
  }
}