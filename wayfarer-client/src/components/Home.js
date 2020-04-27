import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import HomepageCard from './HomepageCard';
import './Home.css';

const Home = () => {
  let cardInfo =[ {
      title: "Explore new places",
      info: "From Arctic to Antartica, From America to Asia.."
  },
  {
    title: "Share Travel Tips",
    info: "From Arctic to Antartica, From America to Asia.."
  },  
  {
    title: "Make new Friends",
    info: "From Arctic to Antartica, From America to Asia.."
  } 
]
  return (
    <div className="container">
      
        <Carousel showArrows={true} >
                <div>
                    <img src="https://pix10.agoda.net/geo/city/318/1_318_02.jpg?s=1920x822"/>
                    
                </div>
                <div>
                    <img src="https://metro.co.uk/wp-content/uploads/2016/07/ad_212177409.jpg?quality=80&strip=all" />
               
                </div>
                <div>
                    <img src="https://qtxasset.com/2016-05/sanfrancisco1.jpg?d03luT2_JZoz7SlHPz83.SRgx2rFOaA5" />
                  
                </div>
            </Carousel>
            <h3>Wayfarer is your connection to the World...</h3>
            <br></br>
            
            <div className= " container">
              <div class = "row">
                <div class = "col-md">
                  <HomepageCard cardInfo={cardInfo[0]}/>
                </div>
                <div class = "col-md">
                  <HomepageCard cardInfo={cardInfo[1]}/>
                </div>
                <div class = "col-md">
                  <HomepageCard cardInfo={cardInfo[2]}/>
                </div>
              </div> 
            </div>

    </div>
  );
}

export default Home;



