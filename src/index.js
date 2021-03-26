import * as serviceWorker from './serviceWorker';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

//было (без react-redux)

// let rerenderData = (state) => {
//     ReactDOM.render(

//         <App state={state}
//             dispatch={store.dispatch.bind(store)}
//             store={store} />
//         , document.getElementById('root'));
// }

//стало (с react-redux)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

//store.subscribe(rerenderData); - было до использования redux
//стало (тем более это не нужно. перерисовка есть в методе connect)
// store.subscribe(() => {
//     rerenderData()
// });

serviceWorker.unregister();
