import React, {Component} from 'react';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home-page/HomePage';
import BlogPage from './pages/blog-page/BlogPage';
import CreateBlog from './pages/create-blog/CreateBlog';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <BlogPage/>
      </div>
    );
  }
}

export default App;