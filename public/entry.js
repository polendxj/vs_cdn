/**
 * Created by Administrator on 2016/8/3.
 */
import 'babel-core/polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import App from './containers/App'
import LoginContainer from './containers/Login'
import Developing from './containers/Developing'
import configureStore from './store/configureStore'

let store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Developing}/>
                <Route path="/Developing" component={Developing}/>
                <Route path="/login" component={LoginContainer}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('wrap')
)



