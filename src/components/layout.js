import React from 'react'
import Topnav from "./topnav"
import Header from "./header"
import BottomNav from "./bottomNav"
const Layout = props => {
    return (
        <div>
            <Topnav></Topnav>
        <Header />
        {props.children}
        <BottomNav />
        </div>
    )
}
export default Layout