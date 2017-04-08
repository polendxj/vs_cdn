/**
 * Created by Captain on 2017/4/8.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import {commonRefresh} from '../../actions/Common';

class FusionContainer extends Component {
    constructor(props) {
        super(props);
        this._addDomain = this._addDomain.bind(this);
        this._startRefresh = this._startRefresh.bind(this);
        this.showAddDomain = false;
    }
    _startRefresh() {
        this.props.dispatch(commonRefresh())
    }
    _addDomain(){
        this.showAddDomain = true;
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
                        borderRight: "thin lightgray solid"
                    }}>
                        <FusionContainerLeft _addDomain={this._addDomain}/>
                    </div>
                    <div style={{overflow: "hidden", height: "100%",}}>
                        <FusionContainerRight _addDomain={this._addDomain} showAddDomain={this.showAddDomain}
                                              _startRefresh={this._startRefresh}/>
                    </div>
                    <div style={{clear: "both"}}></div>
                </div>

            </div>
        )
    }
}

class FusionContainerLeft extends Component {
    constructor(props) {
        super(props);
    }
    _addDomain(){
        this.props._addDomain();
    }
    render() {
        return (
            <div>
                <div style={{textAlign: "center", marginTop: "20px"}}>
                    <button type="button" className="btn btn-primary btn-xs btn-rounded" onClick={this._addDomain.bind(this)}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        新建加速域名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </button>
                </div>
                <div style={{width: "203px", paddingLeft: "45px"}}>
                    <div className="form-group has-feedback has-feedback-left"
                         style={{textAlign: "center", marginTop: "15px"}}>
                        <input type="text" className="form-control input-xs" placeholder="请输入要搜索的域名"
                               style={{borderRadius: "50px"}}/>
                        <div className="form-control-feedback">
                            <i className="icon-search4 text-size-base"></i>
                        </div>
                    </div>
                </div>
                <div className="no-resources">
                    <div>
                        <h6>暂无加速域名</h6>
                        <p>你可以点击下面按钮添加按钮创建第一个加速域名</p>
                    </div>
                    <button className="btn btn-primary btn-mute btn-rounded" onClick={this._addDomain.bind(this)}>立即添加</button>
                </div>
            </div>
        )
    }
}

class FusionContainerRight extends Component {
    constructor(props) {
        super(props);
        this.domainType = "normal";
    }
    componentDidMount(){
        $('.daterange-single').daterangepicker({
            singleDatePicker: true,
            applyClass: 'bg-slate-600',
            cancelClass: 'btn-default',
            autoUpdateInput: false,
            locale: dateLocale
        });
        $('.daterange-two').daterangepicker({
            maxDate: moment(), //最大时间
            opens: "left",
            applyClass: 'bg-slate-600',
            cancelClass: 'btn-default',
            ranges: rangesLocale,
            startDate: '2016/01/01',
            endDate: moment(),
            locale: dateLocale
        });
    }
    _addDomain(){
        this.props._addDomain();
    }
    domainTypeChanged(type){
        this.domainType = type;
        this.props._startRefresh();
    }
    render() {
        console.log(this.props.showAddDomain);
        var rightContent = "";
        var domainType = this.domainType;
        return (
            <div>
                <div className="no-resources" style={{display:this.props.showAddDomain?"none":"block"}}>
                    <img src="/assets/images/vs_cdn/no-resources.png"/>
                    <p>暂无加速域名，点击按钮立即添加</p>
                    <button className="btn btn-primary btn-mute btn-rounded" onClick={this._addDomain.bind(this)}>立即添加</button>
                </div>
                <div className="product-main" style={{display:this.props.showAddDomain?"block":"none"}}>
                    <div className="navbar-resource">
                        <div className="resource-navbar">
                            <div className="resource-nav-header">
                                <a ><img className="resource-icon" alt="" /> <strong className="ng-binding"></strong></a>
                            </div>
                            <div className="resource-menu">
                                <ul className="resource-breadcrumb">
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="resource-body">
                            <form id="createForm" name="createForm">
                                <section className="q-item">
                                    <div className="row">
                                        <div className="item-title col-md-3">域名类型</div>
                                        <div className="item-body col-md-9">
                                            <div>
                                                <label className={domainType=="normal"?"radio-btn selected":"radio-btn"} onClick={this.domainTypeChanged.bind(this,'normal')}>
                                                    <input type="radio" name="domainType" checked={domainType=="normal"} />
                                                    <span>普通域名</span>
                                                </label>
                                                <label className={domainType=="wildcard"?"radio-btn selected":"radio-btn"} onClick={this.domainTypeChanged.bind(this,'wildcard')}>
                                                    <input type="radio" name="domainType" checked={domainType=="wildcard"}/>
                                                    <span>泛域名</span>
                                                </label>
                                                <label className={domainType=="pan"?"radio-btn selected":"radio-btn"} onClick={this.domainTypeChanged.bind(this,'pan')}>
                                                    <input type="radio" name="domainType" checked={domainType=="pan"} />
                                                    <span>泛子域名</span>
                                                </label>
                                            </div>
                                            <div>
                                                <input type="text"
                                                       className="form-control daterange-two"
                                                       placeholder="选择日期"/>
                                                <input type="text"
                                                       className="form-control daterange-single"
                                                       placeholder="选择日期"/>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                </section>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {commonReducer}=state;
    return {
        refresh: commonReducer.refresh
    }
}


export default connect(mapStateToProps)(FusionContainer)