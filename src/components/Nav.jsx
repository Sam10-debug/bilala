import React, { useState } from 'react'

const Nav = () => {
	const [showNav,setShowNav]=useState(false)
	const ShowNav=()=>{
		setShowNav(!showNav)
	}
  return (
	<header className=" sticky z-50 bg-white top-0">
		<div className="md:hidden absolute right-3" onClick={ShowNav}>
			HAMBURGER
		</div>
		<div className="hidden mx-[12.5%] md:flex justify-between py-4">
			<div className=""><h2>LOGO</h2></div>
			<div className="flex">
				<div className=""><p className=""> 121 King Street, Melbourne , Australia </p></div>
				<div className=""><p className=""> info@example.com</p></div>
			</div>
		</div>
		<hr />
		<nav className="mx-[12.5%] w-1/2 py-3">
			<ul className={` ${showNav?"flex":"hidden"} flex flex-col md:flex-row justify-between`}>
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