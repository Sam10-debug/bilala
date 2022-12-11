import React from 'react'
import img1 from "../image/plans_3.png"

const Second = () => {
  return (
	<section className="flex w-4/5 mx-auto flex-col md:flex-row">
		<section className="my-4 md:my-0">
			<h3 className="about font-bold pb-[23px] text-[24px] ">About Us</h3>
			<p className="mb-8 w-4/5">Undoubtedly the most important advantage of the capitalfund platform is the accessibility of the financing program. We are always open to all types of investors, despite the nationality, their country of residence from their social status.</p>
			<p className="mb-[45px]">Our investment plans, developed by the team of capitalfund.ltd, offer you the most beneficial terms for arranging your own source of passive income.. The minimum deposit amount of our platform are only $ 30, which is much more acceptable than any other confidence in the current market.</p>
			<button className="btn text-white hero-btn px-8 py-4 mx-2">JOIN MORE</button>
		</section>
		<section className="">
			<img src={img1} alt="" />
		</section>
	</section>
  )
}

export default Second