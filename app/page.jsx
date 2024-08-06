import Image from "next/image";


export default function Home() {
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
                <option value="tr">TR</option>
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

      <main className="w-full  flex items-center h-[700px]">
        <div className="container w-full flex items-center gap-5 m-[50px]">
          <div className="w-[50%]  flex flex-col justify-center">
            <h1 className="text-[52px] text-[#D05270] font-bold">Blog Posts</h1>
            <p className="text-[52px] text-[#424242]">I think so, this is it. </p>
            <br />
            <p className="text-[18px] text-[#4242429d]">Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
            <div className="w-[400px] flex gap-4 items-center mt-7">
              <a href="https://x.com/?lang=en"> <Image src='/twitterr.png' alt="NO" width={700} height={700} /> </a>
              <a href="https://uz.linkedin.com/"> <Image src='/linked.png' alt="NO" width={700} height={700} /> </a>
              <a href="https://medium.com/m/signin"> <Image src='/mediumm.png' alt="NO" width={700} height={700} /> </a>
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <Image src='/hero.png' alt="NO" width={500} height={500} />
          </div>
        </div>
      </main>
      <div className="catalogue mt-4">
        <div className="container w-full ">
          <ul className="flex items-center gap-6 text-[#424242] text-[18px] font-semibold">
            <li>All</li>
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Product Design</li>
            <li>Articles</li>
            <li>Tutorials</li>
            <li>News</li>
          </ul>
          <br />
          <br />
          <br />
          <div className="card-wrapper w-[90%] flex mb-[200px] mx-auto flex-wrap items-center gap-7 py-5">
            <div className="card max-w-[600px] w-[100%] h-[650px] ">
              <img className="w-full h-[400px] object-cover" src="/card1.png" alt="" />
              <div className="card-content p-5">
                <p className="text-[#424242] text-[14px]">Nov 23, 2020</p>
                <h1 className="text-[24px] mt-3 text-[#d05252] font-semibold">This way is wrong about UI Design.</h1>
                <p className="text-[#42424290]">A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. </p>
                <br />
                <a href="/singlePage" className="underline text-[#d05252] text-xl">Read More</a>
              </div>
            </div>
            <div className="card max-w-[600px] w-[100%] h-[650px] ">
              <img className="w-full h-[400px] object-cover" src="/card2.png" alt="" />
              <div className="card-content p-5">
                <p className="text-[#424242] text-[14px]">Nov 23, 2020</p>
                <h1 className="text-[24px] mt-3 text-[#d05252] font-semibold">This way is wrong about UI Design.</h1>
                <p className="text-[#42424290]">A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. </p>
                <br />
                <a href="singlePage2" className="underline text-[#d05252] text-xl">Read More</a>
              </div>
            </div>
            <div className="card max-w-[600px] w-[100%] h-[650px] ">
              <img className="w-full h-[400px] object-cover" src="/card1.png" alt="" />
              <div className="card-content p-5">
                <p className="text-[#424242] text-[14px]">Nov 23, 2020</p>
                <h1 className="text-[24px] mt-3 text-[#d05252] font-semibold">This way is wrong about UI Design.</h1>
                <p className="text-[#42424290]">A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. </p>
                <br />
                <a href="/singlePage" className="underline text-[#d05252] text-xl">Read More</a>
              </div>
            </div>
            <div className="card max-w-[600px] w-[100%] h-[650px] ">
              <img className="w-full h-[400px] object-cover" src="/card2.png" alt="" />
              <div className="card-content p-5">
                <p className="text-[#424242] text-[14px]">Nov 23, 2020</p>
                <h1 className="text-[24px] mt-3 text-[#d05252] font-semibold">This way is wrong about UI Design.</h1>
                <p className="text-[#42424290]">A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. </p>
                <br />
                <a href="singlePage2" className="underline text-[#d05252] text-xl">Read More</a>
              </div>
            </div>
            <div className="card max-w-[600px] w-[100%] h-[650px] ">
              <img className="w-full h-[400px] object-cover" src="/card1.png" alt="" />
              <div className="card-content p-5">
                <p className="text-[#424242] text-[14px]">Nov 23, 2020</p>
                <h1 className="text-[24px] mt-3 text-[#d05252] font-semibold">This way is wrong about UI Design.</h1>
                <p className="text-[#42424290]">A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. </p>
                <br />
                <a href="/singlePage" className="underline text-[#d05252] text-xl">Read More</a>
              </div>
            </div>
            <div className="card max-w-[600px] w-[100%] h-[650px] ">
              <img className="w-full h-[400px] object-cover" src="/card2.png" alt="" />
              <div className="card-content p-5">
                <p className="text-[#424242] text-[14px]">Nov 23, 2020</p>
                <h1 className="text-[24px] mt-3 text-[#d05252] font-semibold">This way is wrong about UI Design.</h1>
                <p className="text-[#42424290]">A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. </p>
                <br />
                <a href="/singlePage2" className="underline text-[#d05252] text-xl">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full h-[300px] p-8 mt-4 bg-[#F9F9F9] flex items-center justify-center">
        <img src="/footer.svg" alt="" />
      </footer>
        
    
    </>
  );
}