import React,{Component} from 'react'
import './classlist.scss'
import { connect } from 'react-redux';
import {Transition,TransitionGroup,CSSTransition}from 'react-transition-group';

class ClassList extends Component{
 
	constructor(){
		super()
		this.state = {
			defaultStyle : {
				transition : "opacity 500ms ease-in-out"
			},
			transitionStyles:{
				entering:{opacity : 0},
				entered:{opacity : 1},
				exiting:{opacity : 1},
				exited:{opacity : 0},
			},
			isShow : false
		}
	}
	
	changessss(){
	
	}
	
  render(){
    return (<div className="list_size">
      <h5>{this.props.data.name}</h5>
      <TransitionGroup component="ul" className="list_items">
        {
          this.props.data.thridCategory.map((item,idx)=>{
            return (<CSSTransition  key={item.id} timeout={500} classNames="fade" >
							<li ref={item.id} >
								<a href="http://">
									<img src={item.icon} /><span>{item.name}</span>
								</a>
							</li>
						</CSSTransition>)})
        }
				</TransitionGroup>
    </div>)
    
  };
  
	componentWillUpdate(){
 
	}
	
}
let isShow = false;
const makeStateToProps=(state,ownprops)=>{
  let data = {thridCategory:[]};
  try {
    data = state.catetoryData.subcatetorydata || { thridCategory: [] }
  	isShow = !isShow
  } catch (error) {
    data = { thridCategory: [] }
  }
  return {
    data : data,
		isShow : isShow
  }
}
export default connect(makeStateToProps)(ClassList); 