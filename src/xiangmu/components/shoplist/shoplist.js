import React from 'react';
import './shoplist.scss'
import FreeBanner from '../banner/freebanner'
export default ()=>{

  return (<section className="good_topic">
    <h1 className="good_top  iconfont icon-zan">精选专题</h1>
    <div className="good_list">
      <a href="#"><img src="https://p3.maiyaole.com/img/mobile/20183/1524211942841101.jpg" /></a>
      <FreeBanner />
    </div>
  </section>)
}