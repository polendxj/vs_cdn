import React, {Component, PropTypes} from 'react'


class Source_panel_container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var tableHeight = ($(window).height() - 93);
        return (
            <div style={{height: tableHeight + 'px'}}>
                <div style={{position: "relative"}}>
                    <div style={{width: "250px",height:tableHeight, float: "left",borderRight:"thin lightgray solid"}}>
                        <Source_panel_left />
                    </div>
                    <div style={{overflow: "hidden",height:"100%",}}>
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

    render() {
        return (
            <div>
                <div style={{textAlign:"center",marginTop:"20px"}}>
                    <button type="button" className="btn btn-primary btn-xs btn-rounded" style={{color:"#1989FA",backgroundColor:"rgba(33,150,243,0.1)",borderColor:"#AAD3FE"}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;新建源站服务&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </button>
                </div>

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

            </div>
        )
    }
}


export default Source_panel_container