import './car.scss'

import React from "react"
import {Link} from "react-router"
import ajax from "../../pei-api/utils/httpclient.js"

import GengduoComponent from '../gengduo/gengduo.js'
import SlideComponent from '../slide/slide.js'

var check = true;
class CarComponent extends React.Component{
    submit(e){
            if(check==true){
            document.querySelector('.gengduo').style.display = 'block';
            check=false;
        }else if(check==false){
            document.querySelector('.gengduo').style.display = 'none';
            check=true;
             // document.querySelector('.contains').style.background = '#fff';
        }
    }
    render(){
        // console.log(list)
        return (
            <div className="car">
                <ul className="header">
                    <li className="header_l">
                        <Link to="/"><i className="fa fa-chevron-left" aria-hidden="true"></i></Link>
                    </li>
                    <li className="header_z">
                        
                    <Link to="/car"><span>购物车</span></Link>
                        <Link to="/xuqiu"><span>需求清单</span></Link>
                    </li>                      
                    <li className="header_r">
                        <Link to="/bianji"><span>编辑</span></Link>
                        <span value="submit" onClick={this.submit}>...
                            <GengduoComponent  />
                        </span>
                    </li>
                </ul>
                <div className="contains">
                    <table className="datalist">
                        <thead>
                            <tr className="mian1">
                                <th className="tou1 all">
                                    <input type="checkbox" className="all selected"/>
                                    <span className="tou1_1">1药网</span>
                                    <span className="tou1_2">满69.00包邮</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="tab">
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
                                                    <h4 className="js">
                                                        <p className="jian">-</p>
                                                        <span className="qty">{item.qty}</span>
                                                        <p className="jia">+</p>
                                                    </h4>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <SlideComponent className="cyy"/>
                </div>
                <div className="footer">
                    <div className="qx">
                        <input type="checkbox" name="check selected" className="inp"/>
                        <h2>反选</h2>
                    </div>
                    <h3>
                        <p>合计：<span className="total">0.00</span></p>
                        <p className="yh">不含运费,已优惠￥0.00</p>
                    </h3>
                    <Link to="/settle"><h4>去结算(<span className="shuliang"></span>)</h4></Link>
                </div>
            </div>

        )
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
        jQuery(function($){


            //全选、反洗
            let $btnAll = $('.all');
            let $btnFx = $('.inp');
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

            //加、减、总价
            // console.log(res.data.data)
                let zong = 0;
                let $qty = $('.qty');
                let $price = $('.price')
            $(function(){ 
                $(".jia").click(function(){ 
                    // console.log($(this).closest('li').find('.qty').text())
                    var t=$(this).parent().find('.qty'); 
                    t.text(parseInt(t.text())+1); 
                    setTotal(); 
                    // console.log($('.qty').text());
                    let _qty = $(this).closest('li').find('.qty').text()*1;
                    let _qty1 = $(this).closest('li').siblings('li').find('.qty').text()*1;
                    let a = _qty + _qty1;
                    // console.log(_qty)
                    $(".shuliang").html(a); 
                }) 
                $(".jian").click(function(){
                    var t=$(this).parent().find('.qty'); 
                    t.text(parseInt(t.text())-1) 
                    if(parseInt(t.text())<0){ 
                        t.text(0); 
                    } 
                    setTotal(); 
                    let _qty = $('.qty').text()*1;
                     $(".shuliang").html(_qty); 
                    // console.log(_qty1)
                }) 
                
            function setTotal(){ 
                var s=0; 
                $(".tab td").each(function(){ 
                    s+=parseInt($(this).find('.qty').text())*parseFloat($(this).find('.price').text()); 
                    console.log(parseFloat($(this).find('.price').text()))
                }); 
                $(".total").html(s.toFixed(1)); 
                } 
                setTotal(); 

            }) 
        })
    }
}
            
export default CarComponent