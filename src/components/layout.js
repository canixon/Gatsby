import React from 'react'
import Topnav from "./topnav"
import Header from "./header"
import BottomNav from "./bottomNav"
import Card from './card'
const Layout = props => {
    return (
        <div>
            <Topnav></Topnav>
        <Header />
        <Card />
        {props.children}
        <BottomNav />
        </div>
    )
}
export default Layout