import img from "../image/plans_3.png"

const Hero = () => {
  return (
	<section className="pt-8 md:pt-56 flex flex-col justify-center items-center">
		<button className="btn text-white hero-btn px-8 py-4 mx-2">READ MORE</button>
		<h2 className="text-[22px] pl-8 md:pl-0 font-bold my-8">HOW DOES capitalfund.ltd MAKE BENEFITS</h2>
		<div className="  ">
			<img src={img} alt="" className="" />
		</div>
	</section>
	
  )
}

export default Hero