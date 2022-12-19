
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Third = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
  return (
	<section className="">
		<div className="mb-8 pl-2" data-aos="fade-up">
			<h2 className=" text-[32px] cap md:text-center">WHY CAPITALFUND?</h2>
			<p className="my-4 md:text-center text-[20px]">We are making mining accessible to everyone</p>
			<div className="flex flex-col md:flex-row px-2 justify-between w-full md:w-3/5 mx-auto">
				<p className="w-full  md:w-2/5">We're bringing together all important aspects of operating a successful cryptocurrency mining project</p>
				<p className="w-full md:w-2/5">From high efficiency data centers to a user-friendly mining device, we've got you covered</p>
			</div>
		</div>
		<div className="flex flex-col  justify-center items-center pl-2 text-center h-[250px] bg-red-400">
			<h1 className=" text-white font-bold text-[28px] md:text-[48px]" data-aos="fade-left">BECOME AN <span className="">INVESTOR</span></h1>
			<p className="text-[18px] text-white md:text-[25px] leading-[1.1] md:mb-[45px]" data-aos="fade-up">Recieve Passive income from your deposit</p>
			<button className="btm text-white hero-btn my-4  px-8 py-4 mx-2">REGISTER ACCOUNT</button></div>
	</section>
  )
}

export default Third