import React from 'react'
import './content.scss'
import FilterBanner from '../../container/filterbanner/filterbanner'
import Classlist from '../../components/classlist/classlist'
export default ()=>{


  return (<section className="content">
    <div className="left">
      <ul className="classlist">
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
        <li><a href="https://baidu.com">热门类目</a></li>
      </ul>
    </div>
    <div className="right">
      <div className="banner_size">
        <FilterBanner />
      </div>
      <div className="class_list">
        <Classlist />
      </div>
    </div>
  </section>)
}