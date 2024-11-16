import React from 'react'
import "../footer/Footer.css"
export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="logo">
                <img src="../images/logo-white.png" alt="white-logo" />
                <p>One Medical devices Market Places</p>
            </div>

            <div className="right-footer">
                <div className="first-footer">
                    <p>Platform</p>
                    <ul>
                        <li><a href="">Sell on 1MDM</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Our story</a></li>
                        <li><a href="">carrers</a></li>
                        <li><a href="">blog</a></li>
                        <li><a href="">Brands</a></li>
                    </ul>
                </div>
                <div className="sec-footer">
                    <p>Press Room</p>
                    <ul><li><a href="">image &B-roll</a></li></ul>
                    <p>Policies</p>
                    <ul>
                        <li><a href="">Terms & service</a></li>
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Delivery information</a></li>
                    </ul>
                </div>
                <div className="third-footer">
                    <p>Reach Us</p>
                    <ul>
                        <li><a href="">Corporate Information</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
