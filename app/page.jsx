import Image from "next/image";
import image from '../public/image/logo.png'
import btn1 from "../public/image/twitter.png"; 
import btn2 from "/public/image/linked.png";
import btn3 from "/public/image/medium.png";
import banner from "../public/image/hero.png"; 
import cardImg from '../public/image/Group 272.png'
import cardImgTwo from '../public/image/Group 271.png'

export default function Home() {
  return (
   <>
              <header className="header">
  <div className="container" >
    <nav className="nav">
    <div className="nav__log">
    <h1>sad zeppelins</h1>
     <Image
     src={image}
     />
    </div>
<ul className="header__ul">
  <li className="header__li">
    <select name="Uzb" >
      <option value="">Eng</option>
      <option value="">Rus</option>
    </select>
  </li>
  <li className="header__li"><a href="">PORTFOLIO</a></li>
  <li className="header__li"><a href="">BLOG</a></li>
  <li className="header__li"><a href="">CV</a></li>
  <li className="header__li"><a href="">STORE</a></li>
  <li className="header__li"><a href="">FREELANCE</a></li>
  <li className="header__li"><a href="">ABOUT ME</a></li>
  <li className="header__li"><a href="">CONTACT</a></li>
</ul>
    
    </nav>
  </div>
</header>
<div className="sectionOne">
    <div className="container wrap">
      <div className="oneLeft">
        <h1>Blog Posts</h1>
        <h2>I think so, this is it. </h2>
        <p>Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
        <div className="button__group">
          <Image src={btn1}/>
          <Image src={btn2}/>
          <Image src={btn3}/>
        </div>
      </div>
      <div className="oneRight">
        <Image src={banner}/>
      </div>
    </div>
  </div>
  <div className="api">
    <div className="container">
      <nav className="api__nav">
        <ul>
          <li>All</li>
          <li>UI Design</li>
          <li>UX Design</li>
          <li>Product Design</li>
          <li>Articles</li>
          <li>Tutorials</li>
          <li>News</li>
        </ul>
      </nav>
    </div>
  </div>
  <div className="cardParent">
    <div className="container wra">
    <div className="card">
     <a href="/Single">   <Image style={{width:"590px",height:"618px"}} src={cardImgTwo}/></a>
    </div>
    <div className="card">

    <a href="/Single">
    <Image style={{width:"590px",height:"618px"}} src={cardImg}/>
    </a>

        </div>
        <div className="card">
    
    <a href="/Single">
    <Image style={{width:"590px",height:"618px"}} src={cardImgTwo}/>
    </a>
        
        </div>
        <div className="card">
   
    <a href="/Single">
    <Image style={{width:"590px",height:"618px"}} src={cardImg}/>
    </a>
        
        </div>
        <div className="card">

    <a href="/Single">
    <Image style={{width:"590px",height:"618px"}} src={cardImgTwo}/>
    </a>
        
        </div>
        <div className="card">
    
    <a href="/Single">
    <Image style={{width:"590px",height:"618px"}} src={cardImg}/>
    </a>
        
        </div>
    </div>
  </div>
   </>
  );
}
