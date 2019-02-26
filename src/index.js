import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import LoginPage from './containers/Login';
import RegPage from './containers/Reg';
import App from './app';

const client = new ApolloClient({ uri: 'http://localhost:4001' });
ReactDOM.render(
  <ApolloProvider client={client}>
    <LocaleProvider locale={zh_CN}>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/reg" component={RegPage} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </LocaleProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
