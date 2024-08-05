import React from 'react'
import image from '../../public/image/logo.png'
import Image from "next/image";
import cardImgTwo from '../../public/image/singleImg.png'


const page = () => {
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
<div className="singPage">
    <div className="container">
        <div className="singleCard">
            <Image src={cardImgTwo} alt="" />
            <h1 className="card__tit">
            BLOG DETAILS H1
            </h1>
            <p className="card__text">
            Just like graphic design and web development, UX design trends come and go for a reason. UX is 
all about developing a better digital world for humanity. It’s a field that requires innovation, but 
that is constantly evolving. Regularly following UX design blogs can help you keep on top of 
changes in the industry, as well as develop your UX skills.

Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
successful development, along with how its usability was improved. Reading about these types of 
cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
kinds of directions your future projects should take.
Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
successful development, along with how its usability was improved. Reading about these types of 
cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
kinds of directions your future projects should take.
            </p>
            <h1 className="card__tit2">
            BLOG DETAILS H2
            </h1>
            <p className="card__text2">
            Just like graphic design and web development, UX design trends come and go for a reason. UX is 
all about developing a better digital world for humanity. It’s a field that requires innovation, but 
that is constantly evolving. Regularly following UX design blogs can help you keep on top of 
changes in the industry, as well as develop your UX skills.

Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
successful development, along with how its usability was improved. Reading about these types of 
cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
kinds of directions your future projects should take.
Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
successful development, along with how its usability was improved. Reading about these types of 
cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
kinds of directions your future projects should take.
            </p>
            <h1 className="card__tit3">
            BLOG DETAILS H3
            </h1>
            <p className="card__text3">
            Just like graphic design and web development, UX design trends come and go for a reason. UX is 
all about developing a better digital world for humanity. It’s a field that requires innovation, but 
that is constantly evolving. Regularly following UX design blogs can help you keep on top of 
changes in the industry, as well as develop your UX skills.

Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
successful development, along with how its usability was improved. Reading about these types of 
cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
kinds of directions your future projects should take.
Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
successful development, along with how its usability was improved. Reading about these types of 
cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
kinds of directions your future projects should take.
            </p>
        </div>
    </div>
</div>
    </>
  )
}

export default page