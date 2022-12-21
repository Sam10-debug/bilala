import {useEffect,useState} from "react"

import React from 'react'

const Back = () => {
	const [back,setBack]= useState(false)

	useEffect(()=>{
		window.addEventListener("scroll",()=>{
			if(window.scrollY>100){
				setBack(true)
			}else{
				setBack(false)
			}
		})
	},[])
	const scrollup=()=>{
		window.scrollTo({
			top:0,
			behavior:"smooth"
		})
	}
  return (
	<div className="">
		{back&&(<button onClick={scrollup} style={{
			position:"fixed",
			bottom:"50px",
			height:"50px",
			width:"50px",
			right:"10px",
			fontSize:"20px",
			backgroundColor:"darkBlue",
			borderRadius:"50%",
			display:"flex",
			justifyContent:"center",
			alignItems:"center",
			color:"white"
		}}>^</button>)}
	</div>
  )
}

export default Back