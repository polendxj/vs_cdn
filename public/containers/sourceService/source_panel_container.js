import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {commonRefresh} from '../../actions/Common'


export default class Source_panel_container extends Component {
    constructor(props) {
        super(props)
    }
    _startRefresh() {
        this.props.dispatch(commonRefresh())
    }
    componentDidMount(){
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
                        zIndex:"10"
                    }}>
                        <Source_panel_left />
                    </div>
                    <div style={{overflow: "hidden", height: tableHeight, padding: "20px",zIndex:"1"}}>
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

    render() {
        return (
            <div>
                <h4 className="panel-title"><i className="icon-feed"> </i> &nbsp;&nbsp;Andrew</h4>
                <div className="tabbable">
                    <ul className="nav nav-tabs nav-tabs-bottom">
                        <li className="active"><a style={{fontSize:"16px"}} href="#bottom-tab1" data-toggle="tab">空间概览</a></li>
                        <li><a style={{fontSize:"16px"}} href="#bottom-tab2" data-toggle="tab">数据统计</a></li>
                        <li><a style={{fontSize:"16px"}} href="#bottom-tab3" data-toggle="tab">内容管理</a></li>
                        <li><a style={{fontSize:"16px"}} href="#bottom-tab4" data-toggle="tab">镜像存储</a></li>
                        <li><a style={{fontSize:"16px"}} href="#bottom-tab5" data-toggle="tab">绑定域名</a></li>
                        <li><a style={{fontSize:"16px"}} href="#bottom-tab6" data-toggle="tab">样式分隔符设置</a></li>
                        <li><a style={{fontSize:"16px"}} href="#bottom-tab7" data-toggle="tab">图片样式</a></li>
                        <li><a style={{fontSize:"16px"}} href="#bottom-tab8" data-toggle="tab">空间设置</a></li>

                    </ul>

                    <div className="tab-content">
                        <div className="tab-pane active" id="bottom-tab1">
                            Developing
                        </div>
                        <div className="tab-pane" id="bottom-tab2">
                            Developing
                        </div>
                        <div className="tab-pane" id="bottom-tab3">
                            Developing
                        </div>
                        <div className="tab-pane" id="bottom-tab4">
                            Developing
                        </div>
                        <div className="tab-pane" id="bottom-tab5">
                            Developing
                        </div>
                        <div className="tab-pane" id="bottom-tab6">
                            Developing
                        </div>
                        <div className="tab-pane" id="bottom-tab7">
                            Developing
                        </div>
                        <div className="tab-pane" id="bottom-tab8">
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
