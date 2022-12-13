import React from 'react'
import Layout from '../components/layout'
import Card from "../components/card"
import "../components/index.css"
const Index = () => {
	return ( 
	<Layout>
	<div className="Cards">
	<h2>How we can help</h2>
	<div className="cardGroup">
	<Card 
	title="Web design"
	text="Sub title" />
	<Card
	title="Photography"
	text="photos and stuff" />
	<Card
	title="Photography"
	text="photos and stuff" />
	</div>	
	</div>	
	</Layout>
	)
}
export default Index