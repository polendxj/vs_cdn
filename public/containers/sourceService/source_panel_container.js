import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {commonRefresh} from '../../actions/Common'
import Highcharts from 'highcharts'
import {NoData} from '../../components/Tool/Tool'


export default class Source_panel_container extends Component {
    constructor(props) {
        super(props)
    }

    _startRefresh() {
        this.props.dispatch(commonRefresh())
    }

    componentDidMount() {
        this._startRefresh();
    }

    render() {
        var tableHeight = ($(window).height() - 93);
        return (
            <div style={{height: tableHeight + 'px'}}>
                <div style={{position: "relative"}}>
                    <div style={{
                        width: "250px",
                        height: tableHeight,
                        float: "left",
                        borderRight: "thin lightgray solid",
                        zIndex: "10"
                    }}>
                        <Source_panel_left />
                    </div>
                    <div style={{overflow: "hidden", height: tableHeight, padding: "20px 0  0 20px", zIndex: "1"}}>
                        <Source_panel_right />
                    </div>
                    <div style={{clear: "both"}}></div>
                </div>

            </div>
        )
    }
}

class Source_panel_left extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        $('.navigation-main1').find('li').has('ul').children('a').on('click', function (e) {
            e.preventDefault();

            // Collapsible
            $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).toggleClass('active').children('ul').slideToggle(250);

            // Accordion
            if ($('.navigation-main1').hasClass('navigation-accordion')) {
                $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(250);
            }
        });
    }

    render() {
        return (
            <div>
                <div style={{textAlign: "center", marginTop: "20px"}}>
                    <button type="button" className="btn btn-primary btn-xs btn-rounded"
                            style={{color: "#1989FA", backgroundColor: "rgba(33,150,243,0.1)", borderColor: "#AAD3FE"}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        新建存储空间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </button>
                </div>
                <div style={{width: "203px", paddingLeft: "45px"}}>
                    <div className="form-group has-feedback has-feedback-left"
                         style={{textAlign: "center", marginTop: "15px"}}>
                        <input type="text" className="form-control input-xs" placeholder="搜索存储空间"
                               style={{borderRadius: "50px"}}/>
                        <div className="form-control-feedback">
                            <i className="icon-search4 text-size-base"></i>
                        </div>
                    </div>
                </div>
                <fieldset className="content-group" style={{padding: "30px"}}>
                    <legend style={{fontSize: "14px", color: "#5E6166", border: "0 red solid"}}>存储空间列表</legend>
                    <div className="navigation navigation-main1 navigation-accordion" style={{marginTop: "-40px"}}>
                        <li>
                            <a href="#" className="has-ul"> <span>香港</span></a>
                            <ul className="hidden-ul">
                                <li><a href="javascript:void(0);">Jabriel</a>
                                    <div style={{
                                        width: "40px",
                                        height: "41px",
                                        backgroundColor: "white",
                                        position: "absolute",
                                        right: "-31px",
                                        top: "10px",
                                        borderTop: "thin lightgray solid",
                                        borderBottom: "thin lightgray solid",
                                        display: "none"
                                    }}></div>
                                </li>
                                <li><a href="javascript:void(0);">Joanna</a>
                                    <div style={{
                                        width: "40px",
                                        height: "42px",
                                        backgroundColor: "white",
                                        position: "absolute",
                                        right: "-31px",
                                        top: "0",
                                        borderTop: "thin lightgray solid",
                                        borderBottom: "thin lightgray solid",
                                        display: "none"
                                    }}></div>
                                </li>
                                <li><a href="javascript:void(0);">Andrew</a>
                                    <div style={{
                                        width: "40px",
                                        height: "42px",
                                        backgroundColor: "white",
                                        position: "absolute",
                                        right: "-31px",
                                        top: "0",
                                        borderTop: "thin lightgray solid",
                                        borderBottom: "thin lightgray solid",
                                        display: "none"
                                    }}></div>
                                </li>
                            </ul>
                        </li>
                    </div>
                    <div className="navigation navigation-main1 navigation-accordion">
                        <li>
                            <a href="#" className="has-ul"> <span>欧洲</span></a>
                            <ul className="hidden-ul">
                                <li><a href="javascript:void(0);">Ryan</a>
                                    <div style={{
                                        width: "40px",
                                        height: "41px",
                                        backgroundColor: "white",
                                        position: "absolute",
                                        right: "-31px",
                                        top: "10px",
                                        borderTop: "thin lightgray solid",
                                        borderBottom: "thin lightgray solid",
                                        display: "none"
                                    }}></div>
                                </li>
                                <li><a href="javascript:void(0);">ChenQian</a>
                                    <div style={{
                                        width: "40px",
                                        height: "42px",
                                        backgroundColor: "white",
                                        position: "absolute",
                                        right: "-31px",
                                        top: "0",
                                        borderTop: "thin lightgray solid",
                                        borderBottom: "thin lightgray solid",
                                        display: "none"
                                    }}></div>
                                </li>
                            </ul>
                        </li>
                    </div>
                </fieldset>
                <fieldset className="content-group" style={{padding: "30px"}}>
                    <legend style={{fontSize: "14px", color: "#5E6166", border: "0 red solid"}}><a>跨区域同步管理</a></legend>

                </fieldset>

            </div>
        )
    }
}


class Source_panel_right extends Component {
    constructor(props) {
        super(props)
    }

    _getStatics() {
        var chart4 = new Highcharts.Chart('containerStorage', {
            title: {
                text: '',
                x: -20
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['4月01号', '4月02号', '4月03号', '4月04号', '4月05号', '4月06号', '4月07号', '4月08号']
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }],
                formatter: function () {
                    return this.value + " B";
                },
                labels: {
                    format: '{value} B'
                }

            },

            credits: {
                enabled: false,
            },
            tooltip: {
                valueSuffix: 'B'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
                enabled: false
            },
            series: [{
                name: '存储',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
            }]
        });
    }

    _getAPIRequest() {
        var chart5 = new Highcharts.Chart('containerAPIRequest', {
            title: {
                text: '',
                x: -20
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['4月01号', '4月02号', '4月03号', '4月04号', '4月05号', '4月06号', '4月07号', '4月08号']
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }],
                formatter: function () {
                    return this.value + " B";
                },
                labels: {
                    format: '{value} B'
                }

            },

            credits: {
                enabled: false,
            },
            tooltip: {
                valueSuffix: 'B'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
                enabled: false
            },
            series: [{
                name: 'API请求',
                data: [0, 0, 0, 0, 0, 0, 0, 0]
            }]
        });
    }

    componentDidMount() {
        var chart = new Highcharts.Chart('container', {
            title: {
                text: '',
                x: -20
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['4月01号', '4月03号', '4月05号', '4月07号']
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }],
                formatter: function () {
                    return this.value + " B";
                },
                labels: {
                    format: '{value} B'
                }

            },

            credits: {
                enabled: false,
            },
            tooltip: {
                valueSuffix: 'B'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
                enabled: false
            },
            series: [{
                name: '文件存储',
                data: [0, 0, 0, 0]
            }]
        });

        var chartAPI = new Highcharts.Chart('containerAPI', {
            title: {
                text: '',
                x: -20
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['4月01号', '4月03号', '4月05号', '4月07号']
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }],
                formatter: function () {
                    return this.value + " 次";
                },
                labels: {
                    format: '{value} 次'
                }

            },

            credits: {
                enabled: false,
            },
            tooltip: {
                valueSuffix: '次'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
                enabled: false
            },
            series: [{
                name: 'API请求',
                data: [0, 0, 0, 0]
            }]
        });

        var chart3 = new Highcharts.Chart('containerBytes', {
            title: {
                text: '',
                x: -20
            },
            subtitle: {
                text: '',
                x: -20
            },
            xAxis: {
                categories: ['4月01号', '4月03号', '4月05号', '4月07号']
            },
            yAxis: {
                title: {
                    text: ''
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }],
                formatter: function () {
                    return this.value + " B";
                },
                labels: {
                    format: '{value} B'
                }

            },

            credits: {
                enabled: false,
            },
            tooltip: {
                valueSuffix: 'B'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0,
                enabled: false
            },
            series: [{
                name: '空间流量',
                data: [0, 0, 0, 0]
            }]
        });

    }

    render() {
        var tableHeight = ($(window).height() - 203);
        return (
            <div>
                <h4 className="panel-title"><i className="icon-feed"> </i> &nbsp;&nbsp;Andrew</h4>
                <div className="tabbable">
                    <ul className="nav nav-tabs nav-tabs-bottom">
                        <li className="active"><a style={{fontSize: "16px"}} href="#bottom-tab1"
                                                  data-toggle="tab">空间概览</a></li>
                        <li onClick={this._getStatics.bind(this)}><a style={{fontSize: "16px"}} href="#bottom-tab2"
                                                                     data-toggle="tab">数据统计</a></li>
                        <li><a style={{fontSize: "16px"}} href="#bottom-tab3" data-toggle="tab">内容管理</a></li>
                        <li><a style={{fontSize: "16px"}} href="#bottom-tab4" data-toggle="tab">镜像存储</a></li>
                        <li><a style={{fontSize: "16px"}} href="#bottom-tab5" data-toggle="tab">绑定域名</a></li>
                        <li><a style={{fontSize: "16px"}} href="#bottom-tab6" data-toggle="tab">样式分隔符设置</a></li>
                        <li><a style={{fontSize: "16px"}} href="#bottom-tab7" data-toggle="tab">图片样式</a></li>
                        <li><a style={{fontSize: "16px"}} href="#bottom-tab8" data-toggle="tab">空间设置</a></li>

                    </ul>

                    <div className="tab-content" style={{height: tableHeight, overflowY: "auto"}}>
                        <div className="tab-pane flipInX active" id="bottom-tab1">
                            <div className="row" style={{marginLeft: "0", marginRight: "10px"}}>
                                <div className="col-md-5">
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166", border: "0 red solid"}}>
                                            文件存储
                                        </legend>
                                        <div id="container" style={{minWidth: "400px", height: "180px"}}></div>
                                        <legend style={{fontSize: "16px", color: "#5E6166", border: "0 red solid"}}>
                                            API请求
                                        </legend>
                                        <div id="containerAPI" style={{minWidth: "400px", height: "180px"}}></div>
                                        <legend style={{fontSize: "16px", color: "#5E6166", border: "0 red solid"}}>
                                            空间流量
                                        </legend>
                                        <div id="containerBytes" style={{minWidth: "400px", height: "180px"}}></div>
                                        <div className="alert alert-info no-border">
                                            <span className="text-semibold">空间中的 CDN 流量/带宽 已迁至</span> 数据统计-融合 CDN， <a
                                            href="#">点击查看.</a>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="col-md-7">
                                    <fieldset className="content-group" style={{padding: "10px"}}>
                                        <legend style={{fontSize: "16px", color: "#5E6166"}}>
                                            测试域名
                                        </legend>
                                        <div className="alert alert-primary no-border">
                                            <span className="text-semibold"> <i className="icon-warning22"></i> 此类测试域名，限总流量，限单 IP 访问频率，限速，仅供测试使用，不能用于自定义域名的 CNAME</span>
                                            <a href="#">相关文档</a>
                                            <br/>
                                            <br/>
                                            <span className="text-semibold">oo35hshf3.bkt.clouddn.com</span>
                                        </div>
                                        <legend style={{fontSize: "16px", color: "#5E6166"}}>
                                            融合CDN加速域名
                                            <span className="pull-right"
                                                  style={{fontSize: "12px", color: "gray", marginTop: "3px"}}><i
                                                className=" icon-checkbox-checked"></i> 自定义域名</span>

                                        </legend>
                                        <div style={{textAlign: "center"}}>
                                            <button type="button"
                                                    className="btn border-warning text-warning-300 btn-flat btn-xs">
                                                立即绑定一个域名
                                            </button>

                                        </div>
                                        <legend style={{fontSize: "16px", color: "#5E6166"}}>
                                            图片处理
                                            <span className="pull-right"
                                                  style={{fontSize: "12px", color: "gray", marginTop: "3px"}}><i
                                                className=" icon-checkbox-checked"></i> 新建样式</span>

                                            <span className="pull-right" style={{
                                                fontSize: "12px",
                                                color: "gray",
                                                marginTop: "3px",
                                                marginRight: "10px"
                                            }}><i className=" icon-cog3"></i> 设置分隔符</span>

                                        </legend>
                                        <div >
                                            <div className="alert alert-primary no-border">
                                                <span className="text-semibold"> 样式分隔符 <i
                                                    className=" icon-question4"></i></span>
                                                <span className="label label-default" style={{
                                                    marginLeft: "20px",
                                                    backgroundColor: "white",
                                                    color: "black"
                                                }}>- 中划线</span>
                                            </div>
                                        </div>
                                        <div style={{textAlign: "center"}}>
                                            <button type="button"
                                                    className="btn border-warning text-warning-300 btn-flat btn-xs">
                                                未发现样式，请创建
                                            </button>

                                        </div>
                                        <legend style={{fontSize: "16px", color: "#5E6166"}}>
                                            空间设置
                                            <span className="pull-right"
                                                  style={{fontSize: "12px", color: "gray", marginTop: "3px"}}><i
                                                className=" icon-cog3"></i> 空间设置</span>
                                        </legend>
                                        <div className="table-responsive">
                                            <table className="table" style={{fontSize: "14px"}}>
                                                <tbody>
                                                <tr>
                                                    <td style={{width: "200px", borderTop: "0 red solid"}}>存储区域</td>
                                                    <td style={{borderTop: "0 red solid"}}>华南</td>
                                                </tr>
                                                <tr>
                                                    <td style={{width: "200px", borderTop: "0 red solid"}}>默认首页设置</td>
                                                    <td style={{borderTop: "0 red solid"}}>关闭</td>
                                                </tr>
                                                <tr>
                                                    <td style={{width: "200px", borderTop: "0 red solid"}}>空间 404 页面设置
                                                    </td>
                                                    <td style={{borderTop: "0 red solid"}}>已开启</td>
                                                </tr>
                                                <tr>
                                                    <td style={{width: "200px", borderTop: "0 red solid"}}>原图保护</td>
                                                    <td style={{borderTop: "0 red solid"}}>关闭</td>
                                                </tr>
                                                <tr>
                                                    <td style={{width: "200px", borderTop: "0 red solid"}}>maxAge</td>
                                                    <td style={{borderTop: "0 red solid"}}>313536000</td>
                                                </tr>
                                                <tr>
                                                    <td style={{width: "200px", borderTop: "0 red solid"}}>访问日志</td>
                                                    <td style={{borderTop: "0 red solid"}}>关闭</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab2">
                            <fieldset className="content-group" style={{padding: "10px"}}>
                                <legend style={{fontSize: "16px", color: "#5E6166"}}>
                                    数据统计
                                    <br />
                                    <span className="label label-warning" style={{fontSize: "14px"}}>
                                        API</span>
                                </legend>
                                <div className="tabbable">
                                    <ul className="nav nav-tabs nav-tabs-bottom">
                                        <li className="active"><a style={{fontSize: "16px"}} href="#static-1"
                                                                  data-toggle="tab">存储</a>
                                        </li>
                                        <li onClick={this._getAPIRequest.bind(this)}><a style={{fontSize: "16px"}}
                                                                                        href="#static-2"
                                                                                        data-toggle="tab">API请求</a>
                                        </li>
                                        <li><a style={{fontSize: "16px"}} href="#static-3" data-toggle="tab">空间流量</a>
                                        </li>
                                        <li><a style={{fontSize: "16px"}} href="#static-4" data-toggle="tab">空间带宽</a>
                                        </li>
                                        <li className="pull-right"><a style={{fontSize: "16px"}} href="#static-4"
                                                                      data-toggle="tab">空间带宽</a>
                                        </li>

                                    </ul>
                                    <div className="tab-content"
                                         style={{height: tableHeight, overflowY: "auto", overflowX: "hidden"}}>
                                        <div className="tab-pane flipInX active" id="static-1">
                                            <div className="row text-right">
                                                <button type="button" className="btn btn-primary btn-xs "
                                                        style={{
                                                            color: "#1989FA",
                                                            backgroundColor: "rgba(33,150,243,0.1)",
                                                            borderColor: "#AAD3FE",
                                                            marginRight: "10px"
                                                        }}>
                                                    &nbsp;导出CSV&nbsp;
                                                </button>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 text-center">
                                                    <div style={{fontSize: "14px"}}>当前存储量</div>
                                                    <div style={{fontSize: "24px"}}>0 B</div>
                                                </div>
                                                <div className="col-md-6 text-center">
                                                    <div style={{fontSize: "14px"}}>平均值</div>
                                                    <div style={{fontSize: "24px"}}>0 B</div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div id="containerStorage"
                                                         style={{minWidth: "500px", height: "300px"}}></div>

                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane flipInX" id="static-2">
                                            <div className="row text-right">
                                                <button type="button" className="btn btn-primary btn-xs "
                                                        style={{
                                                            color: "#1989FA",
                                                            backgroundColor: "rgba(33,150,243,0.1)",
                                                            borderColor: "#AAD3FE",
                                                            marginRight: "10px"
                                                        }}>
                                                    &nbsp;导出CSV&nbsp;
                                                </button>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-3 text-center">
                                                    <div style={{fontSize: "14px"}}>GET请求总次数</div>
                                                    <div style={{fontSize: "24px"}}>0 次</div>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <div style={{fontSize: "14px"}}>GET请求平均次数</div>
                                                    <div style={{fontSize: "24px"}}>0 次</div>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <div style={{fontSize: "14px"}}>PUT请求总次数</div>
                                                    <div style={{fontSize: "24px"}}>0 次</div>
                                                </div>
                                                <div className="col-md-3 text-center">
                                                    <div style={{fontSize: "14px"}}>PUT请平均次数</div>
                                                    <div style={{fontSize: "24px"}}>0 次</div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div id="containerAPIRequest"
                                                         style={{minWidth: "500px", height: "300px"}}></div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane flipInX active" id="static-3">
                                            <div className="row">
                                                <div className="btn-group" style={{marginLeft: "20px"}}>
                                                    <button type="button"
                                                            className="btn btn-default btn-sm">&nbsp;&nbsp;
                                                        一天&nbsp;&nbsp;</button>
                                                    <button type="button"
                                                            className="btn btn-default btn-sm">&nbsp;&nbsp;
                                                        5分钟&nbsp;&nbsp;</button>
                                                </div>
                                                <NoData />
                                            </div>
                                        </div>
                                        <div className="tab-pane flipInX active" id="static-4">
                                            <div className="row">
                                                <div className="btn-group" style={{marginLeft: "20px"}}>
                                                    <button type="button"
                                                            className="btn btn-default btn-sm">&nbsp;&nbsp;
                                                        一天&nbsp;&nbsp;</button>
                                                    <button type="button"
                                                            className="btn btn-default btn-sm">&nbsp;&nbsp;
                                                        5分钟&nbsp;&nbsp;</button>
                                                </div>
                                                <NoData />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab3">
                            <fieldset className="content-group" style={{padding: "10px"}}>
                                <legend style={{fontSize: "16px", color: "#5E6166"}}>
                                    内容管理
                                    <br />
                                    <span className="label label-success" style={{fontSize: "14px"}}>
                                        帮助</span>
                                </legend>
                                <div className="row">
                                    <button type="button" className="btn btn-primary btn-xs"
                                            style={{color: "#1989FA", backgroundColor: "rgba(33,150,243,0.1)", borderColor: "#AAD3FE"}}>
                                        &nbsp;&nbsp;上传文件&nbsp;&nbsp;
                                    </button>
                                    <button type="button" className="btn btn-primary btn-xs"
                                            style={{color: "black", backgroundColor: "white", borderColor: "#AAD3FE",marginLeft:"10px"}}>
                                        &nbsp;&nbsp;全选&nbsp;&nbsp;
                                    </button>
                                    <button type="button" className="btn btn-primary btn-xs"
                                            style={{color: "black", backgroundColor: "white", borderColor: "#AAD3FE",marginLeft:"10px"}}>
                                        &nbsp;&nbsp;刷新&nbsp;&nbsp;
                                    </button>
                                    <div className="form-group has-feedback has-feedback-left pull-right"
                                         style={{textAlign: "center", marginTop: "5px",marginRight:"10px"}}>
                                        <input type="text" className="form-control input-xs" placeholder="输入文件前缀搜索"
                                               />
                                        <div className="form-control-feedback">
                                            <i className="icon-search4 text-size-base"></i>
                                        </div>
                                    </div>
                                </div>

                            </fieldset>
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab4">
                            Developing
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab5">
                            Developing
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab6">
                            Developing
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab7">
                            Developing
                        </div>
                        <div className="tab-pane flipInX" id="bottom-tab8">
                            Developing
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

export default connect(mapStateToProps)(Source_panel_container)
