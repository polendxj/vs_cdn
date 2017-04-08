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
                        <FusionContainerRight _addDomain={this._addDomain} showAddDomain={this.showAddDomain}/>
                    </div>
                    <div style={{clear: "both"}}></div>
                </div>

            </div>
        )
    }
}

class FusionContainerLeft extends Component {
    constructor(props) {
        super(props)
    }
    _addDomain(){
        this.props._addDomain();
    }
    render() {
        return (
            <div>
                <div style={{textAlign: "center", marginTop: "20px"}}>
                    <button type="button" className="btn btn-primary btn-xs btn-rounded">
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
        super(props)
    }
    _addDomain(){
        this.props._addDomain();
    }
    render() {
        console.log(this.props.showAddDomain);
        return (
            <div>
                <div className="no-resources">
                    <img src="/assets/images/vs_cdn/no-resources.png"/>
                    <p>暂无加速域名，点击按钮立即添加</p>
                    <button className="btn btn-primary btn-mute btn-rounded" onClick={this._addDomain.bind(this)}>立即添加</button>
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