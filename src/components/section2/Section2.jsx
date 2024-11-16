import React from 'react'
import "../section2/Section2.css"
export const Section2 = () => {
  return (
    <div className='section2-container'>
        <div className="section-2-top">
            <h2>1mdm.com is a leading ecommerce platform that helps SMEs go global</h2>
        </div>
        <div className="section2-bottom">
            <div>
                <iframe src="https://www.youtube.com/embed/TN7iJyc5Uks" frameborder="0"></iframe>
            </div>

            <div>
                <ul>
                    <li><p>Connect with millions of business buyers from around the world</p></li>
                    <li><p>Get the tools and know-how to build a successful ecommerce presence for your business.</p></li>
                    <li><p>Pocket more from each sale, with take rates as low as 0% in some cases.</p></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
