import React from "react";
import './css/main.css';
import TheBull from './images/Swinbull_logo.png'
import v7 from './images/v7_118.png'
import v72 from './images/v7_125.png'

class Info extends React.Component { 
    render() { 
        return ( 

<div className="main">
<div class="wrapper bgded overlay" >
  <div id="pageintro" class="hoc clear"> 
    <div class="one_half first">
      <h1 class="uppercase"><b>WHO WE ARE</b></h1>
      <p>We are a financial services provider, with our customers at the centre of everything we do. The internet is our foundation and technology is our life blood.</p>
      <p>Our team has extensive experience in both technology and financial services and we strive to provide reliable and intelligent products and services to empower self-directed investors.</p>
      <p>Enjoy Tech. Enjoy Investing.</p>
      <p><a class="btn medium inverse" href="#">Check the Market &raquo;</a></p>
    </div>
            <div class="one_half"><a href="#"><img src={v72} alt=""/></a></div>
    </div>
    <div class="wrapper row3">
  <main class="hoc container clear"> 
    <div class="center btmspace-50">
      <h3 class="font-x2 nospace"><b>OUR VALUES</b></h3>
    </div>
    <ul class="nospace group services">
    <li class="one_third first">
        <article>
          <img src ={v7}/>
        </article>
      </li>
      <li class="one_third">
        <article>
        <i class="fa fa-check-square"></i>
          <h6 class="heading">Customer-Driven</h6>
          <p>Individuals are an important part of the market and should not be ignored. They should be empowered with better information, tools, services, opportunities, and lower costs. Respecting the investor is respecting the market.&hellip;</p>
         
        </article>
      </li>
      <li class="one_third">
        <article>
        <i class="fa fa-bolt"></i>
          <h6 class="heading">Technology-Based</h6>
          <p>Technology is the investor's best friend. It vastly expands the human's trading capabilities in terms of time, scale, and technique. Technology is the future. &hellip;</p>
         
        </article>
      </li>
    </ul>
    <div class="clear"></div>
  </main>
</div>
   
  </div>

<div class="wrapper bgded overlay">
  <div class="hoc container clear"> 
    <div class="center btmspace-50">
      <h3 class="font-x2 nospace"><b>CONTACT US</b></h3>
      <p class="nospace">View our team! Working together for the past 25+ years having experience in Cryptograhy...</p>
      
    </div>
    
  </div>
  
</div>
<div class="wrapper bgded overlay">
  <div class="hoc container clear"> 
    <div class="center btmspace-50"></div>
    <ul class="nospace group services">
    <li class="one_third first">
        <article style={{ top: "-300px" }}>
        <div class="v7_133">
                                <div class="v7_134"></div>
                                <div class="v7_135"><span class="v7_136">Address</span><span class="v7_137"><a href="https://www.google.com/maps/place/John+St,+Hawthorn+VIC+3122/data=!4m2!3m1!1s0x6ad6422d82d423fd:0xa36511772c8c752?sa=X&ved=2ahUKEwisiNLYqY6BAxU_mlYBHYTcCEgQ8gF6BAgPEAA&ved=2ahUKEwisiNLYqY6BAxU_mlYBHYTcCEgQ8gF6BAgQEAI" style={{ color : "blue", textDecoration: "underline" }}>John St, Hawthorn VIC 3122</a></span></div>
                            </div>
                            <div class="v7_138">
                                <div class="v7_139"></div>
                                <div class="v7_140"><span class="v7_141">Client Service</span><span
                                        class="v7_142">clientservices@Swinbull-au.com</span><span class="v7_143">+61 1300 794 628
                                        (Mon to Fri 8:30-19:00 AEST)</span></div>
                            </div>
                            <div class="v7_144">
                                <div class="v7_145"></div>
                                <div class="v7_146"><span class="v7_147">Email Us</span><span
                                        class="v7_148"><a href="103885695@student.swin.edu.au, 104101363@student.swin.edu.au, 103075742@student.swin.edu.au" style={{ color : "blue", textDecoration: "underline" }}>Team@swinbull.com</a></span></div>
                            </div>   
        </article>
      </li>
      <li class="one_third"> 
      <article style={{ top: "-400px", left: "-480px" }}>
      <div class="v7_149"></div>
      </article>
        </li>
      </ul>
      
                            </div>
                            </div>

</div>
        );
    }
}
export default Info;