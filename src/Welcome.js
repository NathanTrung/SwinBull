import React from "react";
import './welcome.css';
import Nathan from './images/nathan.png'
import Christian from './images/kChris.png'
import Huu from './images/Huu.jpg'
import TheBull from './images/Swinbull_logo.png'
import Partner1 from './images/v1_327.png'
import Partner2 from './images/v1_329.png'
import Partner3 from './images/v1_331.png'

class Welcome extends React.Component { 
    render() { 
        return ( 

<div className="main">
<div class="wrapper bgded overlay" >
  <div id="pageintro" class="hoc clear"> 
    <div class="one_half first">
      <h1 class="uppercase"><b>SwinBull</b></h1>
      <h2 class="heading">A Brokerage you can invest in!</h2>
      <p>Start trading today! With the support of our highly experienced staff that are equipped with high-end technology we have a 99.7% sucuessful return rate with an average of 200% profits!</p>
      <p>We aim to enhance our shareholder's value by striving for the best rate of return on YOUR investment</p>
      <p><a class="btn medium inverse" href="#">Check the Market &raquo;</a></p>
    </div>
            <div class="one_half"><a href="#"><img src={TheBull} alt=""/></a></div>
    </div>
    <div class="wrapper row3">
  <main class="hoc container clear"> 
    <div class="center btmspace-50">
      <h3 class="font-x2 nospace"><b>Invest with Confidence</b></h3>
      <p class="nospace">Trading Empowers You</p>
    </div>
    <ul class="nospace group services">
      <li class="one_third first">
        <article><a href="#"><i class="fa fa-group"></i></a>
          <h6 class="heading">Community</h6>
          <p>Invest with one of the largest, creditable & efficient trading community with thousands of insights daily!&hellip;</p>
         
        </article>
      </li>
      <li class="one_third">
        <article><a href="#"><i class="fa fa-check-square"></i></a>
          <h6 class="heading">Excellance</h6>
          <p>Our platform strives to build your investment portfolio diversely on the go! With constantly updating Crypto & ASX prices &hellip;</p>
         
        </article>
      </li>
      <li class="one_third">
        <article><a href="#"><i class="fa fa-bolt"></i></a>
          <h6 class="heading">Supportive Staff</h6>
          <p>Our attentive and responsive staff will ensure all rules are adhered to ensuring of the safety of everyone's assests within the community &hellip;</p>
        </article>
      </li>
    </ul>
    <div class="clear"></div>
  </main>
</div>
    <div class="wrapper bgded overlay">
  <div class="hoc container clear"> 
    <div class="center btmspace-50">
      <h3 class="font-x2 nospace"><b>OUR PARTNERS</b></h3>
    </div>
    <ul class="nospace group elements">
      <li class="one_third first">
        <figure><img class="Profile" src={Partner1} alt=""/>
          <figcaption><a href="https:/www.asx.com.au">ASX</a></figcaption>
        </figure>
      </li>
      <li class="one_third">
        <figure><img class="Profile" src={Partner2}alt=""/>
          <figcaption><a href="https:/www.nasdaq.com">NASDAQ</a></figcaption>
        </figure>
      </li>
      <li class="one_third">
        <figure><img class="Profile"src={Partner3} alt=""/>
          <figcaption><a href="https://www.cboe.com">Cboe</a></figcaption>
        </figure>
      </li>
    </ul>
  </div>
</div>
  </div>



<div class="wrapper bgded overlay">
  <div class="hoc container clear"> 
    <div class="center btmspace-50">
      <h3 class="font-x2 nospace"><b>The Team</b></h3>
      <p class="nospace">View our team! Working together for the past 25+ years having experience in Cryptograhy...</p>
    </div>
    <ul class="nospace group elements">
      <li class="one_third first">
        <figure><img class="Profile" src={Huu} alt=""/>
          <figcaption><a href="https://github.com/Panzer-II">Huu Ti Dang<br></br>104101363</a></figcaption>
        </figure>
      </li>
      <li class="one_third">
        <figure><img class="Profile" src={Christian}alt=""/>
          <figcaption><a href="https://github.com/christiancheng15">Christian Samuel Cheng<br></br>103075742</a></figcaption>
        </figure>
      </li>
      <li class="one_third">
        <figure><img class="Profile"src={Nathan} alt=""/>
          <figcaption><a href="https://github.com/NathanTrung">Nathan Trung <br></br> 103885695</a></figcaption>
        </figure>
      </li>
    </ul>
  </div>
</div>

</div>
        );
    }
}
export default Welcome;