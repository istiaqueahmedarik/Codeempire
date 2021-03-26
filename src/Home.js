import "animate.css";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import Slider from "react-slick";
import Particles from "react-tsparticles";
import Wave from 'react-wavify';
import Typewriter from 'typewriter-effect';
import { ReactComponent as Gif } from './alone-not-css.svg';
import './alone-styles.css';
import Footer from './Footer';
import './Home.css';
import { ReactComponent as Gif4 } from './last.svg';
import { ReactComponent as Gif2 } from './secondSvg.svg';
import { ReactComponent as Gif3 } from './thirdSvg.svg';
function Home() {

const [quotes,setQuotes] = useState([])
var number = Math.floor(Math.random() * 10);  
console.log(quotes)
var text = ""
var author = ""
if(quotes.length > 0){
  text = quotes[number][1].quoteText;
  author = quotes[number][1].quoteAuthor             
}
useEffect(() => {
  
  const options = {
    method: 'GET',
    url: 'https://quote-garden.herokuapp.com/api/v3/quotes?genre=education&limit=10',
    
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
    setQuotes(Object.entries(response.data.data))
  }).catch(function (error) {
    console.error(error);
  });
  
},[])


    var settings = {
        dots: true,
        autoplay:true,
        autoplaySpeed:2000,
        focusOnSelect:true,
        
        slidesPerRow:2,
        arrows:true,
        
      };
      console.log(quotes)
    return (
        <div className="whole">
            <div className="wrapper ">
            <Particles
        id="tsparticles"
        
        options={{
          background: {
            color: {
              value: "#FFFFFF",
            },
          },
          fpsLimit: 120,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#92278C",
            },
            links: {
              color: "#92278C",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />

                <div id="home">
                
                    <div className="home_text inner-element animate__animated animate__fadeInLeft">
                    <h1><Typewriter
                    
                    options={{
                     strings: "বই সম্মন্ধে জানার এই প্লাটফর্মে আপনাকে স্বাগতম!",
                     autoStart: true,
                     
                   }}
                     /></h1>
                    
    <h5>জ্ঞান বিজ্ঞান এর এই সময়ে বই পড়ার বিকল্প নেই। তবে সময় এর জন্য তা অনেক সময় হয়ে উঠে না। আবার কোন বই ভালো তাও ঠিক করা মুশকিল। আমরা আমাদের এই প্লাটফর্মে যেমন বই এর সাজেশন আপনাকে দিব সাথে সাথে সংক্ষিপ্ত আকারে বই সম্মন্ধে জানতেও পারবেন। সাথে সাথে আপনার কোন বই এর রিভিউ ও আমাদের পাঠাতে পারেন সেটাও আমরা যুক্ত করে দিব। তো দেরি কিসের? ঘুরে আসুন বই এর এই রঙিন দুনিয়ায়। </h5>
    
                    </div>
                    
                    <Gif/>
                    
                    
                    
                </div>
                <div className="secound">
                <Wave fill='#92288C'
        paused={false}
        options={{
          height: 20,
          amplitude: 50,
          speed: 0.15,
          points: 3
        }}
  />
                <div className="secMain">
                <Gif2/>
                <Tilt
                        className="parallax-effect-glare-scale parallax-effect-glare-scale1"
                        perspective={10000}
                        
                        scale={1.02}
                    >
                        <div className="thinkText">
                        <h1>বুক রিভিউ কেন পড়বেন?  </h1><br/> 
                        <h4>বুক রিভিউ কোন একটি বই সম্মন্ধে পূর্ব জ্ঞান এবং বইটি সম্মন্ধে ধারনা দেয়। বুক রিভিউ পড়ে মুল বইটি পড়লে অধিক আগ্রহ পাওয়া যায়।</h4>
                        
                        <button className="btn-red inner-element"><a href="https://bookreviewbd.vercel.app/posts">পড়া শুরু করুন</a></button>
                    </div>
                    </Tilt>
                    
                </div>
                
                </div>
                <Wave fill='#FFFFFF'
        paused={false}
        options={{
          height: 20,
          amplitude: 50,
          speed: 0.15,
          points:3
        }}
  />
                <div className="third  animate__animated animate__fadeInLeft">
                
                <div className="thirdMain">
                
                
                <Tilt
                        className="parallax-effect-glare-scale parallax-effect-glare-scale1"
                        perspective={10000}
                        
                        scale={1.02}
                    >
                      <div className="thirdText"> 
                        <h1>আপনিও আমাদের সাথে যুক্ত হতে পারেন।</h1><br/>
                        <h4 >চাইলে আপনিও আপনার কোন প্রিয় বইয়ের রিভিউ আমাদের কাছে পাঠাতে পারেন। রিভিউ পাঠাতে চাইলে নিচের বাটন এ ক্লিক করুন।  </h4>
                        <button className="btn-red inner-element"><a href="http://m.me/shortReviewBook/" target="_blank" rel="noreferrer" >ক্লিক করুন</a></button>

                    </div>
                    </Tilt>
                    
                    <Gif3/>
                </div>
                </div>
                <div className="fourth">
                    <div className="fourthWrapper">
                        <div className="headingFourth">Top recommended books from us</div>
                        <div className="slider">
                        <Slider {...settings}>
      <div>
        <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/095c03b0b_97647.jpg" alt="book1"/>
      </div>
      <div>
      <img className="special" src="https://newsinside24.com/wp-content/uploads/2017/10/%E0%A6%86%E0%A6%B0%E0%A6%B6%E0%A6%BF%E0%A6%A8%E0%A6%97%E0%A6%B0-.jpg" alt="book2"/>
      </div>
      <div>
      <img src="https://upload.wikimedia.org/wikipedia/bn/thumb/3/3f/%E0%A6%AE%E0%A7%87%E0%A6%98_%E0%A6%AC%E0%A6%B2%E0%A7%87%E0%A6%9B%E0%A7%87_%E0%A6%AF%E0%A6%BE%E0%A6%AC_%E0%A6%AF%E0%A6%BE%E0%A6%AC_%E0%A6%89%E0%A6%AA%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8%E0%A7%87%E0%A6%B0_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A6%A6.jpeg/220px-%E0%A6%AE%E0%A7%87%E0%A6%98_%E0%A6%AC%E0%A6%B2%E0%A7%87%E0%A6%9B%E0%A7%87_%E0%A6%AF%E0%A6%BE%E0%A6%AC_%E0%A6%AF%E0%A6%BE%E0%A6%AC_%E0%A6%89%E0%A6%AA%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B8%E0%A7%87%E0%A6%B0_%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A6%A6.jpeg" alt="book3"/>
      </div>
      <div>
          <img src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/6034499d5_74920.jpg" alt="book4"/>
      </div>
      
    </Slider>
                        </div>
                    </div>
                </div>
                <div className="five">
                    <div className="fiveWrapper">
                        <div className="fiveHead">Faviourite Quotes - </div>
                        <div className="fiveImage">
                           <div className="quote"><h4>{text}</h4><h3>-{author}</h3></div>
                           
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,224C384,224,480,160,576,138.7C672,117,768,139,864,160C960,181,1056,203,1152,218.7C1248,235,1344,245,1392,250.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                    </div>
                </div>
                <div className="sixth">
                    <div className="sixthWrapper">
                    <div className="sixthmain">
                    <div className="sixthHead">আমাদের বেছে নেয়ার জন্য ধন্যবাদ ❤</div>
                    <button className="btn-red"><a href="https://bookreviewbd.vercel.app/posts">পড়া শুরু করুন</a></button>
                    </div>
                   <Gif4/>
                    </div>
                </div>

                
            </div>
            <Footer/>
        </div>
    )
}

export default Home
