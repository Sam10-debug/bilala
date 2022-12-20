import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const HeroSection = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
  return (
	<section className="hero-section md:h-[730px] relative flex md:py-20  items-center  flex-col">
		<section className="">
			<h1 className="text-[28px] px-2 md:px-0 md:text-[48px] text-center font-[400] text-white" data-aos="fade-down">A NEW WAY TO <br /> <span className="  font-bold text-[32px] md:text-[56px]">INVEST IN CRYPTOMINING</span></h1>
			<p className=" text-[22px] leading-[33px] px-2 md:px-0 text-center md:w-[70%] mx-auto text-white  py-[35px]" data-aos="fade-up">It is super simple - Your mining equipment is already configured and running.
			As soon as you have created your account, you can start investing and get profits!</p>
			<div className="flex pb-6 px-2 justify-center md:px-0">
			<button className=" text-white hero-btn px-8 py-4 mx-2">OPEN AN ACCOUNT</button>
			<button className=" text-white hero-btn px-8 py-4 mx-2">OUR OFFERS</button>
			</div>
		</section>
		<section className=" md:relative md:bottom-[-5%] text-white flex flex-col md:flex-row md:w-4/5 justify-between">
			<div className="p-4 shadow-xl md:h-[400px] mb-2 md:mb-0 md:mr-2 first " data-aos="fade-right">
				<h2 className=" text-[25px] font-[300] leading-[30px]">Identity<br />  <span className=" font-bold leading-[33px] text-[28px]">WHO WE ARE</span></h2>
				<p className="my-2">The story of a capitalfund.ltd began at the end of 2014. Our founders knew each other with the same platform to buy and sell Bitcoins. They were fascinated by the technology and wanted to build their own firm, just to get all their friends also wanted to participate.
				</p>
				<p className="">They invented the idea of mining as a service and built the first mining farm. Since our foundation we have grown very and much, but one thing remains constant: We are all strong believers in the future of digital currencies, and we love to be part of this growing community.</p>
		
			</div>
			<div className="p-4 shadow-xl md:h-[400px] mt-2 md:mt-0 md:ml-2 second  " data-aos="fade-left">
				<h2 className="text-[25px] font-[300] leading-[30px]">Vision & Mission <br />  <span className=" font-bold leading-[33px] text-[28px]">MAKE MINING ACCESSIBLE TO ALL</span></h2>
				<p className="my-2">capitalfund.ltd is one of the world's leading providers in the world by offering cryptocurrency mining capacities in each area - for new arrivals, interested home miners and large investors. Our mission is to make acquiring cryptocurrencies easy and fast for everyone.</p>
				<p className="">We offer a multi-algorithm service, a multi-coin cloud mining with the latest technology - without any pool fees. The ultimate goal of our existence is to make cryptocurrency mining an easy, smart and rewarding experience for all.</p>
				
			</div>
			
		</section>
	</section>
  )
}

export default HeroSection