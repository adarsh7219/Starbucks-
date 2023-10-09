
import React from 'react'
import Header from './Component/Header'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const page = () => {
  return (
    <>

      <Header />

      <div className='Home'>

        <div className='box-home-parent'>
          <div className='Home-box'>
            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85868.jpg" />
          </div>
          <div className='Home-box' id='box2'>
            <h1 className='h2'>New apple in the</h1>
            <h1 className='h12'>bunch</h1>
            <p>Introducing our Iced Apple Crisp Oatmilk <br /> Shaken Espresso with a perfectly balanced <br /> taste.</p>
            <div className='box-box'>Order now</div>
          </div>


          {/* second box */}


        </div>




      </div>
      <div className='box-home-parent'>
        <div className='Home-box'>
          <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85869.jpg" />
        </div>
        <div className='Home-box' id='box2'>
          <h1 className='h2'>Good idea, chai</h1>
          <h1 className='h12'>lover</h1>
          <p>Try the new coffee-free Iced Pumpkin Cream Chai Tea <br /> Latte, inspired by our customers. It’s fall in a cup.</p>
          <div className='box-box'>Order now</div>
        </div>

      </div>


      <div className='box-home-parent'>
        <div className='Home-box'>
          <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85870.jpg" />
        </div>
        <div className='Home-box' id='box2'>
          <h1 className='h2'>Pastry fans, rejoice</h1>
          {/* <h1 className='h12'>lover</h1> */}
          <p className='pp1'>Say hello to the new Baked Apple Croissant <br /> filled with warm apple filling.</p>
          <div className='box-box'>Order now</div>
        </div>



      </div>


      <div className='last-box'>
        <div className='last-chiled'>
          <h1>Tap into your fall routine</h1>
          <p>The Starbucks app makes pickup a breeze when you order <br /> ahead.</p>
          <div className='last-box-chiled'>
            <h3>Download now</h3>
          </div>

        </div>
        <div className='last-chiled'>
          <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-85875.jpg" />
        </div>

      </div>

      <div className='last-last-page'>
        <div className='foot-last'>
          <p>About Us</p>
          <ul>
            <li>Our Company</li>
            <li>Our Coffee</li>
            <li>Stories and News</li>
            <li>Starbucks Archive</li>
            <li>  Investor Relations  </li>
            <li>Customer Service</li>
            <li>Contact Us</li>
          </ul>
        </div>


        <div className='foot-last'>
          <p>  Careers</p>
          <ul>
            <li>Culture and Values</li>
            <li>Inclusion, Diversity, and Equity</li>
            <li>College Achievement Plan</li>
            <li>Alumni Community</li>
            <li> U.S. Careers </li>
            <li>International Careers</li>
          </ul>
        </div>


        <div className='foot-last'>
          <p>Social Impact</p>
          <ul>
            <li>People</li>
            <li>Planet</li>
            <li>Environmental and Social <br /> Impact Reporting</li>

          </ul>
        </div>


        <div className='foot-last'>
          <p>For Business Partners</p>
          <ul>
            <li>Landlord Support Center</li>
            <li>Suppliers</li>
            <li>Corporate Gift Card Sales</li>
            <li>Office and Foodservice Coffee</li>

          </ul>
        </div>





        <div className='foot-last'>
          <p> Order and Pick Up</p>
          <ul>
            <li>Order on the App</li>
            <li>Order on the Web</li>
            <li>Delivery</li>
            <li>Order and Pick Up <br /> Options</li>
            <li>  Explore and Find Coffee <br /> for Home </li>

          </ul>
        </div>


      </div>

      <div className='footer-box'></div>
      <div className='footer-last'>

        <div className='chiled-footer'>
          <TwitterIcon className='logo10' />
        </div>
        <div className='chiled-footer'>
          <FacebookIcon className='logo10' />
        </div>
        <div className='chiled-footer'>
          <InstagramIcon className='logo10' />
        </div>
        <div className='chiled-footer'>
          <YouTubeIcon className='logo10' />
        </div>
       

      </div>

      <div className='page-ll'>
        <p className='p-ll-chiled'>Privacy Notice</p>
        <p className='p-ll-chiled'>Terms of Use</p>
        <p className='p-ll-chiled'>Do Not Share My Personal Information</p>
        <p className='p-ll-chiled'>CA Supply Chain Act</p>
        <p className='p-ll-chiled'>Cookie Preferences</p>
       
      </div>
      <p className='mahadev'>© 2023 Starbucks Coffee Company. All rights reserved.</p>

    






    </>
  )
}

export default page
