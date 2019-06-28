import React from 'react';
import ReactDOM from 'react-dom';
import './Style/css/index.css';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './Reducers'
import middleware from './Middlewares'


const store = createStore(reducer , middleware)

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, 
                document.getElementById('root'));
