import * as React from 'react'
import { Link } from 'gatsby'
import "../components/index.css"
import { navigate } from "gatsby"

const Index = () => {
	return (
	<header className='hero'>
		<div>
			<div className='heroInfo'>
			<h1>Christopher Nixon</h1>
			<p>Computer Science and Pentesting</p>
			<button className='heroButton' onClick={()=>{navigate("/about")}}>How we can help</button>
			</div>
		</div>
	</header>
	);

}
export default Index