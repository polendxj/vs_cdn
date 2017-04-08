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

    _addDomain() {
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

    _addDomain() {
        this.props._addDomain();
    }

    render() {
        return (
            <div>
                <div style={{textAlign: "center", marginTop: "20px"}}>
                    <button type="button" className="btn btn-primary btn-xs btn-rounded"
                            onClick={this._addDomain.bind(this)}>
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
                    <button className="btn btn-primary btn-mute btn-rounded" onClick={this._addDomain.bind(this)}>立即添加
                    </button>
                </div>
            </div>
        )
    }
}

class FusionContainerRight extends Component {
    constructor(props) {
        super(props);
        this.domainType = "normal";
        this.geoCover = "china";
        this.protocol = "http";
        this.platform = "web";
        this.sourceType = "langchaoBucket";
        this.httpsPlaceholder = "参考样例:" +
        "-----BEGIN CERTIFICATE-----"+
        "MIIFDTCCA/WgAwIBAgIQJ8rA5miM0Lh963iOqTqPOjANBgkqhkiG9w0BAQsFADB4"+
        "MQswCQYDVQQGEwJJTDEWMBQGA1UEChMNU3RhcnRDb20gTHRkLjEpMCcGA1UECxMg"+
        "U3RhcnRDb20gQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxJjAkBgNVBAMTHVN0YXJ0"+
        "Q29tIENsYXNzIDEgRFYgU2VydmVyIENBMB4XDTE2MDMxNjA1MTgyOFoXDTE3MDMx"+
        "NjA1MTgyOFowFDESMBAGA1UEAwwJZGFybGluLm1lMIIBIjANBgkqhkiG9w0BAQEF"+
        "AAOCAQ8AMIIBCgKCAQEA62IMKtcGkyPDLUPsYcu464gDDE5kjOGdlSrXIv+Hr58/"+
        "I5v9vks7eGIFc5eR2X/C9J0PltDHSWeJkmuafThFeP7hd2chWbKA44zEKBov0xIb"+
        "gBKgJSPd3MFihsIB8i7z8RyHP1YYQIiVe4g7SQwxHgvNKcYd5g+DRP7TUAVS43mN"+
        "CBq04filry2MITqzLNROvrbFulsc1OlOmcHG4m1rkxgWver6cX4V7MG5MMDZKbGE"+
        "GljC4vBUvNf/GIeoGuismCQIa0xwh7eK7ZSN63sTLhAyyOuAgn1f2xwQ4m4CkKda"+
        "jcM1Vc/9jtb/0ae4G84kL3K8vdzWxnTe0kg3BEaCswIDAQABo4IB9TCCAfEwDgYD"+
        "VR0PAQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMCBggrBgEFBQcDATAJBgNV"+
        "HRMEAjAAMB0GA1UdDgQWBBROJ/n8SbSTKGaPpdjF+Ry0STCb8jAfBgNVHSMEGDAW"+
        "gBTXkU4BxLC/+Mhnk0Sc5zP6rZMMrzBvBggrBgEFBQcBAQRjMGEwJAYIKwYBBQUH"+
        "MAGGGGh0dHA6Ly9vY3NwLnN0YXJ0c3NsLmNvbTA5BggrBgEFBQcwAoYtaHR0cDov"+
        "L2FpYS5zdGFydHNzbC5jb20vY2VydHMvc2NhLnNlcnZlcjEuY3J0MDgGA1UdHwQx"+
        "MC8wLaAroCmGJ2h0dHA6Ly9jcmwuc3RhcnRzc2wuY29tL3NjYS1zZXJ2ZXIxLmNy"+
        "bDBTBgNVHREETDBKgglkYXJsaW4ubWWCEHN0YXRpYy5kYXJsaW4ubWWCDWFwaS5k"+
        "YXJsaW4ubWWCDXd3dy5kYXJsaW4ubWWCDW5ldy5kYXJsaW4ubWUwIwYDVR0SBBww"+
        "GoYYaHR0cDovL3d3dy5zdGFydHNzbC5jb20vMFAGA1UdIARJMEcwCAYGZ4EMAQIB"+
        "MDsGCysGAQQBgbU3AQIEMCwwKgYIKwYBBQUHAgEWHmh0dHA6Ly93d3cuc3RhcnRz"+
        "c2wuY29tL3BvbjljeTaNBskqhdiG9w0BAQsFAAOCAQEAdyx3PiO0Y9csDsRboOwE"+
        "cM2M83zzY1n39m4efS+lHDR0Lw/MiHcszfFjg90TDTre8qjAbFe38yNNWMWt6+EO"+
        "lGq7+mUV3CzFPTCW/m0WD+ZjhdcQfNJTNrNlOOH2IEDNR01s4jVRlAOtfy+FyXOX"+
        "tWHXGoQ7PGg4uYvC/WapyHV/Wpu0iVEI3yyI+cCgo9ww+VPOn8Q/hJdb+eZ0wTki"+
        "TEYAtTyfY9nMMmzK7luVTCEzm/SeUKL+3AML5I6P+oRUzTlz3fT2lE2TJjbu9Zw2"+
        "TY/apl6Y3/KGFWo0/7eSRzNrFucvWu545z3AJ9b3JaMWiKHL/f4AZZPmj67k3/7R"+
        "3Q=="+
        "-----END CERTIFICATE-----"
    }

    componentDidMount() {
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

    _addDomain() {
        this.props._addDomain();
    }

    domainTypeChanged(type) {
        this.domainType = type;
        if(type!="normal"){
            console.log("aa");
            $(".nav-link").css("cursor","not-allowed");
        }
        this.props._startRefresh();
    }
    geoCoverSelect(type) {
        this.geoCover = type;
        this.props._startRefresh();
    }
    protocolSelect(type){
        this.protocol = type;
        this.props._startRefresh();
    }
    platformSelect(type){
        this.platform = type;
        this.props._startRefresh();
    }
    sourceTypeSelect(type){
        if(this.domainType == "normal"){
            this.sourceType = type;
            this.props._startRefresh();
        }
    }
    render() {
        console.log(this.props.showAddDomain);
        var rightContent = "";
        var domainType = this.domainType;
        var scrollHeight = ($(window).height() - 160);
        return (
            <div>
                <div className="no-resources" style={{display: this.props.showAddDomain ? "none" : "block"}}>
                    <img src="/assets/images/vs_cdn/no-resources.png"/>
                    <p>暂无加速域名，点击按钮立即添加</p>
                    <button className="btn btn-primary btn-mute btn-rounded" onClick={this._addDomain.bind(this)}>立即添加
                    </button>
                </div>
                <div className="product-main" style={{display: this.props.showAddDomain ? "block" : "none"}}>
                    <div className="navbar-resource">
                        <div className="resource-navbar">
                            <div className="resource-nav-header">
                                <a ><img className="resource-icon" alt=""/> <strong className="ng-binding"></strong></a>
                            </div>
                            <div className="resource-menu">
                                <ul className="resource-breadcrumb">
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product-content" style={{height:scrollHeight+"px"}}>
                        <div className="resource-body">
                            <form id="createForm" name="createForm">
                                <section className="q-item">
                                    <div className="row">
                                        <div className="item-title col-md-3">域名类型</div>
                                        <div className="item-body col-md-9">
                                            <div className="clearfix">
                                                <label
                                                    className={domainType == "normal" ? "radio-btn selected" : "radio-btn"}
                                                    onClick={this.domainTypeChanged.bind(this, 'normal')}>
                                                    <input type="radio" name="domainType"
                                                           checked={domainType == "normal"}/>
                                                    <span>普通域名</span>
                                                </label>
                                                <label
                                                    className={domainType == "wildcard" ? "radio-btn selected" : "radio-btn"}
                                                    onClick={this.domainTypeChanged.bind(this, 'wildcard')}
                                                    style={{display:this.sourceType=="langchaoBucket"?"block":"none"}}>
                                                    <input type="radio" name="domainType"
                                                           checked={domainType == "wildcard"}/>
                                                    <span>泛域名</span>
                                                </label>
                                                <label
                                                    className={domainType == "pan" ? "radio-btn selected" : "radio-btn"}
                                                    onClick={this.domainTypeChanged.bind(this, 'pan')}
                                                    style={{display:this.sourceType=="langchaoBucket"?"block":"none"}}>
                                                    <input type="radio" name="domainType"
                                                           checked={domainType == "pan"}/>
                                                    <span>泛子域名</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                </section>
                                <section className="q-item">
                                    <div className="row">
                                        <div className="item-title col-md-3">加速域名</div>
                                        <div className="item-body col-md-9">
                                            <div className="item-describe">请输入您要加速的域名。注意：加速的域名请先完成在中国大陆的备案。</div>
                                            <div className="form-group form-inline">
                                                <input className="form-control" type="text"/>
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
                                <section className="q-item">
                                    <div className="row">
                                        <div className="item-title col-md-3">覆盖范围</div>
                                        <div className="item-body col-md-9">
                                            <div className="clearfix">
                                                <label
                                                    className={this.geoCover == "china" ? "radio-btn selected" : "radio-btn"}
                                                    onClick={this.geoCoverSelect.bind(this, 'china')}>
                                                    <input type="radio" name="geoCover"
                                                           checked={this.geoCover == "china"}/>
                                                    <span>中国大陆</span>
                                                </label>
                                                <label
                                                    className={this.geoCover == "foreign" ? "radio-btn selected" : "radio-btn"}
                                                    onClick={this.geoCoverSelect.bind(this, 'foreign')}>
                                                    <input type="radio" name="geoCover"
                                                           checked={this.geoCover == "foreign"}/>
                                                    <span>海外</span>
                                                </label>
                                                <label
                                                    className={this.geoCover == "global" ? "radio-btn selected" : "radio-btn"}
                                                    onClick={this.geoCoverSelect.bind(this, 'global')}>
                                                    <input type="radio" name="geoCover"
                                                           checked={this.geoCover == "global"}/>
                                                    <span>全球</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                </section>
                                <section className="q-item">
                                    <div className="row">
                                        <div className="item-title col-md-3">通信协议</div>
                                        <div className="item-body col-md-9">
                                            <div className="item-describe">HTTPS 配置最久需要一周。<br/>HTTPS 域名产生的用量不计入免费额度，具体资费请查看
                                                <a href="javascript:void(0)" target="_blank">价格和优惠。</a>
                                            </div>
                                            <div className="clearfix">
                                                <label
                                                    className={this.protocol == "http" ? "radio-btn selected" : "radio-btn"}
                                                    onClick={this.protocolSelect.bind(this, 'http')}>
                                                    <input type="radio" name="protocol"
                                                           checked={this.protocol == "http"}/>
                                                    <span>HTTP</span>
                                                </label>
                                                <label
                                                    className={this.protocol == "https" ? "radio-btn selected" : "radio-btn"}
                                                    onClick={this.protocolSelect.bind(this, 'https')}>
                                                    <input type="radio" name="protocol"
                                                           checked={this.protocol == "https"}/>
                                                    <span>HTTPS</span>
                                                </label>
                                            </div>
                                            <div style={{display:this.protocol == "https" ? "block":"none"}}>
                                                <p className="cdn-help-block cdn-help-block-width">请上传有效期大于半年的 HTTPS 证书，您还可在
                                                    <a href="">证书管理</a> 申请浪潮免费HTTPS证书</p>
                                                <div className="https-crt2">
                                                    <div className="select-crt"></div>
                                                    <div className="form-group clearfix">
                                                        <label className="pull-left cdn-label">证书内容<br/>(pem编码)</label>
                                                        <textarea className="form-control" placeholder={this.httpsPlaceholder} />
                                                    </div>
                                                    <div className="form-group clearfix">
                                                        <label className="pull-left cdn-label">私钥<br/>(pem编码)</label>
                                                        <textarea className="form-control" placeholder={this.httpsPlaceholder} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                </section>
                                <section className="q-item">
                                    <div className="row">
                                        <div className="item-title col-md-3">使用场景</div>
                                        <div className="item-body col-md-9">
                                            <div className="item-describe">针对资源的特性进行特定场景的线路优化，获得最优的加速效果。</div>
                                            <div className="clearfix">
                                                <label
                                                    className={this.platform  == "web" ? "radio-btn selected" : "radio-btn"}
                                                    onClick={this.platformSelect.bind(this, 'web')}>
                                                    <input type="radio" name="platform"
                                                           checked={this.platform  == "web"}/>
                                                    <span>图片文件大小</span>
                                                </label>
                                                <label
                                                    className={this.platform  == "download" ? "radio-btn selected" : "radio-btn"}
                                                    onClick={this.platformSelect.bind(this, 'download')}>
                                                    <input type="radio" name="platform"
                                                           checked={this.platform  == "download"}/>
                                                    <span>下载分发</span>
                                                </label>
                                                <label
                                                    className={this.platform  == "vod" ? "radio-btn selected" : "radio-btn"}
                                                    onClick={this.platformSelect.bind(this, 'vod')}>
                                                    <input type="radio" name="platform"
                                                           checked={this.platform  == "vod"}/>
                                                    <span>点播平台</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
                                </section>
                                <section className="q-item">
                                    <div className="row">
                                        <div className="item-title col-md-3">源站配置</div>
                                        <div className="item-body col-md-9">
                                            <div className="item-describe">
                                                <span style={{display:domainType == "normal"?"block":"none"}}>指定需要加速的资源。填写资源所在的域名或IP，也可以对保存在浪潮云存储上的资源创建更多的加速功能。</span>
                                                <span style={{display:domainType == "wildcard"?"block":"none"}}>泛域名暂仅支持源站在浪潮的公开存储空间。</span>
                                            </div>
                                            <div className="tab radio-tab">
                                                <ul className="cdn-nav cdn-nav-tabs">
                                                    <li className={this.sourceType=="langchaoBucket"?"sourceTypeNormal active":"sourceTypeNormal"} onClick={this.sourceTypeSelect.bind(this,"langchaoBucket")}>
                                                        <a href="javascript:void(0)" className="nav-link-normal">浪潮云存储</a>
                                                    </li>
                                                    <li className={this.sourceType=="domain"?"sourceType active":"sourceType"} onClick={this.sourceTypeSelect.bind(this,"domain")}>
                                                        <a href="javascript:void(0)" className="nav-link">源站域名</a>
                                                    </li>
                                                    <li className={this.sourceType=="ip"?"sourceType active":"sourceType"} onClick={this.sourceTypeSelect.bind(this,"ip")}>
                                                        <a href="javascript:void(0)" className="nav-link">IP地址</a>
                                                    </li>
                                                    <li className={this.sourceType=="advanced"?"sourceType active":"sourceType"} onClick={this.sourceTypeSelect.bind(this,"advanced")}>
                                                        <a href="javascript:void(0)" className="nav-link">高级设置</a>
                                                    </li>
                                                </ul>
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