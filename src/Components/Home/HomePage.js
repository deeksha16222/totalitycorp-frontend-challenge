import React from 'react';
import logo from '../../Assets/Logo/logo.svg';
import marker from '../../Assets/Images/marker.svg';
import MillionStars from '../../Assets/Images/MillionStars.jpg';
import starbucksReward from '../../Assets/Images/starbucksReward.webp';
import coffee from '../../Assets/Images/coffee.jpg';
import coldcoffee from '../../Assets/Images/coldcoffee.jpg';
import socialfacebook from '../../Assets/Images/socialfacebook.svg';
import socialpinterest from '../../Assets/Images/socialpinterest.svg';
import socialinstagram from '../../Assets/Images/socialinstagram.svg';
import socialspotify from '../../Assets/Images/socialspotify.svg';
import socialtwitter from '../../Assets/Images/socialtwitter.svg';
import socialyoutube from '../../Assets/Images/socialyoutube.svg';


export default function HomePage(){
    return(
        <div>
<nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-brand">
                <a href="index.html">
                    <img src={logo} alt="Starbucks"/>
                </a>
            </div>


            <ul className="navbar-nav-left">
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Rewards</a>
                </li>
                <li>
                    <a href="#">Gift Cards</a>
                </li>
            </ul>

            <ul className="navbar-nav-right">
                <li>
                    <a href="#">
                        <img src={marker} alt=""/>
                        <span>Find a store</span>
                    </a>
                </li>
                <li><button className="btn btn-dark-outline">Sign in</button></li>
                <li><button className="btn btn-dark">Join Now</button></li>
            </ul>

            {/* Hamburger Menu */}
            <button type="button" className="hamburger" id="menu-btn">
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
        </div>
    </nav>
   
    {/*box A*/}
     
    <div className='box'>
    <div className="box-image">
        <img src={MillionStars} alt=""/>
    </div>
    <div className='box-internal'>
    <div className="box-text">
            <h2 className="text-xl">Win a thousand Stars</h2>
            <p className="text-md">
            We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in our Million Stars Giveaway and much more all week!*
            </p>
            <a href="#" className="btn btn-light-outline">Play to win</a>
    </div>
    </div>
    </div>

    {/*box B*/}

    <div className='box'>
    <div className='box-internal-two'>
    <div className="box-text-two">
            <h2 className="text-xl-two"> A new way to earn sips and trips </h2>
            <p className="text-md-two">
            Now you can link your Starbucks Rewards® + Delta SkyMiles account to get:
            </p>
            <ul className="listinternal" style={{listStyleType:'circle'}}>
            <li>
                150 Stars+500 miles when you link before 12/31
            </li> <br/>
            <li>
                Double Stars on Delta travel days
            </li> <br/>
            <li>
            1 mile per $1 spent at Starbucks(excludes tax and gratuities)**
            </li> <br/>
            </ul>
          <a href="#" className="btn btn-light-outline">Link Accounts</a>
    </div>
    </div>
    <div className="box-image">
        <img src={starbucksReward} alt=""/>
    </div>
    </div>
    
    {/*box C*/}
    <div className='box-three'>
    <div className="box-image-three">
        <img src={coffee} alt=""/>
    </div>
    <div className='box-internal-three'>
    <div className="box-text-three">
            <h2 className="text-xl-three">Perfectly pumpkin</h2>
            <p className="text-md-three">
            Savor the season with a Pumpkin Spice Latte spice or Pumpkin Cream Cold Brew
            </p>
            <a href="#" className="btn btn-three">Order now</a>
    </div>
    </div>
    </div>

   {/*box D*/}

  <div className='box-three'>
    <div className='box-internal-three'>
    <div className="box-text-three">
            <h2 className="text-xl-three">Layers of Baked apple yum</h2>
            <p className="text-md-three">
            Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso.
            </p>
            <a href="#" className="btn btn-three">Learn More</a>
    </div>
    </div>
    <div className="box-image-three">
        <img src={coldcoffee} alt=""/>
    </div>
    </div>

    <div className='bottom-text'>
    <div>
    <p>*NO PURCHASE NECESSARY. Participating stores only. Ends 10/23/22. To enter and for Official Rules, visit </p> <br/>
    <p>Entrants can receive a maximum of 2 entries per day.</p>
    </div> 
    <div className='text-condition'>
    <p className='inner-text-condition'>**Excludes taxes and gratuities. 
    At participating stores. Some restrictions apply. 150 Stars deposited after first qualifying Starbucks purchase. Flights purchased close to departure may not earn double Stars. Stars may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, visit </p>
    <a href="http://deltastarbucks.com/terms">deltastarbucks.com/terms</a>
    </div>
    </div>
    
    {/* footer done */}
    
    <footer class="bd-container">
            <div class="bd-grid">
                <div class="footer__content">
                    <h3 class="footer__title">About Us</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Our Company</a></li>
                        <li><a href="#" class="footer__link">Our Coffee</a></li>
                        <li><a href="#" class="footer__link">Stories and News</a></li>
                        <li><a href="#" class="footer__link">Customer Archive</a></li>
                        <li><a href="#" class="footer__link">Investor Relations</a></li>
                        <li><a href="#" class="footer__link">Customer Service</a></li>

                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Careers</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Culture and Values</a></li>
                        <li><a href="#" class="footer__link">Inclusion, Diversity, and Equity</a></li>
                        <li><a href="#" class="footer__link">College Achievement Plan</a></li>
                        <li><a href="#" class="footer__link">Alumni Community</a></li>
                        <li><a href="#" class="footer__link">U.S. Careers</a></li>
                        <li><a href="#" class="footer__link">International Careers</a></li>
                    </ul>
                </div>

                
                <div class="footer__content">
                    <h3 class="footer__title">Social Impact</h3>
                    <ul>
                        <li><a href="#" class="footer__link">People</a></li>
                        <li><a href="#" class="footer__link">Planet</a></li>
                        <li><a href="#" class="footer__link">Environmental and Social Impact Reporting</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">For Business Partners</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Landlord Support Center</a></li>
                        <li><a href="#" class="footer__link">Suppliers</a></li>
                        <li><a href="#" class="footer__link">Corporate Gift Card Sales</a></li>
                        <li><a href="#" class="footer__link">Office and Foodservice Coffee</a></li>
                    </ul>
                </div>

                <div class="footer__content">
                    <h3 class="footer__title">Order and Pickup</h3>
                    <ul>
                        <li><a href="#" class="footer__link">Order on App</a></li>
                        <li><a href="#" class="footer__link">Order on the Web</a></li>
                        <li><a href="#" class="footer__link">Delivery</a></li>
                        <li><a href="#" class="footer__link"> Order and Pickup Options</a></li>
                        <li><a href="#" class="footer__link">Explore and Find Coffee for Home</a></li>
                    </ul>
                </div>
            </div>
                
                
        <div className="footer-container">
            <div className="social">
                <a href="https://spotify.com">
                    <img src={socialspotify} alt="" />
                  </a>
                  <a href="https://facebook.com">
                    <img src={socialfacebook} alt="" />
                  </a>
                  <a href="https://pinterest.com">
                    <img src={socialpinterest} alt="" />
                  </a>
                  <a href="https://instagram.com">
                    <img src={socialinstagram} alt="" />
                  </a>
                  <a href="https://youtube.com">
                    <img src={socialyoutube} alt="" />
                  </a>
                  <a href="https://twitter.com">
                    <img src={socialtwitter} alt="" />
                  </a>
            </div>

            <p>© 2021 Starbucks Coffee Company. All rights reserved.</p>
       </div>
      </footer>

    </div>
    )
}
