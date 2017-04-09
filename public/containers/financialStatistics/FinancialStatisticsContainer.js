import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router';
import {commonRefresh} from '../../actions/Common'
import Highcharts from 'highcharts'
import BreadCrumbs from '../../components/right/breadCrumbs';
import {NoData} from '../../components/Tool/Tool'


export default class FinancialStatisticsContainer extends Component {
    constructor(props) {
        super(props);
        this._startRefresh = this._startRefresh.bind(this)
    }

    _startRefresh() {
        this.props.dispatch(commonRefresh())
    }

    componentDidMount() {

    }

    render() {
        var tableHeight = ($(window).height() - 93);
        return (
            <div style={{height: tableHeight + 'px'}}>
                <div style={{position: "relative"}}>
                    <div style={{overflow: "hidden", height: tableHeight, padding: "20px 0  0 20px", zIndex: "1"}}>
                        <FinancialStatisticsComponent _startRefresh={this._startRefresh}/>
                    </div>
                    <div style={{clear: "both"}}></div>
                </div>

            </div>
        )
    }
}

class FinancialStatisticsComponent extends Component {
    constructor(props) {
        super(props);
        this.breadCrumbs = [
            {text: "财务统计", link: ''},
            {text: "财务概览", link: ''}
        ];
        this.operation=[];
        this._showCoupon = this._showCoupon.bind(this);
        this._setBillInfo = this._setBillInfo.bind(this);
        this.showCoupon = false;
    }

    componentDidMount() {

    }
    _clickTab(secondBread){
        this.breadCrumbs[1].text = secondBread;
        this.props._startRefresh();
    }
    _showCoupon(){
        this.showCoupon = !this.showCoupon;
        this.props._startRefresh();
    }
    _setBillInfo(){
        browserHistory.push("/setBillInfo");
    }
    render() {
        var tableHeight = ($(window).height() - 203);
        return (
            <div>
                <BreadCrumbs
                    breadCrumbs={this.breadCrumbs}
                    icon={'icon-feed'}
                    operation={this.operation}
                />
                <div className="tabbable">
                    <ul className="nav nav-tabs nav-tabs-bottom" style={{marginLeft:"15px"}}>
                        <li onClick={this._clickTab.bind(this,"财务概览")} className="active"><a style={{fontSize: "16px",padding:"9px 0"}} href="#bottom-tab1"
                                                  data-toggle="tab">财务概览</a></li>
                        <li onClick={this._clickTab.bind(this,"价格和优惠")} style={{marginLeft:"40px"}}><a style={{fontSize: "16px",padding:"9px 0"}} href="#bottom-tab2"
                                                                     data-toggle="tab">价格和优惠</a></li>
                        <li onClick={this._clickTab.bind(this,"账户充值")} style={{marginLeft:"40px"}}><a style={{fontSize: "16px",padding:"9px 0"}} href="#bottom-tab3" data-toggle="tab">账户充值</a></li>
                        <li onClick={this._clickTab.bind(this,"账单和消费情况")} style={{marginLeft:"40px"}}><a style={{fontSize: "16px",padding:"9px 0"}} href="#bottom-tab4" data-toggle="tab">账单和消费情况</a></li>
                        <li onClick={this._clickTab.bind(this,"抵用券")} style={{marginLeft:"40px"}}><a style={{fontSize: "16px",padding:"9px 0"}} href="#bottom-tab5" data-toggle="tab">抵用券</a></li>
                        <li onClick={this._clickTab.bind(this,"发票管理")} style={{marginLeft:"40px"}}><a style={{fontSize: "16px",padding:"9px 0"}} href="#bottom-tab6" data-toggle="tab">发票管理</a></li>
                        <li onClick={this._clickTab.bind(this,"套餐订单")} style={{marginLeft:"40px"}}><a style={{fontSize: "16px",padding:"9px 0"}} href="#bottom-tab7" data-toggle="tab">套餐订单</a></li>
                    </ul>

                    <div className="tab-content" style={{height: tableHeight, overflowY: "auto"}}>
                        <div className="tab-pane flipInX active" id="bottom-tab1">
                            <div className="row" style={{marginLeft: "0", marginRight: "10px", marginBottom:"30px"}}>
                                <div className="col-md-10" style={{paddingLeft:"5px"}}>
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166",marginBottom:0}}>
                                            我的财务
                                        </legend>
                                        <div className="form-group clearfix" style={{minWidth: "500px",paddingBottom: "10px",borderBottom: "1px solid #e5e5e5"}}>
                                            <div className="col-sm-4" style={{borderRight:"1px solid #e5e5e5",paddingLeft:0}}>
                                                <p>账号余额</p>
                                                <h3 style={{fontWeight:"500px",fontSize:"34px"}}>￥ 10.00</h3>
                                            </div>
                                            <div className="col-sm-4" style={{paddingLeft:"60px"}}>
                                                <p>抵用券余额</p>
                                                <h3 style={{fontWeight:"500px",fontSize:"34px"}}>￥ 0.00</h3>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="row" style={{marginLeft: "0", marginRight: "10px", marginBottom:"30px"}}>
                                <div className="col-md-10" style={{borderBottom: "1px solid #e5e5e5"}}>
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166",marginBottom:0,border: "0 red solid"}}>
                                            <h6 style={{fontSize: "16px"}}>免费用量占比免费用量占比（04-01 ~ 04-09）</h6>
                                        </legend>
                                        <div className="form-group">
                                            <div className="col-md-6" style={{paddingLeft:0}}>
                                                <p style={{maxWidth:"400px"}}>
                                                    <span>存储空间</span>
                                                    <span className="progress-value pull-right">5.5/10 GB</span>
                                                </p>
                                                <div className="progress progress-sm cdn-progress">
                                                    <div className="progress-bar" style={{width: "55%"}}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6" style={{paddingLeft:0}}>
                                                <p style={{maxWidth:"400px"}}>
                                                    <span>HTTP 国内下载流量</span>
                                                    <span className="progress-value pull-right">5.5/10 GB</span>
                                                </p>
                                                <div className="progress progress-sm cdn-progress">
                                                    <div className="progress-bar" style={{width: "55%"}}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-6" style={{paddingLeft:0}}>
                                                <p style={{maxWidth:"400px"}}>
                                                    <span>HTTP 海外下载流量</span>
                                                    <span className="progress-value pull-right">5.5/10 GB</span>
                                                </p>
                                                <div className="progress progress-sm cdn-progress">
                                                    <div className="progress-bar" style={{width: "55%"}}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6" style={{paddingLeft:0}}>
                                                <p style={{maxWidth:"400px"}}>
                                                    <span>GET 请求</span>
                                                    <span className="progress-value pull-right">5.5/10 万次</span>
                                                </p>
                                                <div className="progress progress-sm cdn-progress">
                                                    <div className="progress-bar" style={{width: "55%"}}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-6" style={{paddingLeft:0}}>
                                                <p style={{maxWidth:"400px"}}>
                                                    <span>PUT 请求</span>
                                                    <span className="progress-value pull-right">5.5/10 万次</span>
                                                </p>
                                                <div className="progress progress-sm cdn-progress">
                                                    <div className="progress-bar" style={{width: "55%"}}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="row" style={{marginLeft: "0", marginRight: "10px", marginBottom:"30px"}}>
                                <div className="col-md-10">
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166",marginBottom:0,border: "0 red solid"}}>
                                            <h6 style={{fontSize: "16px"}}>HTTPS 付费用量（04-01 ~ 04-09）</h6>
                                        </legend>
                                        <div className="form-group">
                                            <div className="col-md-6" style={{paddingLeft:0}}>
                                                <p style={{maxWidth:"400px",color: "#666f80"}}>
                                                    <span>HTTPS 国内下载流量: 0.00GB</span>
                                                </p>
                                            </div>
                                            <div className="col-md-6" style={{paddingLeft:0}}>
                                                <p style={{maxWidth:"400px",color: "#666f80"}}>
                                                    <span>HTTPS 海外下载流量: 0.00GB</span>
                                                </p>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab2">
                            <div className="row" style={{marginLeft: "0", marginRight: "10px"}}>
                                <div className="col-md-10" style={{paddingLeft:"5px"}}>
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166",marginBottom:0,paddingBottom:"20px",paddingTop:"30px"}}>
                                            免费额度(2017年04月)
                                            <a className="btn">查看详情</a>
                                        </legend>
                                        <div className="form-group clearfix" style={{minWidth: "500px",paddingBottom: "10px",borderBottom: "1px solid #e5e5e5"}}>
                                            <div className="col-md-2" style={{borderRight:"1px solid #e5e5e5",paddingLeft:0}}>
                                                <p style={{textAlign:"center"}}>存储空间</p>
                                                <div className="clearfix" style={{textAlign:"center"}}>
                                                    <h3 style={{fontWeight:"500px",fontSize:"34px",display:"inline"}}>10</h3>GB
                                                </div>
                                            </div>
                                            <div className="col-md-2" style={{borderRight:"1px solid #e5e5e5",paddingLeft:0}}>
                                                <p style={{textAlign:"center"}}>下载流量</p>
                                                <div className="clearfix" style={{textAlign:"center"}}>
                                                    <h3 style={{fontWeight:"500px",fontSize:"34px",display:"inline"}}>20</h3>GB
                                                </div>
                                            </div>
                                            <div className="col-md-6" style={{borderRight:"1px solid #e5e5e5",paddingLeft:0}}>
                                                <p style={{textAlign:"center"}}>API请求</p>
                                                <div className="clearfix" style={{textAlign:"center"}}>
                                                    <h3 style={{fontWeight:"500px",fontSize:"34px",display:"inline"}}>10</h3>万次PUT/月
                                                    <h3 style={{fontWeight:"500px",fontSize:"34px",display:"inline"}}>100</h3>万次GET/月
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <p style={{textAlign:"center"}}>多媒体处理</p>
                                                <div className="clearfix" style={{textAlign:"center"}}>
                                                    <h3 style={{fontWeight:"500px",fontSize:"34px",display:"inline"}}>20</h3>元/月
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="row" style={{marginLeft: "0", marginRight: "10px", marginBottom:"30px"}}>
                                <div className="col-md-10" style={{paddingLeft:"5px"}}>
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <div className="panel-body item-body">
                                            <div className="tabbable">
                                                <ul className="nav nav-tabs" style={{borderBottom:"0px solid #ddd"}}>
                                                    <li className="active"><a style={{fontSize: "16px"}} href="#financial-tab1" data-toggle="tab">对象存储</a></li>
                                                    <li><a style={{fontSize: "16px"}} href="#financial-tab2" data-toggle="tab">融合CDN加速</a></li>
                                                    <li><a style={{fontSize: "16px"}} href="#financial-tab3" data-toggle="tab">自定义数据处理</a></li>
                                                    <li><a style={{fontSize: "16px"}} href="#financial-tab4" data-toggle="tab">多媒体处理服务价格</a></li>
                                                    <li><a style={{fontSize: "16px"}} href="#financial-tab5" data-toggle="tab">第三方数据处理</a></li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div className="tab-pane active" id="financial-tab1">
                                                        <div className="table-responsive financial" id="financial">
                                                            <table className="table">
                                                                <thead>
                                                                <tr>
                                                                    <th>名目</th>
                                                                    <th>阶梯</th>
                                                                    <th>价格</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>存储空间
                                                                        <p className="tips"> 存储量取月度日均值进行费用结算。 <a href="javascript:void(0)">了解更多</a> </p>
                                                                    </td>
                                                                    <td>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>第0GB至10GB</li>
                                                                            <li>第10GB至1TB</li>
                                                                            <li>第1TB至200TB</li>
                                                                            <li>第200TB至5120TB</li>
                                                                            <li>第5120TB以上</li>
                                                                        </ul>
                                                                    </td>
                                                                    <td>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>免费</li>
                                                                            <li>0.148元/GB/月</li>
                                                                            <li>0.145元/GB/月</li>
                                                                            <li>0.142元/GB/月</li>
                                                                            <li>0.139元/GB/月</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>上传流量</td>
                                                                    <td>无限制</td>
                                                                    <td>免费</td>
                                                                </tr>
                                                                <tr>
                                                                    <td>PUT/DELETE 请求</td>
                                                                    <td>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>第0千至10万</li>
                                                                            <li>第10万以上</li>
                                                                        </ul>
                                                                    </td>
                                                                    <td>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>免费</li>
                                                                            <li>0.001元/千次</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>GET 请求</td>
                                                                    <td>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>第0千至100万</li>
                                                                            <li>第100万以上</li>
                                                                        </ul>
                                                                    </td>
                                                                    <td>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>免费</li>
                                                                            <li>0.001元/千次</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane active" id="financial-tab2">
                                                        <div className="table-responsive financial" id="financial">
                                                            <table className="table">
                                                                <thead>
                                                                <tr>
                                                                    <th>名目</th>
                                                                    <th>阶梯</th>
                                                                    <th>价格</th>
                                                                </tr>
                                                                </thead>
                                                                <tbody>
                                                                <tr>
                                                                    <td>HTTP 国内下载流量</td>
                                                                    <td>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>第0GB至10GB</li>
                                                                            <li>第10GB至100TB</li>
                                                                            <li>第100TB以上</li>
                                                                        </ul>
                                                                    </td>
                                                                    <td>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>免费</li>
                                                                            <li>0.29元/GB</li>
                                                                            <li>0.26元/GB</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>HTTP 海外下载流量</td>
                                                                    <td>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>第0GB至10GB</li>
                                                                            <li>第10GB至100TB</li>
                                                                            <li>第100TB以上</li>
                                                                        </ul>
                                                                    </td>
                                                                    <td>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>免费</li>
                                                                            <li>0.39元/GB</li>
                                                                            <li>0.36元/GB</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>HTTPS 国内下载流量</td>
                                                                    <td>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>第0GB至10GB</li>
                                                                            <li>第10GB至100TB</li>
                                                                            <li>第100TB以上</li>
                                                                        </ul>
                                                                    </td>
                                                                    <td>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>0.36元/GB</li>
                                                                            <li>0.32元/GB</li>
                                                                            <li>0.26元/GB</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{borderBottom:"1px solid #ddd"}}>HTTPS 海外下载流量</td>
                                                                    <td style={{borderBottom:"1px solid #ddd"}}>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>第0GB至100TB</li>
                                                                            <li>第100TB以上</li>
                                                                        </ul>
                                                                    </td>
                                                                    <td style={{borderBottom:"1px solid #ddd"}}>
                                                                        <ul style={{paddingLeft:0}}>
                                                                            <li>0.58元/GB</li>
                                                                            <li>0.54元/GB</li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </fieldset>
                                </div>
                            </div>
                            <div className="row" style={{marginLeft: "0", marginRight: "10px"}}>
                                <div className="col-md-10" style={{paddingLeft:"5px"}}>
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166",marginBottom:0,border:"0px solid red"}}>
                                            我的优惠
                                        </legend>
                                        <div className="coupons clearfix">
                                            <div className="my-coupon">
                                                <div className="title">
                                                    <div className="title-word">已认证用户MPS配额</div>
                                                </div>
                                                <div className="body">
                                                    <div className="desc">
                                                        <div className="word">免费数据处理每月20元</div>
                                                    </div>
                                                    <div className="time">
                                                        <div className="word">2017年04月08日 -
                                                            <span>永久</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab3">
                            <div className="row" style={{marginLeft: "0", marginRight: "10px"}}>
                                <div className="col-md-10" style={{paddingLeft:"5px"}}>
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166",marginBottom:0,paddingTop:"10px", border:"0px solid red"}}>
                                            <legend style={{fontSize: "16px", color: "#5E6166",marginBottom:0,border:"0px solid red"}}>
                                                <p className="text-muted" style={{margin:0}}>交易过程中遇到交易限额的问题，请前往相应的网上银行进行调整。</p>
                                                <p className="text-muted" style={{margin:0}}>目前七牛支付宝不支持信用卡支付。</p>
                                                <p className="text-muted" style={{margin:0}}>转账汇款请<a href="javascript:void(0)">点击获取账户信息</a>。</p>
                                            </legend>
                                        </legend>
                                        <form className="form-horizontal" action="#">
                                            <div className="form-group" style={{borderBottom:"solid 1px #dcdfe5",paddingBottom:"40px",marginBottom:"40px"}}>
                                                <label className="control-label col-lg-2" style={{maxWidth:"180px",fontWeight: 700,fontSize:"14px"}}>账号余额</label>
                                                <div className="col-lg-6 form-control" style={{maxWidth:"300px",fontSize:"14px",border:0}}>
                                                    ￥ 10.00
                                                </div>
                                            </div>
                                            <div className="form-group" style={{borderBottom:"solid 1px #dcdfe5",paddingBottom:"40px",marginBottom:"40px"}}>
                                                <label className="control-label col-lg-2" style={{maxWidth:"180px",fontWeight: 700,fontSize:"14px"}}>支付方式</label>
                                                <div className="col-lg-10">
                                                    <div className="row">

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group has-feedback" style={{borderBottom:"solid 1px #dcdfe5",paddingBottom:"40px",marginBottom:"40px"}}>
                                                <label className="control-label col-lg-2" style={{maxWidth:"180px",fontWeight: 700,fontSize:"14px"}}>充值金额</label>
                                                <div className="col-lg-6" style={{maxWidth:"300px",fontSize:"14px",border:0}}>
                                                    <div className="input-group" style={{width:"280px"}}>
                                                        <input type="text" className="form-control" placeholder="充值金额" />
                                                    </div>
                                                    <div className="form-control-feedback">
                                                        元
                                                    </div>
                                                </div>
                                                <div className="col-lg-4" onClick={this._showCoupon} style={{lineHeight:"36px",marginLeft:"40px"}}>
                                                    <a href="javascript:void(0)">使用优惠码</a>
                                                </div>
                                            </div>
                                            <div className="form-group" style={{display:this.showCoupon?"block":"none",borderBottom:"solid 1px #dcdfe5",paddingBottom:"40px",marginBottom:"40px"}}>
                                                <label className="control-label col-lg-2" style={{maxWidth:"180px",fontWeight: 700,fontSize:"14px"}}>输入优惠码</label>
                                                <div className="col-lg-6" style={{maxWidth:"300px",fontSize:"14px",border:0}}>
                                                    <input type="text" className="form-control" style={{width:"280px"}} placeholder="优惠码" />
                                                </div>
                                                <div className="col-lg-4" style={{lineHeight:"36px",marginLeft:"40px"}}>
                                                    <button className="btn btn-primary">使用优惠码</button>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12 clearfix">
                                                    <button className="btn btn-primary pull-right">立即充值</button>
                                                </div>
                                            </div>
                                        </form>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab4">
                            <div className="row" style={{marginLeft: "0", marginRight: "10px"}}>
                                <div className="col-md-10" style={{paddingLeft:"5px"}}>
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166",marginBottom:0,border:"0px solid red"}}>
                                            近期账单
                                        </legend>

                                    </fieldset>
                                </div>
                            </div>
                            <div className="row" style={{marginLeft: "0", marginRight: "10px"}}>
                                <div className="col-md-10" style={{paddingLeft:"5px"}}>
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166",marginBottom:0,border:"0px solid red"}}>
                                            <div className="form-group">
                                                <label className="radio-inline"><h6>最近六个月的消费详情</h6></label>
                                                <label className="radio-inline">
                                                    <input type="radio" checked="checked" name="consume"/>
                                                     全部
                                                </label>
                                                <label className="radio-inline">
                                                    <input type="radio" name="consume"/>
                                                    消费
                                                </label>
                                                <label className="radio-inline">
                                                    <input type="radio" name="consume"/>
                                                    充值
                                                </label>
                                                <label className="radio-inline">
                                                    <input type="radio" name="consume"/>
                                                    赠送
                                                </label>
                                            </div>
                                        </legend>
                                        <div className="table-responsive financial">
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>账单编号</th>
                                                    <th>账单时间</th>
                                                    <th>账单金额</th>
                                                    <th>账单状态</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>58e89806a02d0581e803e0df</td>
                                                    <td>2017-04-08 15:57</td>
                                                    <td>￥ 10.00</td>
                                                    <td>已支付</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab5">
                            <div className="row" style={{marginLeft: "0", marginRight: "10px"}}>
                                <div className="col-md-10" style={{paddingLeft:"5px"}}>
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166",marginBottom:0,paddingTop:"10px", border:"0px solid red"}}>
                                            <p className="text-muted">在七牛云服务使用抵用券，使用成功（即激活成功）的抵用券显示在已激活的列表中。发生扣费时，系统优先扣除最近过期的抵用券。抵用券不可抵用快递费用，也不可改变账户的欠费状态。</p>
                                        </legend>
                                        <form className="form-horizontal" action="#">
                                            <div className="form-group">
                                                <label className="control-label col-lg-2" style={{maxWidth:"180px",color:"#8f9bb3",fontWeight: 700,fontSize:"16px"}}>验证码</label>
                                                <div className="col-lg-6" style={{maxWidth:"300px"}}>
                                                    <input type="text" className="form-control" placeholder="验证码"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="control-label col-lg-2" style={{maxWidth:"180px",color:"#8f9bb3",fontWeight: 700,fontSize:"16px"}}>抵用券号码</label>
                                                <div className="col-lg-6" style={{maxWidth:"300px"}}>
                                                    <input type="text" className="form-control" placeholder="输入抵用券号码"/>
                                                </div>
                                                <div className="col-lg-2">
                                                    <button className="btn btn-primary">激活抵用券</button>
                                                </div>
                                            </div>
                                        </form>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab6">
                            <div className="row" style={{marginLeft: "0", marginRight: "10px"}}>
                                <div className="col-md-10" style={{paddingLeft:"5px"}}>
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166",marginBottom:0,paddingTop:"10px", border:"0px solid red"}}>
                                            <div className="describe-list">
                                                <ol>
                                                    <li>开发票请先填写开票信息。增值税普通发票填写后即可开票，增值税专用发票需审核后才可开票。审核需要 1~3 个工作日。</li>
                                                    <li>每月前 3 个工作日为账期，在此期间的申请需等到当月第 4 个工作日方可开票。</li>
                                                    <li>充值后请尽快申请开票，超过 6 个月未申请开票的充值流水将不可开票。</li>
                                                    <li>申请发票金额小于 100 元需支付快递费 5 元，快递费将在现金账户中扣除；超过 100 元免收快递费。</li>
                                                    <li>增值税专用发票单张上限为 10 万，增值税普通发票单张上限为 100 万，超过限额请分开申请或联系销售申请。</li>
                                                    <li>开票金额为 1000 元以上时才可申请开具增值税专用发票。</li>
                                                </ol>
                                            </div>
                                        </legend>
                                        <div className="form-group">
                                            <button className="btn btn-primary">申请开票</button>
                                            <button className="btn btn-default" style={{left:"20px"}} onClick={this._setBillInfo}>设置开票信息</button>
                                        </div>
                                        <div className="table-responsive financial">
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>金额</th>
                                                    <th>申请时间</th>
                                                    <th>发票抬头</th>
                                                    <th>发票类型</th>
                                                    <th>发票状态</th>
                                                    <th>快递公司</th>
                                                    <th>运单号</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>￥ 10.00</td>
                                                    <td>2017-04-08 15:57</td>
                                                    <td>浪潮公司</td>
                                                    <td>增值税发票</td>
                                                    <td>可用</td>
                                                    <td>申通</td>
                                                    <td>AS2323423</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab7">
                            <div className="row" style={{marginLeft: "0", marginRight: "10px"}}>
                                <div className="col-md-10" style={{paddingLeft:"5px"}}>
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166",marginBottom:0,paddingTop:"10px", border:"0px solid red"}}>
                                            <div className="form-group">
                                                <label className="radio-inline">
                                                    <input type="radio" checked="checked" name="order"/>
                                                    全部订单
                                                </label>
                                                <label className="radio-inline">
                                                    <input type="radio" name="order"/>
                                                    未支付订单
                                                </label>
                                                <label className="radio-inline">
                                                    <input type="radio" name="order"/>
                                                    已支付订单
                                                </label>
                                            </div>
                                        </legend>
                                        <div className="table-responsive financial">
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th>订单号</th>
                                                    <th>所购产品</th>
                                                    <th>付款方式及类型</th>
                                                    <th>金额</th>
                                                    <th>产品起始时间</th>
                                                    <th>产品结束时间</th>
                                                    <th>支付状态</th>
                                                    <th>生效状态</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>2342523534</td>
                                                    <td>浪潮云存储</td>
                                                    <td>支付宝</td>
                                                    <td>￥ 10.00</td>
                                                    <td>2017-03-09 22:29:21</td>
                                                    <td>2017-04-09 22:29:21</td>
                                                    <td>已支付</td>
                                                    <td>已生效</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {commonReducer}=state
    return {
        refresh: commonReducer.refresh,
    }
}

export default connect(mapStateToProps)(FinancialStatisticsContainer)
