import React from 'react'

export default function section1() {
  return (
    <div className='section1_wrapper'>
        <div className='section1_content'>
            <div className='section1_title'>
                <h4>DESIGN ADDICTED</h4>
            </div>
            <div className='section1_header'>
                <h1>A stylish UI Kit</h1>
            </div>
            <div className='section1_description'>
                <h2>for all web creatives</h2>
            </div>
            <div className='section1_description2'>
                <p>Zero is a Webflow Ecommerce and CMS UI kit including several carefully designed page layouts.</p>
            </div>
            <div className='section1_cards'>
                <div className='card1 card'>
                    <div className='cards_logo'><img src="/images/cards_logo1.png" alt="cards logo" /></div>
                    <div className='cards_text'><p>SMOOTH<br />INTERACTIONS</p></div>
                </div>
                <div className='card2 card'>
                    <div className='cards_logo'><img src="/images/cards_logo2.png" alt="cards logo" /></div>
                    <div className='cards_text'><p>MANY<br />PAGES LAYOUT</p></div>
                </div>
                <div className='card3 card'>
                    <div className='cards_logo'><img src="/images/cards_logo3.png" alt="cards logo" /></div>
                    <div className='cards_text'><p>FULLY<br />RESPONSIVE</p></div>
                </div>
                <div className='card4 card'>
                    <div className='cards_logo'><img src="/images/cards_logo4.png" alt="cards logo" /></div>
                    <div className='cards_text'><p>FAST<br />COSTUMATION</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}
