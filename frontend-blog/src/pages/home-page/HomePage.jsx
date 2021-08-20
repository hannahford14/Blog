import React, {Component} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Blog from '../../components/blog/Blog'
import './HomePage.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client';
import {
  GET_BLOGS_FOR_HOME
} from '../../graphql/queries';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

class HomePage extends Component {
  constructor(props){
    super(props);

    this.state = {
      blogPost: [],
      featurePost: []
    }
  }

  async componentDidMount(){
    let result = await client.query({
      query: GET_BLOGS_FOR_HOME
    }); 
    
    let blogPosts = result.data.getBlogsForHome.slice(0, 9);
    let featurePosts = result.data.getBlogsForHome.slice(9, 12);

    this.setState({
      blogPost: blogPosts,
      featurePost: featurePosts
    });
  }

  render(){
    return (
      <div>
        {/* Header */}
        <header id="header" className="shadow bg-light">
          <Navbar/>
        </header>
        {/* Header */}
        
        {/*Main Site*/}
        <main id="site-main">
        {/*BLog Post Section*/}
        <div className="container">
          <section id="posts">
            <ResponsiveMasonry
              columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
              <Masonry>      
                {
                  Object.values(this.state.blogPost).map((key) => {
                    return(
                      <Blog
                        key={`${key.title}-home-page`}
                        title={key.title}
                        image={key.image}
                        date={key.date}
                        numComments={key.comments} 
                      />
                    );
                  })
                }
              </Masonry>
            </ResponsiveMasonry>
            <div className="container">
              <div className="text-center">
                
              </div>
            </div>
          </section>
        </div>
        {/* BLog Post Section*/}
        </main>
        {/*Main Site*/} 
        <Footer
          featured={this.state.featurePost}
        /> 
      </div>
    );
  }
}

export default HomePage;
