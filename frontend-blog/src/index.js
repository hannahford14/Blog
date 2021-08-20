import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { HashRouter, Route, Switch } from 'react-router-dom';
import Blog from './pages/blog-page/BlogPage';
import Home from './pages/home-page/HomePage';
import Login from './pages/login-page/LoginPage';
import CreateBlog from './pages/create-blog/CreateBlog';
import CreateAccount from './pages/create-account/CreateAccount';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000/graphql'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <HashRouter>
      <Switch>
        <Route exact path="/" name="Home Page" component={Home}/>
        <Route exact path="/blog" name="blog" component={Blog}/>
        <Route exact path="/login" name="blog" component={Login}/>
        <Route exact path="/createBlog" name="blog" component={CreateBlog}/>
        <Route exact path="/createAccount" name="blog" component={CreateAccount}/>
      </Switch>
    </HashRouter>
  </ApolloProvider>,
  document.getElementById('root')
);