import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Swiper from 'swiper/bundle';


let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse"); 

toggle.addEventListener('click', function(){
  console.log(collapse); 
  collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

//with masonry 
new Masonry("#posts .grid",{
  itemSelector: '.grid-item', 
  gutter : 20
});

//swiper library initialization
new Swiper('.swiper-container', {
  direction: 'horizontal', 
  loop: true, 
  slidesPerView: 5, 
  autoplay: {
    delay:3000
  }, 

  //responsibe brakpoints
  breakpoints: {
    '@0' : {
      slidesPerView: 2
    }, 
    //888px
    '@1.00' :{
      slidesPerView: 3
    }, 
    //1110
    '@1.25' : {
      slidesPerView: 4
    }, 
    '@1.50' : {
      slidesPerView: 5
    }
  }
})

