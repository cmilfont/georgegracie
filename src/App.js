import React from 'react';

import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, compose, createStore } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';

import { makeStyles } from '@material-ui/core/styles';
import Theme from './components/theme';
import Timeline from './components/timeline';
import Header from './components/header';
import Toolbar from './components/toolbar';
import './App.css';

import createReducer from './api/reducer';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [
  routerMiddleware(history),
  sagaMiddleware,
];

const composeEnhancers = composeWithDevTools({});
const composed = composeEnhancers(applyMiddleware(...middlewares));

const reducer = createReducer(history);

const store = createStore(
  reducer, 
  composed);
//sagaMiddleware.run(sagas, firebase, graphqlClient);

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
              <Route exact path="/" render={Header} />
              <Route exact path="/lutador" render={Timeline} />
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
