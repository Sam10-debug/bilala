import React from 'react'

const Footer = () => {
  return (
	<footer className="mt-4 flex flex-col  md:flex-row pl-4 justify-between md:px-[10%] py-8">
		<div className="ml-2 md:ml-0 ">
			<p className="">Terms and Conditions | Privacy Policy | &copy;2020 investments. All rights reserved </p>
			
		</div>
		<ul className="flex text-[12px] mt-4 md:text-[16px]">
				<li className="mx-2"><a href="#">Home</a></li>
				<li className="mx-2"><a href="#">About</a></li>
				<li className="mx-2"><a href="#">Services</a></li>
				<li className="mx-2"><a href="#">Team</a></li>
				<li className="mx-2"><a href="#">Pricing</a></li>
				<li className="mx-2"><a href="#">Contacts</a></li>
			</ul>
	</footer>
  )
}

export default Footer