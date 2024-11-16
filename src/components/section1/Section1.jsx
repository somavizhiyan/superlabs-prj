import React from 'react'
import "../section1/Section1.css"
export const Section1 = () => {
  return (
    <div className='section1-container'>

        <div className="left-container">
            <div className="top-section">
                <h3>Sell on 1mdm.com</h3>
                <h1>Reach millions of B2B buyers globally</h1>
            </div>
            <div className="section1-buttons">
                <button className='btn'>Start selling</button>
                <button className='outline'>Chat with consultant</button>
            </div>
        </div>

        <div className="right-container">
            <ul>
                <li>
                    <h3>26,000,000</h3>
                    <p>active buyers globally</p>
                </li>
                <li>
                    <h3>400,000</h3>
                    <p>product inquiries daily</p>
                </li>
                <li>
                    <h3>200</h3>
                    <p>countries and regions represented</p>
                </li>
            </ul>
        </div>
    </div>
  )
}
