import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { HashRouter, Route, Switch } from 'react-router-dom';
import Blog from './pages/blog-page/BlogPage';
import Home from './pages/home-page/HomePage';


const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <Switch>
        <Route exact path="/" name="Home Page" component={Home}/>
        <Route exact path="/blog" name="blog" component={Blog}/>
      </Switch>
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
);