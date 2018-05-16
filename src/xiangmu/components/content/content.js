/*
 * Author: 李锦沛
 * E-Mail: 13169840505@163.com
 * NickName: les
 */
import React,{Component} from 'react'
import './content.scss'
import FilterBanner from '../../container/filterbanner/filterbanner'
import Classlist from '../../components/classlist/classlist'
export default class Content extends Component{


  render(){
    return (<section className="content">
      <div className="left">
        <ul className="classlist">
          {
            this.props.data.map((item)=>{
              return (<li onClick={(e) => {
                e.preventDefault();
                this.props.getsubdata(item.id)
              }} key={item.id} ><a href="javascript ;">
              {item.name}</a>
              </li>)
            })
          }
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

  componentDidMount(){
    this.props.imigetonedata();
  }
}