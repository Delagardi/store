import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ErrorBoundry from './components/error-boundry';
import App from './components/app';
import { ServiceBookstore } from './services';
import store from './store';
import { ProviderBookstoreService } from './components/context-bookstore-service';
import { BrowserRouter as Router } from 'react-router-dom';

//ReactDOM.render(<App/>, document.getElementById('root'));

const serviceBookstore = new ServiceBookstore();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ProviderBookstoreService value={serviceBookstore}>
        <Router>
          <App/>
        </Router>
      </ProviderBookstoreService>
    </ErrorBoundry>
  </Provider>, document.getElementById('root')
);
