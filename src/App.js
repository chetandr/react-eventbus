import React from 'react';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './redux/reducer';
import Enabler from './controllers/enabler'
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(appReducer, composeWithDevTools());

const defaultComponents = [
  {
    type: 'ButtonClick',
    props: {},
    show: true,
    refresh: Math.random(),
  },
  {
    type: 'HelloWorld',
    props: {},
    show: false,
    refresh: Math.random(),
  },
  {
    type: 'JustGreen',
    props: {},
    show: false,
    refresh: Math.random(),
  },
  {
    type: 'JustBlue',
    props: {},
    show: false,
    refresh: Math.random(),
  },
]
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Enabler componentList={defaultComponents} />
      </Provider>
    </div>
  );
}

export default App;
