import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Blog from './pages/blog-page/BlogPage';
import Home from './pages/home-page/HomePage';
import Login from './pages/login-page/LoginPage';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache
} from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <Switch>
        <Route exact path="/" name="Home Page" component={Home}/> 
        <Route exact path="/blog" name="blog" component={Blog}/>
        <Route exact path="/login" name="blog" component={Login}/>
      </Switch>
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
);