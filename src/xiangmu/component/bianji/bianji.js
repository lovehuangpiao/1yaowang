import "./bian.scss"
import React from "react"
import {Link} from "react-router"

import GengduoComponent from '../gengduo/gengduo.js'
import SlideComponent from '../slide/slide.js'
import ajax from "../../pei-api/utils/httpclient.js"


var check = true;
class BianJiComponent extends React.Component{
    back(){
        window.history.back();
    }
    submit(e){
            if(check==true){
            document.querySelector('.gengduo').style.display = 'block';
            check=false;
            document.querySelector('.contains').style.background = '#ccc';
        }else if(check==false){
            document.querySelector('.gengduo').style.display = 'none';
            check=true;
             document.querySelector('.contains').style.background = '#fff';
        }
    }
    state = {
        list : []
    }
    componentDidMount(){
        let username = window.localStorage.getItem('username');
        let list = [];
        ajax.get("cardata/"+username).then((res)=>{
           list = res.data.data || [];
           // console.log(list);
            this.setState({
                list: res.data.data
            })
        })
    }
    render(){
        return (
            <div className="bianji">
                <ul className="header">
                    <li className="header_l">
                        <i className="fa fa-chevron-left" aria-hidden="true" onClick={this.back.bind(this)}></i>
                    </li>
                    <li className="header_z">
                        
                    <Link to="/car"><span>购物车</span></Link>
                        <Link to="/bianji"><span>需求清单</span></Link>
                    </li>
                    <li className="header_r">
                        <Link to="/car"><span>完成</span></Link>
                        <span value="submit" onClick={this.submit}>...
                            <GengduoComponent  />
                        </span>
                    </li>
                </ul>
                <div className="contains">
                    <table className="datalist">
                        <thead>
                            <tr className="mian1">
                                <th className="tou1">
                                    <input type="checkbox" className="all selected inp"/>
                                    <span className="tou1_1">1药网</span>
                                    <span className="tou1_2">满69.00包邮</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="mian2">
                                <td className="mian2_1">
                                    <ul className="nav">
                                        {
                                            this.state.list.map(function(item){
                                                return <li>
                                                    <input type="checkbox" name="check selected" className="inp"/>
                                                    <div className="nav_x">
                                                        <img src={item.img} />
                                                        <h5>{item.name}</h5>
                                                        <span className="price">{item.price}</span>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <SlideComponent />
                <div className="footer">
                    <div className="qx">
                        
                    </div>
                    <h4 className="shanchu">
                        删除
                    </h4>
                </div>
            </div>

        )
    }
}
            
            jQuery(function($){

                let $btnAll = $('.all');
                let $btnFx = $('.inp');
                let $shanchu = $('.shanchu');
                let $mian2 = $('.mian2');
                let $table = $('.datalist');
                let $trs = $table.children('tbody').children('tr');

                let $checkboxs = $table.find(':checkbox').not('#all');

                $trs.filter(':even').addClass('even');

                $btnAll.on('click',function(){

                    $checkboxs.prop('checked',this.checked);

                    $trs[this.checked ? 'addClass' : 'removeClass']('selected');
                });

                $table.on('click','tbody td',function(){

                    let $currentTr = $(this).closest('tr');

                    $currentTr.toggleClass('selected')

                    .find(':checkbox').prop('checked',$currentTr.hasClass('selected'))
                    checkall()
                });
                
                $btnFx.click(function(){
                    $checkboxs.each(function(idx,ele){
                        ele.checked = !ele.checked;
                        $(this).closest('tr')[this.checked ? 'addClass' : 'removeClass']('selected');
                    });
                    checkall();
                })
                function checkall(){
                    let $checkeds = $checkboxs.filter(':checked');
                    $btnAll.prop('checked',$checkboxs.length===$checkeds.length);
                }
                //删除
                $(document).ready(function(){
                    $shanchu.click(function(){
                            $mian2.remove('.selected');
                            // alert($('mian2').attr('.selected'));
                    });
                });

        })

export default BianJiComponent