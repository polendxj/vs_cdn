import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'
import Header from '../components/header/header'
import {changeTopMenu, changeLeftMenu} from '../actions/MenuAction'
import {login} from '../actions/LoginAction'
import MainMenu from '../components/left/menu'
import Login from './Login'
import {commonRefresh} from '../actions/Common'
import {EncodeBase64, ErrorModal, deleteCookie, Loading} from '../components/Tool/Tool'


class App extends Component {
    constructor(props) {
        super(props);
        this._changeTopMenu = this._changeTopMenu.bind(this);
        this._checkAuth = this._checkAuth.bind(this);
        this._logOut = this._logOut.bind(this);
        this._changeLang = this._changeLang.bind(this);
        this.loadingLang = 2;
        Current_Lang = CN_Lang;
    }

    _changeTopMenu(menu) {
        sessionStorage["currentMenu"] = menu;
        this.props.dispatch(changeTopMenu(menu))
    }

    _changeLang(type) {
        this.loadingLang = 1;
        switch (type) {
            case "CN":
                Current_Lang = CN_Lang;
                break;
            case "EN":
                Current_Lang = EN_Lang;
                break;
            case "KO":
                Current_Lang = KO_Lang;
                break;
        }
        this.props.dispatch(commonRefresh());

        setTimeout(function () {
            this.loadingLang = 0;
            this.props.dispatch(commonRefresh());
        }.bind(this), 1000)
    }

    _checkAuth() {
        this.props.dispatch(login({adminId: $("#userName").val(), adminPwd: EncodeBase64($("#userPassword").val())}))

    }

    _logOut() {
        sessionStorage['auth'] = "";
        sessionStorage['check'] = false;
        deleteCookie("JSESSIONID");

        browserHistory.push('/login')
    }

    componentDidUpdate() {

    }

    componentDidMount() {
        this.props.dispatch(changeTopMenu(sessionStorage["currentMenu"] ? parseInt(sessionStorage["currentMenu"]) : 0))
        node_service = document.location.origin;
        // sessionStorage['check'] = "";
        sessionStorage['timeout_time'] = 0;
        setInterval(function () {
            if (sessionStorage['check'] == true || sessionStorage['check'] == 'true') {
                fetch(alarm_history_list,
                    {
                        credentials: 'include',
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: "data=" + JSON.stringify({
                            startRow: 0,
                            endRow: 100,
                            page: '',
                            searchColumn: 'DETECT_LEVEL',
                            searchValue: 'FATAL',
                            sortColumn: 'REG_DATE',
                            orderType: 'ASC'
                        })
                    })
                    .then(response=>response.json())
                    .then(function (json) {
                        if (json && json.message == '会话过期，请重新登录...') {
                            sessionStorage['check'] = false;
                            ErrorModal('告警！', '会话过期，请重新登录系统')
                            sessionStorage['auth'] = "";
                            sessionStorage['timeout_time'] = 0;
                            deleteCookie("JSESSIONID");
                            browserHistory.push('/login');
                        } else {
                            sessionStorage['alarmCount'] = json && json.alarmHistoryList ? json && json.alarmHistoryList.length : 0;
                            $("#alarmWarning").text(sessionStorage['alarmCount'] > 99 ? '99+' : sessionStorage['alarmCount']);
                            sessionStorage['check'] = true;
                        }
                        sessionStorage['timeout_time'] = 0;
                    })
            }

        }.bind(this), 10000);

        setInterval(function () {
            console.log(sessionStorage['timeout_time']);
            if (sessionStorage['check'] == true || sessionStorage['check'] == 'true') {
                sessionStorage['timeout_time'] = parseInt(sessionStorage['timeout_time']) + 1;
                if (parseInt(sessionStorage['timeout_time']) >= timeout_time) {
                    sessionStorage['check'] = false;
                    deleteCookie("JSESSIONID");
                    ErrorModal('告警！', "服务出现异常,请稍后再试");
                    sessionStorage['auth'] = "";
                    sessionStorage['timeout_time'] = 0;
                    browserHistory.push('/login');
                }
            } else {

            }
        }, 10000)

        fetch('/jabriel/appList',
            {
                credentials: 'include',
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "data=" + JSON.stringify({
                    "startRow": 0,
                    "endRow": 50,
                    "page": "",
                    "searchColumn": "APP_ID",
                    "searchValue": "",
                    "sortColumn": "APP_ID",
                    "orderType": "ASC"
                })
            })
            .then(response=>response.json())
            .then(function (json) {

            })
        setInterval(function () {
            fetch('/jabriel/appList',
                {
                    credentials: 'include',
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: "data=" + JSON.stringify({
                        "startRow": 0,
                        "endRow": 50,
                        "page": "",
                        "searchColumn": "APP_ID",
                        "searchValue": "",
                        "sortColumn": "APP_ID",
                        "orderType": "ASC"
                    })
                })
                .then(response=>response.json())
                .then(function (json) {

                })
        }, 3600000)
    }


    render() {
        // sessionStorage['auth']=""
        const {fetching}=this.props
        var auth = sessionStorage['auth']

        var result = ""
        //if (auth) {
            if (this.loadingLang == 2 || this.loadingLang == 0) {
                result =
                    <div>
                        <Header _changeLang={this._changeLang} changeTopMenu={this._changeTopMenu}
                                _logOut={this._logOut}/>
                        <ContentPanel selected={this.props.selected} dispatch={this.props.dispatch}
                                      breadCrumbs={this.props.breadCrumbs} children={this.props.children}/>
                    </div>
            } else {
                result =
                    <div>
                        <Header _changeLang={this._changeLang} changeTopMenu={this._changeTopMenu}
                                _logOut={this._logOut}/>
                    </div>
            }


       // } else {
       //     result = <Login _checkAuth={this._checkAuth} fetching={fetching}/>
        //}
        return (
            <div>
                {result}
            </div>
        )
    }
}

class ContentPanel extends Component {
    constructor(props) {
        super(props)
        this._changeLeftMenu = this._changeLeftMenu.bind(this);
    }

    _changeLeftMenu(menuArr) {
        this.props.dispatch(changeLeftMenu(menuArr))
    }

    render() {
        const {fetching, data}=this.props
        var auth = sessionStorage['auth']
        return (
            <div className="page-container" style={{height: "2000px"}}>
                <div className="page-content" style={{backgroundColor: "white"}}>
                    <div className="sidebar sidebar-main" style={{borderRight: 'thin #F5F5F5 solid'}}>
                        <MainMenu selected={this.props.selected} _changeLeftMenu={this._changeLeftMenu}/>
                    </div>
                    <div className="content-wrapper">
                        {this.props.children}
                        <div className="footer text-muted" style={{
                            position: 'fixed',
                            bottom: '0',
                            backgroundColor: '#FCFCFC',
                            padding: '5px',
                            width: '100%'
                        }}>
                            <div style={{float: 'left', marginLeft: '14px'}}>
                                ⓒ 2016. <span style={{color: '#193153'}}>Copyright Powered</span> by <span
                                style={{color: '#193153'}}>ENTRIX Co., Ltd. All Rights Reserved.</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const {changeTopMenu, changeLeftMenu, login, commonReducer}=state
    return {
        selected: changeTopMenu.topSelected,
        breadCrumbs: changeLeftMenu.breadCrumbs,
        login: login.fetching,
        data: login.data,
        refresh: commonReducer.refresh,
    }
}

export default connect(mapStateToProps)(App)