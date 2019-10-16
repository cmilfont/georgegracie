import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Timeline from './components/timeline';
import './App.css';

import reducer from './api/reducer';

const store = createStore(
  reducer, 
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <Timeline />
      </div>
    </Provider>
  );
}

export default App;
