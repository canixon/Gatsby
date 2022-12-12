import React from 'react'
import * as heroStyles from "./hero.module.css"
import { navigate } from "gatsby"
const Header = () => {
    return (
        <header className={heroStyles.hero}>
            <div className={heroStyles.heroContainer}>
                <div className={heroStyles.heroInfo}>
                <h1>Christopher Nixon</h1>
                <p>Computer Science and Pentesting</p>
                <button className='heroButton' onClick={()=>{navigate("/about")}}>How we can help</button>
                </div>
            </div>
        </header>
        )
    
    }