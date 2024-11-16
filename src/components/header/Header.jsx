import React from 'react'
import "../header/Header.css"
export const Header = () => {
  return (
    <div className='header-container'>
        <div className="header-top">
            <div className="top-left">
                <h3>World's Largest Medical Equipment Market Place</h3>
            </div>
            <div className="top-right">
                <ul>
                    <li><a href="#">My accounts</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
        
        <div className="header-bottom">
            <div className="bottom-left">
                <img src="./images/1mdm-168x58.png" alt="logo" />
            </div>

            <div className="bottom-right">
                <ul>
                    <li><a href="">About us</a></li>
                    <li><a href="">Our story</a></li>
                    <li><a href="">Sell on !MDM</a></li>
                    <li><a href="">Pricing</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
