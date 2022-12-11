import React, { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Nav = () => {
	useEffect(()=>{
		AOS.init({duration: 2000})
	})
	const [showNav,setShowNav]=useState(false)
	const ShowNav=()=>{
		setShowNav(!showNav)
	}
  return (
	<header className=" sticky z-50 bg-white top-0 shadow-2xl">
		<div className="md:hidden absolute right-3 top-2" onClick={ShowNav}>
			<svg width="32px" height="32px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title>70 Basic icons by Xicons.co</title><path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#6f7380"/><path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#6f7380"/><path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#6f7380"/></svg>
		</div>
		<div className="hidden mx-[12.5%] md:flex justify-between py-5">
			<div className=""><h2>LOGO</h2></div>
			<div className="flex">
				<div className=""><p className=""> 121 King Street, Melbourne , Australia </p></div>
				<div className=""><p className=""> info@example.com</p></div>
			</div>
		</div>
		<hr />
		<nav className="mx-[12.5%]  w-1/2 py-6">
			<ul className={` ${showNav?"flex":"hidden"} flex flex-col  absolute h-[200px] bg-white w-full left-0 top-[40px] md:flex-row justify-between`} data-aos="fade-down">
				<li className=""><a href="#">HOME</a></li>
				<li className=""><a href="#">ABOUT</a></li>
				<li className=""><a href="#">SERVICES</a></li>
				<li className=""><a href="#">TEAMS</a></li>
				<li className=""><a href="#">PRICING</a></li>
				<li className=""><a href="#">CONTACTS</a></li>
			</ul>
			<ul className=" hidden md:flex justify-between">
				<li className=""><a href="#">HOME</a></li>
				<li className=""><a href="#">ABOUT</a></li>
				<li className=""><a href="#">SERVICES</a></li>
				<li className=""><a href="#">TEAMS</a></li>
				<li className=""><a href="#">PRICING</a></li>
				<li className=""><a href="#">CONTACTS</a></li>
			</ul>
		</nav>
	</header>
  )
}

export default Nav