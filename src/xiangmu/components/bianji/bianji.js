import "./bian.scss"
import React from "react"
import {Link} from "react-router"

import GengduoComponent from '../gengduo/gengduo.js'
import SlideComponent from '../slide/slide.js'


var check = true;
class BianJiComponent extends React.Component{
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
    render(){
        return (
            <div className="bianji">
                <ul className="header">
                    <li className="header_l">
                        <Link to="/"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></Link>
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
                                    <input type="checkbox" name="check selected" className="inp"/>
                                    <h1>
                                        
                                    </h1>
                                    <div className="mian2_1_r">
                                        <h3>世界大会上的</h3>
                                        <p>￥30.00</p>
                                        <h4>
                                            <p className="jian">-</p>
                                            <span>1</span>
                                            <p className="jia">+</p>
                                        </h4>
                                    </div>
                                </td>
                            </tr>
                            <tr className="mian2">
                                <td className="mian2_1">
                                    <input type="checkbox" name="check selected" className="inp"/>
                                    <h1>
                                        
                                    </h1>
                                    <div className="mian2_1_r">
                                        <h3>世界大会上的</h3>
                                        <p>￥30.00</p>
                                        <h4 className="js">
                                            <p className="jian">-</p>
                                            <span>1</span>
                                            <p className="jia">+</p>
                                        </h4>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <SlideComponent />
                <div className="footer">
                    <div className="qx">
                        <input type="checkbox" name="check selected" className="inp"/>
                        <h2>全选</h2>
                    </div>
                    <h4 className="shanchu">
                        删除（0）
                    </h4>
                </div>
            </div>

        )
    }
}
            
            jQuery(function($){

                let $btnAll = $('.all');
                let $btnFx = $('.btnFx');
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
                // $shanchu.click(function(){
                //     alert($('.selected').attr('你是否要删除？'))
                // })

        })

export default BianJiComponent