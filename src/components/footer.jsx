import React from 'react'

export default function Footer() {
  return (
    <div className='footer_wrapper'>
        <div className="footer_left">

            <div className='footer_title'>
                <h2>Subscribe our newsletter</h2>
            </div>

            <div className='footer_input'>
                <input type="text" />
                <button type='button'>Subscribe</button>
            </div>
            
            <div className='footer_logo'>
                <img src="/images/footer_logo1.png" alt="" />
                <img src="/images/footer_logo2.png" alt="" />
                <img src="/images/footer_logo3.png" alt="" />
            </div>
        </div>

        <div className="footer_right">

            <div className='first_column_wrapper'>
                <div className='first_column'>

                    <div className='title'><h2>Landing Pages</h2></div>
                    <div className='column_lines'>
                        <p>Landing 1</p>
                        <p>Landing 2</p>
                        <p>Landing 3</p>
                        <p>Landing 4</p>
                    </div>
                    
                </div>

                <div className='first_column'>

                    <div className='column_title'><h2>Company</h2></div>
                    <div className='column_lines'>
                        <p>About 1</p>
                        <p>About 2</p>
                        <p>Contact 1</p>
                        <p>Contact 2</p>
                        <p>Contact 3</p>
                        <p>Team</p>
                        <p>FAQ</p>
                    </div>
                    
                </div>
            </div>

            <div className='second_column_wrapper'>

                <div className='column_title'><h2>CMS Pages</h2></div>
                <div className='column_lines'>
                    <p>Blog 1</p>
                    <p>Blog 2</p>
                    <p>Blog 3</p>
                    <p>Single Post Page</p>
                    <p>Shop 1</p>
                    <p>Shop 2</p>
                    <p>Single Product Page</p>
                    <p>Careers</p>
                    <p>Single Careers Page</p>
                    <p>Works</p>
                    <p>Single Work Page</p>
                </div>
            </div>

            <div className='third_column_wrapper'>
                
                <div className='column_title'><h2>Utility</h2></div>
                <div className='column_lines'>
                    <p>Coming Soon</p>
                    <p>Password</p>
                    <p>Privacy Policy</p>
                    <p>Terms And Conditions</p>
                    <p>404</p>
                    <p>Licensing</p>
                    <p>Style Guide</p>
                </div>

            </div>
        </div>
    </div>
  )
}
