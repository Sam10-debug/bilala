import img2 from "../image/why_us.jpg"
import img3 from "../image/becomei.png"

const Third = () => {
  return (
	<section className="">
		<div className=""><img src={img2} alt="" /></div>
		<div className="flex flex-col justify-center items-center h-[250px] bg-red-400">
			<h1 className=" text-white font-bold text-[32px] md:text-[48px]">BECOME AN <span className="">INVESTOR</span></h1>
			<p className="text-[18px] text-white md:text-[25px] leading-[1.1] md:mb-[45px]">Recieve Passive income from your deposit</p>
			<button className="btm text-white hero-btn my-4  px-8 py-4 mx-2">REGISTER ACCOUNT</button></div>
	</section>
  )
}

export default Third