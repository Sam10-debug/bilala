import img2 from "../image/why_us.jpg"
import img3 from "../image/becomei.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Third = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
  return (
	<section className="">
		<div className=""><img src={img2} alt="" /></div>
		<div className="flex flex-col  justify-center items-center pl-2 text-center h-[250px] bg-red-400">
			<h1 className=" text-white font-bold text-[28px] md:text-[48px]" data-aos="fade-left">BECOME AN <span className="">INVESTOR</span></h1>
			<p className="text-[18px] text-white md:text-[25px] leading-[1.1] md:mb-[45px]" data-aos="fade-up">Recieve Passive income from your deposit</p>
			<button className="btm text-white hero-btn my-4  px-8 py-4 mx-2">REGISTER ACCOUNT</button></div>
	</section>
  )
}

export default Third