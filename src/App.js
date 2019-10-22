import React from 'react';

import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { Route, Switch } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Theme from './components/theme';
import Timeline from './components/timeline';
import Home from './components/home';
import Toolbar from './components/toolbar';
import Login from './components/login';
import Who from './components/who';
import './App.css';

import createReducer from './api/reducer';
import sagas from './api/sagas';
import firebase from './api/firebase';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  routerMiddleware(history),
  sagaMiddleware,
];

const composeEnhancers = composeWithDevTools({});
const composed = composeEnhancers(applyMiddleware(...middlewares));

const reducer = createReducer(history);

const store = createStore(reducer, composed);
sagaMiddleware.run(sagas, firebase);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  }
});

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
       <ConnectedRouter history={history}>
        <Theme>
          <div className={classes.root}>
            <Toolbar />
            <div className="App">

            <Switch>
              <Route exact path="/" render={Home} />
              <Route exact path="/lutador" render={Timeline} />
              <Route exact path="/login" render={Login} />
              <Route exact path="/quemfoi" render={Who} />
              <Route render={() => (<div>Miss</div>)} />
            </Switch>
              
            </div>
          </div>
        </Theme>
       </ConnectedRouter>
    </Provider>
  );
}

export default App;
