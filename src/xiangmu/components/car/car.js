import './car.scss'

import React from "react"
import {Link} from "react-router"
import ajax from "../utils/httpclient.js"

import GengduoComponent from '../gengduo/gengduo.js'
import SlideComponent from '../slide/slide.js'

var check = true;
class CarComponent extends React.Component{
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

    componentDidMount(){
        ajax.get('/cardata').then((res)=>{})
    }
    render(){
        return (
            <div className="car">
                <ul className="header">
                    <li className="header_l">
                        <Link to="/"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></Link>
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
                                    <input type="checkbox" name="check selected" className="inp"/>
                                    <div className="goods-list">
                                        
                                    </div>
                                    <h4 className="js">
                                        <p className="jian">-</p>
                                        <span className="qty">1</span>
                                        <p className="jia">+</p>
                                    </h4>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <SlideComponent className="cyy"/>
                </div>
                <div className="footer">
                    <div className="qx">
                        <input type="checkbox" name="check selected" className="inp"/>
                        <h2>全选</h2>
                    </div>
                    <h3>
                        <p>合计：<span className="total">0.00</span></p>
                        <p className="yh">不含运费,已优惠￥0.00</p>
                    </h3>
                    <Link to="/settle"><h4>去结算(<span className="shuliang">1</span>)</h4></Link>
                </div>
            </div>

        )
    }
    componentDidMount(){
        jQuery(function($){

            let list = [{
                "imgurl":"../../img/car1.png",
                "title":"Bottega  V0041 6811",
                "price":5186,
                "guid":"g001"
            }]


            let goodsList = document.getElementsByClassName('goods-list')[0];
            let ul = document.createElement('ul');
            let zong = 0;
            list.forEach(function(item){
                let li = document.createElement('li');
                li.setAttribute('data-guid',item.guid);

                let link = document.createElement('a');
                link.href = 'details.html';

                let img = document.createElement('img');
                img.src = item.imgurl;

                let h5 = document.createElement('h5');
                h5.innerHTML = item.title;

                let price =document.createElement('p');
                price.className = 'price';
                price.innerText = item.price;

                li.appendChild(img);
                li.appendChild(h5);
                li.appendChild(price);

                ul.appendChild(li);
                zong += item.price;
            });

            goodsList.appendChild(ul);

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
            $(function(){ 
                $(".jia").click(function(){ 
                    var t=$(this).parent().find('.qty'); 
                    t.text(parseInt(t.text())+1) 
                    setTotal(); 
                    // console.log($('.qty').text());
                    $(".shuliang").html($('.qty').text()); 
                }) 
                $(".jian").click(function(){
                    var t=$(this).parent().find('.qty'); 
                    t.text(parseInt(t.text())-1) 
                    if(parseInt(t.text())<0){ 
                        t.text(0); 
                    } 
                    setTotal(); 
                    $(".shuliang").html($('.qty').text()); 
                }) 
                console.log($('.qty').text())
            function setTotal(){ 
                var s=0; 
                $(".tab td").each(function(){ 
                    s+=parseInt($(this).find('.qty').text())*zong; 
                }); 
                $(".total").html(s.toFixed(2)); 
                } 
                setTotal(); 

            }) 
        })
    }
}
            




   


export default CarComponent