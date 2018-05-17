import React,{Component} from 'react'
import './classlist.scss'
import { connect } from 'react-redux';


class ClassList extends Component{
  
  render(){
    return (<div className="list_size">
      <h5>{this.props.data.name}</h5>
      <ul className="list_items">
        {
          this.props.data.thridCategory.map((item)=>{
            return (<li key={item.id}><a href="http://"><img src={item.icon} /><span>{item.name}</span></a></li>)
          })
        }
      </ul>
    </div>)
    
  };
  
}
const makeStateToProps=(state)=>{
  let data = {thridCategory:[]};
  try {
    data = state.catetoryData.subcatetorydata || { thridCategory: [] }
  } catch (error) {
    data = { thridCategory: [] }
  }
  return {
    data : data
  }
}
export default connect(makeStateToProps)(ClassList); 