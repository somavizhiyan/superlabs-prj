import React from 'react'
import "../section4/Section4.css"
export const Section4 = () => {
    return (
        <div className='section4-container'>
            <div className='section4-top'>
                <h2>Grow your business with a suite of tools built for you</h2>
            </div>

            <div className="section4-bottom">
                <div className="bottom-left">
                    <ul>
                        <li className='active'><p>Custom storefront</p></li>
                        <li><p>Advertising tools</p></li>
                        <li><p>Data and analytics</p></li>
                        <li><p>customers support</p></li>
                    </ul>
                </div>
                <div className="bottom-center">
                    <h3>Set up a store that showcases your brand</h3>
                    <p>Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!</p>
                </div>
                <div className="bottom-right">
                    <img src="./images/1mdm-product-1.png" alt="" />
                </div>
            </div>
        </div>
    )
}
