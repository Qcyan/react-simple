import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/router';
// import './index.css';
// import App from './App';
import { AppContainer } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store/store';

// ReactDOM.render(<App />, document.getElementById('root'));

const render = Component => {
  ReactDOM.render(
    //绑定redux、热加载
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  )
}

render(Route);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router/router', () => {  // 当我们热更新的代码出现的时候，把App重新加载
    render(Route);
  })
}

registerServiceWorker();
