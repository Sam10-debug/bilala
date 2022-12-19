import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Hero = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
  return (
	<section className="relative md:mb-64">
		<section className="pt-8 md:pt-56 flex flex-col justify-center items-center">
		<button className="btn text-white hero-btn px-8 py-4 mx-2 mb-4 ">READ MORE</button>
	</section>
	<section className="bg-blue-600 md:h-[300px] py-2 px-2 md:px-0">
		<h2 className="text-[22px] text-white text-center pl-8 md:pl-0 font-bold my-8">HOW DOES capitalfund.ltd MAKE BENEFITS</h2>
		<section className=" flex flex-col md:flex-row justify-center md:absolute md:items-center  md:left-[25%]">
			<div className=" bg-white text-center py-6 px-0 md:px-2 md:h-[400px]  leading-10 shadow-lg " data-aos="fade-left">
				<h4 className="text-[20px] font-semibold">20%</h4>
				<h4 className="text-[30px] font-bold">AFTER 12 HOURS</h4>
				<h4 className="text-[24px] font-semibold">MIN 30$</h4>
				<h4 className="text-[24px] font-semibold">MAX 500$</h4>
				<h4 className="text-[20px] font-semibold">TOTAL RETURN %20</h4>
				<p className="">Deposit return at the end of the term</p>
				<button className="btn text-white hero-btn px-8 my-4 py-4">INVEST NOW</button>
			</div>
			<div className=" bg-white md:mx-4 my-4 md:my-0 text-center py-4 px-0 md:px-2 md:h-[450px] shadow-lg  leading-10" data-aos="fade-up">
				<h4 className="text-[20px] font-semibold">35%</h4>
				<h4 className="text-[30px] font-bold">AFTER 24 HOURS</h4>
				<h4 className="text-[24px] font-semibold">MIN 501$</h4>
				<h4 className="text-[24px] font-semibold">MAX 1000$</h4>
				<h4 className="text-[20px] font-semibold">TOTAL RETURN %35</h4>
				<p className="">Deposit return at the end of the term</p>
				<button className="sec-btn text-white hero-btn px-8 my-4 py-4">INVEST NOW</button>
			</div>
			<div className=" bg-white text-center py-6 px-0 md:px-2 shadow-lg md:h-[400px] leading-10" data-aos="fade-right">
				<h4 className="text-[20px] font-semibold" >55%</h4>
				<h4 className="text-[30px] font-bold">AFTER 48 HOURS</h4>
				<h4 className="text-[24px] font-semibold">MIN 1001$</h4>
				<h4 className="text-[24px] font-semibold">MAX UNLIMITED</h4>
				<h4 className="text-[20px] font-semibold">TOTAL RETURN %55</h4>
				<p className="">Deposit return at the end of the term</p>
				<button className="third-btn text-white hero-btn px-8 my-4 py-4">INVEST NOW</button>
			</div>
</section>
	</section>
	
	
	</section>
  )
}

export default Hero