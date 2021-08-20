import React, {Component} from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Blog from '../../components/blog/Blog'
import './HomePage.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import img1 from '../../photos/jacket.jpg'; 
import img2 from '../../photos/jean.jpg'; 
import img3 from '../../photos/leather.jpg'; 
import img4 from '../../photos/pink.jpg'; 
import img5 from '../../photos/green.jpg'; 
import img6 from '../../photos/red.jpg'; 
import img7 from '../../photos/blue.jpg'; 
import img8 from '../../photos/fun.jpg'; 
import img9 from '../../photos/orange.jpg'; 
import img10 from '../../photos/78366a685a7c837558c3110ec21602bc.jpg'; 
import img11 from '../../photos/bfaf36259d14ed9b3bb769e6e95f8230.jpg'; 
import img12 from '../../photos/e8d93757ac2f72824962ead827f8d6bb.jpg'; 
import img13 from '../../photos/9ef2c4bd744f6aebdcfaafdd18373f59.jpg'; 
import img14 from '../../photos/4c7d1c7bb063f19f2083086e2e7392bb.jpg'; 
import img15 from '../../photos/hair.jpg'; 
import img16 from '../../photos/decor.jpg'; 
import img17 from '../../photos/makeup.jpg'; 

class HomePage extends Component {
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
                <Blog
                  image={img1}
                  description="This is a description for my first blog!"
                  date="Wed 05, 2021"
                  comment={10}
                />
                <Blog
                  image={img2}
                  description="This is a description for my second blog!"
                  date="Wed 05, 2021"
                  comment={5}
                />
                <Blog
                  image={img3}
                  description="This is a description for my third blog!"
                  date="Wed 05, 2021"
                  comment={8}
                />
                <Blog
                  image={img4}
                  description="This is a description for my fourth blog!"
                  date="Wed 05, 2021"
                  comment={3}
                />
                <Blog
                  image={img5}
                  description="This is a description for my fifth blog!"
                  date="Wed 05, 2021"
                  comment={5}
                />
                <Blog
                  image={img6}
                  description="This is a description for my sixth blog!"
                  date="Wed 05, 2021"
                  comment={1}
                />
                <Blog
                  image={img7}
                  description="This is a description for my seventh blog!"
                  date="Wed 05, 2021"
                  comment={9}
                />
                <Blog
                  image={img8}
                  description="This is a description for my eighth blog!"
                  date="Wed 05, 2021"
                  comment={5}
                />
                <Blog
                  image={img9}
                  description="This is a description for my ninth blog!"
                  date="Wed 05, 2021"
                  comment={2}
                />
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

export default HomePage;
