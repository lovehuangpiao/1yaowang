import React,{Component} from 'react';
import './shoplist.scss'
import FreeBanner from '../banner/freebanner'

import {connect} from 'react-redux'

export default (props)=>{

    if(props.data.length>0){
    return (<section className="good_topic">
    <h1 className="good_top  iconfont icon-zan">精选专题</h1>
    {
      props.data.map((item)=>{
        return (<div key={item.id} className="good_list">
        <a href={item.href}><img src={item.picUrl} /></a>
        <FreeBanner banner={item.goodProducts} position="good" />
        </div>);
      })
    }
    
    </section>)
    }else{
      return <div></div>
    }
}

