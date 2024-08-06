import Image from "next/image";


const page = () => {
  return (
    <>
        <nav className="w-full p-8 ">
            <div className="container flex items-center justify-between w-full p-5 ">
            <div className="flex gap-3 items-center">
                <Image src="./logo.svg" alt="no" width={250} height={250} />
                <Image src="./logo2.svg" alt="no" width={100} height={100} />
            </div>
            <ul className="flex items-center gap-[30px]">
                <li>
                <select className="">
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                    <option value="uz">UZ</option>
                </select>
                </li>
                <li>PORTFOLIO</li>
                <li>BLOG</li>
                <li>CV</li>
                <li>STORE</li>
                <li>FREELANCE</li>
                <li>ABOUT ME</li>
                <li>CONTACT</li>
            </ul>
            </div>
        </nav>
        <main className="container w-full flex flex-col items-center">
            <div className="w-full justify-center flex items-center">
                <Image className="mt-16 object-cover w-full h-[800px]" src='/card2.png' alt="NO" width={1000} height={800} />
            </div>
            <div className="w-full post1">
                <h1 className="mt-16 text-2xl text-[#3A0CA3] font-semibold">BLOG DETAILS H1</h1>
                <br />
                <p className="text-[#424242] text-2xl">Just like graphic design and web development, UX design trends come and go for a reason. UX is 
                    all about developing a better digital world for humanity. It’s a field that requires innovation, but 
                    that is constantly evolving. Regularly following UX design blogs can help you keep on top of 
                    changes in the industry, as well as develop your UX skills. </p>
                    <p className="text-[#424242] text-2xl mt-4">
                    Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
                    successful development, along with how its usability was improved. Reading about these types of 
                    cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
                    kinds of directions your future projects should take.</p>
                    <p className="text-[#424242] text-2xl mt-4">
                    Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
                    successful development, along with how its usability was improved. Reading about these types of 
                    cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
                    kinds of directions your future projects should take.</p>
            </div>
            <div className="w-full post1">
                <h1 className="mt-16 text-2xl text-[#3A0CA3] font-semibold">BLOG DETAILS H2</h1>
                <br />
                <p className="text-[#424242] text-2xl">Just like graphic design and web development, UX design trends come and go for a reason. UX is 
                    all about developing a better digital world for humanity. It’s a field that requires innovation, but 
                    that is constantly evolving. Regularly following UX design blogs can help you keep on top of 
                    changes in the industry, as well as develop your UX skills. </p>
                    <p className="text-[#424242] text-2xl mt-4">
                    Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
                    successful development, along with how its usability was improved. Reading about these types of 
                    cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
                    kinds of directions your future projects should take.</p>
                    <p className="text-[#424242] text-2xl mt-4">
                    Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
                    successful development, along with how its usability was improved. Reading about these types of 
                    cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
                    kinds of directions your future projects should take.</p>
            </div>
            <div className="w-full post1">
                <h1 className="mt-16 text-2xl text-[#3A0CA3] font-semibold">BLOG DETAILS H3</h1>
                <br />
                <p className="text-[#424242] text-2xl">Just like graphic design and web development, UX design trends come and go for a reason. UX is 
                    all about developing a better digital world for humanity. It’s a field that requires innovation, but 
                    that is constantly evolving. Regularly following UX design blogs can help you keep on top of 
                    changes in the industry, as well as develop your UX skills. </p>
                    <p className="text-[#424242] text-2xl mt-4">
                    Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
                    successful development, along with how its usability was improved. Reading about these types of 
                    cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
                    kinds of directions your future projects should take.</p>
                    <p className="text-[#424242] text-2xl mt-4">
                    Additionally, many UX design blogs expose you to case studies detailing an app or web’s 
                    successful development, along with how its usability was improved. Reading about these types of 
                    cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the 
                    kinds of directions your future projects should take.</p>
            </div>

        </main>
        <footer className="w-full h-[300px] p-8 mt-4 bg-[#F9F9F9] flex items-center justify-center">
        <img src="/footer.svg" alt="" />
      </footer>
    
    </>
  )
}

export default page