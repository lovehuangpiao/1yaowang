
/*
 * Author: 李锦沛
 * E-Mail: 13169840505@163.com
 * NickName: les
 */
import React from "react"
import BodyComponent from "../../component/common/common.js"
import {connect} from 'react-redux'
import Header from '../header/header'
import Zixun from './zixun'
import FilterContent from '../../container/filtercontent/filtercontent'
import './zhaoyao.scss'
class ZhaoyaoComponent extends React.Component{

  

    render(){
        return (
            <div className="zhaoyao" style={{fontSize:14 + "px",height:100+"%"}}>
              <Header issearch={true} />
              <Zixun />
              <FilterContent />
              <BodyComponent />
            </div>
        )
    }

    componentDidMount(){
      try {
        this.props.getData();
      } catch (error) {
        console.log('====================================');
        console.log('zhaoyao');
        console.log('====================================');        
      }
    }
}

export default connect()(ZhaoyaoComponent)