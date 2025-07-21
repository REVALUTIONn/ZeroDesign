import React from 'react'

export default function section2() {
  return (
    <div className='section2_wrapper'>
        <div className='section2_photo'>
            <img src="/images/section2_photo.png" alt="section2_photo" />
        </div>
        <div className='section2_content'>
            <div className='section2_title_wrapper'>
                <h2 className='section2_title'>Zero Design</h2>
            </div>
            <div className='section2_description'>
                <p>Includes a total of 10 static pages, divided like this: 4 Landing pages, 2 About pages, 2 Contact page, 1 Team page, 1 FAQ page. In addition to these, there are Webflow CMS driven pages: Blog (in 2 variations), Shop (in 2 variations), Works and Careers. All with their respective single pages!</p>
            </div>
            <div className='section2_cards'>
                <div className='line1'>
                    <div className='card'>
                        <p>4 LANDING</p>
                    </div>
                    <div className='card'>
                        <p>2 ABOUT</p>
                    </div>
                    <div className='card'>
                        <p>3 CONTACT</p>
                    </div>
                </div> 
                <div className='line2'>
                    <div className='card'>
                        <p>3 BLOG</p>
                    </div>
                    <div className='card'>
                        <p>2 SHOP</p>
                    </div>
                </div>
                <div className='line3'>
                    <div className='card'>
                        <p>WORKS</p>
                    </div>
                    <div className='card'>
                        <p>TEAM</p>
                    </div>
                    <div className='card'>
                        <p>CAREERS</p>
                    </div>
                </div>
                <div className='line4'>
                    <div className='card'>
                        <p>FORMS</p>
                    </div>
                    <div className='card'>
                        <p>UTILITY</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
