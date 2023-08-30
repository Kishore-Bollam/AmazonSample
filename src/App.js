import './App.css';
import iphone from "./assets/images/iphone.jpg"
import redmi from "./assets/images/redmi.jpg"
import smartwatch from "./assets/images/smartwatch.jpg"
import iq from "./assets/images/iq.jpg"
import oneplus from "./assets/images/oneplus.jpg"
import boat from "./assets/images/boat.jpg"
import dress1 from "./assets/images/dress1.jpg"
import dress2 from "./assets/images/dress2.jpeg"
import dress3 from "./assets/images/dress3.jpg"
import dress4 from "./assets/images/dress4.jpg"
import dress5 from "./assets/images/dress5.jpg"
import dress6 from "./assets/images/dress6.jpg"
import { BsFillSkipStartFill } from 'react-icons/bs';
import { BsFillSkipEndFill } from 'react-icons/bs';


 function App() {
  return (
    <div>
     
     <h1>AMAZON SHOPPING WEBSITE</h1>

     <div>
      <ul className="menu">
        <li>Home</li>
        <li>About-Us</li>
        <li>Courses
          <ul className="sub-menu">
            <li>Python</li>
            <li>Mern</li>
            <li>Mean</li>
            <li>Java</li>
            <li>DotNet</li>
          </ul>
        </li>
        <li>Contact-Us</li>
        <li>Registration</li>
        <li>Login</li>
      </ul>
     </div>
{/* 1st items */}
    <div className="blockbuster">
    <h2>BlockBuster Deals...!</h2>
     <div className='courses'>
     <div className='courses-item'>
      <img src={iphone}  alt='kishore'></img>
       <input type="button" value="23% off"></input>  &nbsp; 
       <span>Great Freedom Sale</span>
       <h5>$17,000.00 M.R.P</h5>
       <h6>Iphone 5G | Starting From 49999</h6>
     </div>
     <div className='courses-item'>
     <img src={redmi}  alt='kishore'></img>
     <input type="button" value=" upto 16% off"></input>    &nbsp;
     <span>Great Freedom Sale</span>
     <h5>$20,000.00 M.R.P</h5>
     <h6>Redmi 5G | Starting From 19999</h6>
   </div>
     <div className='courses-item'>
     <img src={oneplus}  alt='kishore'></img>
     <input type="button" value="upto 10% off"></input>   &nbsp; 
     <span>Great Freedom Sale</span>
     <h5>$17,999.00 M.R.P</h5>
     <h6>OnePlus Nord ce25G | Starting From 19999</h6>
    </div>
     <div className='courses-item'>
     <img src={smartwatch}  alt='kishore'></img>
     <input type="button" value="20% off"></input>  &nbsp;  
     <span>Great Freedom Sale</span>
     <h5>$7,000.00 M.R.P</h5>
     <h6>boat | Independnce Day Sale</h6>
    </div>
     <div className='courses-item'>
     <img src={iq}  alt='kishore'></img>
     <input type="button" value="upto 23% off"></input>  &nbsp;  
     <span>Great Freedom Sale</span>
     <h5>$27,000.00 M.R.P</h5>
     <h6>Iq Neo 7 pro 5G | Starting From 49999</h6>
      </div> 
      <div className='courses-item'>
     <img src={boat}  alt='kishore'></img>
     <input type="button" value=" upto 15% off"></input> &nbsp;  
     <span>Great Freedom Sale</span>
     <h5>$1,000.00 M.R.P</h5>
     <h6>Top Headests From Boat</h6>
    </div>
     </div>
    </div>
    {/* 2nd items  */}
     <div className="blockbuster">
     <h2>Minimum 50% OFF |T-shirts,Geans & more</h2>
     <div className='courses'>
     <div className='courses-item'>
      <img src={dress1}  alt='kishore'></img>
       <input type="button" value="23% off"></input>  &nbsp; 
       <span>Great Freedom Sale</span>
       <h5>$17,000.00 M.R.P</h5>
       <h6>Iphone 5G | Starting From 49999</h6>
     </div>
     <div className='courses-item'>
     <img src={dress2}  alt='kishore'></img>
     <input type="button" value=" upto 16% off"></input>    &nbsp;
     <span>Great Freedom Sale</span>
     <h5>$20,000.00 M.R.P</h5>
     <h6>Redmi 5G | Starting From 19999</h6>
   </div>
     <div className='courses-item'>
     <img src={dress3}  alt='kishore'></img>
     <input type="button" value="upto 10% off"></input>   &nbsp; 
     <span>Great Freedom Sale</span>
     <h5>$17,999.00 M.R.P</h5>
     <h6>OnePlus Nord ce25G | Starting From 19999</h6>
    </div>
     <div className='courses-item'>
     <img src={dress4}  alt='kishore'></img>
     <input type="button" value="20% off"></input>  &nbsp;  
     <span>Great Freedom Sale</span>
     <h5>$7,000.00 M.R.P</h5>
     <h6>boat | Independnce Day Sale</h6>
    </div>
     <div className='courses-item'>
     <img src={dress5}  alt='kishore'></img>
     <input type="button" value="upto 23% off"></input>  &nbsp;  
     <span>Great Freedom Sale</span>
     <h5>$27,000.00 M.R.P</h5>
     <h6>Iq Neo 7 pro 5G | Starting From 49999</h6>
      </div> 
      <div className='courses-item'>
     <img src={dress6}  alt='kishore'></img>
     <input type="button" value=" upto 15% off"></input> &nbsp;  
     <span>Great Freedom Sale</span>
     <h5>$1,000.00 M.R.P</h5>
     <h6>Top Headests From Boat</h6>
    </div>
     </div>
     </div>
     {/* 3rd items */}
    <div className="blockbuster">
    <h2>BlockBuster Deals...!</h2>
     <div className='courses'>
     <div className='courses-item'>
      <img src={iphone}  alt='kishore'></img>
       <input type="button" value="23% off"></input>  &nbsp; 
       <span>Great Freedom Sale</span>
       <h5>$17,000.00 M.R.P</h5>
       <h6>Iphone 5G | Starting From 49999</h6>
     </div>
     <div className='courses-item'>
     <img src={redmi}  alt='kishore'></img>
     <input type="button" value=" upto 16% off"></input>    &nbsp;
     <span>Great Freedom Sale</span>
     <h5>$20,000.00 M.R.P</h5>
     <h6>Redmi 5G | Starting From 19999</h6>
   </div>
     <div className='courses-item'>
     <img src={oneplus}  alt='kishore'></img>
     <input type="button" value="upto 10% off"></input>   &nbsp; 
     <span>Great Freedom Sale</span>
     <h5>$17,999.00 M.R.P</h5>
     <h6>OnePlus Nord ce25G | Starting From 19999</h6>
    </div>
     <div className='courses-item'>
     <img src={smartwatch}  alt='kishore'></img>
     <input type="button" value="20% off"></input>  &nbsp;  
     <span>Great Freedom Sale</span>
     <h5>$7,000.00 M.R.P</h5>
     <h6>boat | Independnce Day Sale</h6>
    </div>
     <div className='courses-item'>
     <img src={iq}  alt='kishore'></img>
     <input type="button" value="upto 23% off"></input>  &nbsp;  
     <span>Great Freedom Sale</span>
     <h5>$27,000.00 M.R.P</h5>
     <h6>Iq Neo 7 pro 5G | Starting From 49999</h6>
      </div> 
      <div className='courses-item'>
     <img src={boat}  alt='kishore'></img>
     <input type="button" value=" upto 15% off"></input> &nbsp;  
     <span>Great Freedom Sale</span>
     <h5>$1,000.00 M.R.P</h5>
     <h6>Top Headests From Boat</h6>
    </div>
     </div>
    </div>
     {/* pagination */}
     <div>
      <ol className="pagination">
        <li className='pagination-items'><BsFillSkipStartFill/></li>
        <li  className='pagination-items'>1</li>
        <li  className='pagination-items'>2</li>
        <li  className='pagination-items'>3</li>
        <li  className='pagination-items'>4</li>
        <li  className='pagination-items'>5</li>
        <li className='pagination-items'>6</li>
        <li className='pagination-items'>7</li>
        <li className='pagination-items'>8</li>
        <li className='pagination-items'>9</li>
        <li className='pagination-items'>10</li>
        <li className='pagination-items'>11</li>
        <li className='pagination-items'>12</li>
        <li className='pagination-items'>13</li>
        <li className='pagination-items'>14</li>
        <li className='pagination-items'>15</li>
        <li className='pagination-items'>16</li>
        <li className='pagination-items'>17</li>
        <li className='pagination-items'>18</li>
        <li className='pagination-items'>19</li>
        <li className='pagination-items'>20</li>
        <li className='pagination-items'><BsFillSkipEndFill/></li>

      </ol>
     </div>
    </div>

   
  );
}

export default App;
