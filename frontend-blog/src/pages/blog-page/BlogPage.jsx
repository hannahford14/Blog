import React, {Component} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Comments from '../../components/comments/Comments';
import {
  ApolloClient,
  InMemoryCache
} from '@apollo/client';
import {
  GET_BLOGS_FOR_HOME
} from '../../graphql/queries';
import img15 from '../../photos/hair.jpg'; 
import img16 from '../../photos/decor.jpg'; 
import img17 from '../../photos/makeup.jpg'; 
import img18 from '../../photos/image1.webp'; 
import img19 from '../../photos/Avatar.jpeg'; 

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
});

class BlogPage extends Component {

  async componentDidMount(){
    let result = await client.query({
      query: GET_BLOGS_FOR_HOME
    });

    console.log(result);
  }

  submit = () => {
    console.log(document.getElementById("getCommentFName").value);
    console.log(document.getElementById("getCommentLName").value);
    console.log(document.getElementById("getCommentEmail").value);
    console.log(document.getElementById("getCommentMessage").value);
    
  }

  render(){
    return (
      <div>
        <header id="header" className="shadow bg-light">
          <Navbar/>
        </header>
        <main id="site-main">
          <section className="container">
            <article id="post">
              {/*Article Heading*/}
              <div className="headings text-center">
                <div className="category">
                  <a href="#" className="nav-link">Fashion</a>
                </div>
                <div className="title">
                  <h2 className="text-title text-dark display-1">
                    Fashion Trends for Fall 2021
                  </h2>
                </div>
                <div className="meta">
                  <a href="#" className="link display-2 text-secondary px-1">
                    <i className="fas fa-user text-primary"></i>Hannah Ford
                  </a>
                  <a href="#" className="link display-2 text-secondary px-1">
                    <i className="fas fa-clock text-primary"></i>Clock Wed 02, 2021
                  </a>
                  <a href="#" className="link display-2 text-secondary px-1">
                    <i className="fas fa-comments text-primary"></i>5
                  </a>
                </div>
              </div>

              {/* Blog Content*/}
              <div className="thumbnail mt-3">
                <img src={img18} className="thumbnail" alt="" />
              </div>
              {/*Content*/}
              <div className="content text-dark display-2 secondary-title mt-3">
                Summer isn’t quite over yet, but we’re already looking ahead to the season of cozy cashmere, plaid skirts and pumpkin spice everything. Last fall we were more than happy to wrap ourselves in sweatpants and fancy PJs while working from home, but this year we’re eager to put together outfits that are a bit more fashion forward as we slowly start incorporating more restaurant visits, office days and hangouts with friends into our schedule. Here you’ll find the top 11 fall fashion trends for fall 2021 to start shopping (and wearing) right this very second. From the return of Rachel Green as style icon to Doug Funnie’s signature piece to comfortable heels you can actually walk in, here’s everything you’ll want to add to cart for fall.
                Summer isn’t quite over yet, but we’re already looking ahead to the season of cozy cashmere, plaid skirts and pumpkin spice everything. Last fall we were more than happy to wrap ourselves in sweatpants and fancy PJs while working from home, but this year we’re eager to put together outfits that are a bit more fashion forward as we slowly start incorporating more restaurant visits, office days and hangouts with friends into our schedule. Here you’ll find the top 11 fall fashion trends for fall 2021 to start shopping (and wearing) right this very second. From the return of Rachel Green as style icon to Doug Funnie’s signature piece to comfortable heels you can actually walk in, here’s everything you’ll want to add to cart for fall.
            
              </div>
            </article>

              {/* Blog Footer*/}
              <div className="post-footer mb-3">
                <div className="post-tags d-flex flex-wrap justify-content-center">
                  <a href="#" className="nav-link btn bg-light">Travel</a>
                  <a href="#" className="nav-link btn bg-light">Lifestyle</a>
                  <a href="#" className="nav-link btn bg-light">Fashion</a>
                  <a href="#" className="nav-link btn bg-light">Travel</a>
                </div>
                <div className="post-author text-center py1">
                  <div className="author-avatar">
                    <img src={img19} className="rounded" alt="" />
                  </div>

                  <div className="author-info py-2">
                    <h3 className="text-dark">Hannah Ford</h3>
                    <p className="text-secondary secondary-title">
                      Hannah Ford is a 23-year-old fashion enthusiast from Sterling, Virginia. 
                      She has spent the past year as a technolgy risk consultant at Ernst & Young. 
                      In her free time she goes to all of the surrounding thrift stores in the city, as well
                      as researching emerging trends. Hannah plans to pursue fashion design as a part-time gig in her free time. 
                      Her current favorite trends are monochrome outfits, leather, funky patterns.

                    </p>
                    <div className="post-footer mb-3">
                      <div className="post-tags d-flex flex-wrap justify-content-center">
                        <a href="https://pt-br.facebook.com/GreysonIsMyBoo/photos" className="nav-link"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.linkedin.com/in/hannah-ford-4313a2149" className="nav-link"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/hannahford14?lang=en" className="nav-link"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/hannahford14/" className="nav-link"><i className="fab fa-instagram"></i></a>
                      </div>
                </div>
            
              </div>
              </div>
              
                
              {/* Blog Footer*/}
            
            {/*Comments*/}
            <div className="post-comments py-2 container">
              <h3 className="text-center display-1 secondary-title py-2">5 comments</h3>
              <div className="comment-details">
                <Comments  
                  firstName="John"
                  lastName = "Doe"
                  message= "This is my comment for the blog "
                  date = "Wed 03, 2021"
                />
                <Comments
                  firstName="Hannah"
                  lastName = "Ford"
                  message= "yo "
                  date = "Wed 03, 2021"
                />
                <Comments
                  firstName="Frank"s
                  lastName = "Amaya"
                  message= "This blog sucks"
                  date = "Wed 03, 2021"
                />S
                
              {/* Comment Forum*/}
              <div className="comment-form px-2 container">
                <h3 className="text-center display-1 secondary-title py-2">Leave Comment</h3>
                <div className="d-flex justify-content-between flex-wrap" >
                  <input type="text" id="getCommentFName" className="form-control" placeholder="First Name"/>
                  <input type="text" id="getCommentLName" className="form-control" placeholder="Last Name"/>
                  <input type="email" id="getCommentEmail" className="form-control" placeholder="E-mail"/>
                </div>
                  <textarea id= "getCommentMessage" class = "form-control mt-3" placeholder="Message" rows="10"></textarea>
                  
                  <div className="text-center">
                    <button className="btn btn-primary secondary-title text-light mb-3" onClick={this.submit}>Submit</button>
                  </div>
                  
                
              </div>
            </div>
            {/* Blog Content*/}
            </div> 
            </div> 
          </section>
        </main>

        <Footer
          image1={img15}
          image2={img16}
          image3={img17}
          text1="Feature 1 post"
          text2="Feature 1 post"
          text3="Feature 1 post"
          date1="Thur 07, 2021"
          date2="Friday 08, 2021"
          date3="Thur 02, 2021"
        /> 
      </div>
    );
  }
}

export default BlogPage;
