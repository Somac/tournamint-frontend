import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store'
import { Provider } from 'react-redux'
import './styles.css'
import { loadState, saveState } from './localStorage'

store.subscribe(() => {
    saveState(store.getState())
})

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>), document.getElementById('root'))
