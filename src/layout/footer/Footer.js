import React from 'react';
const Footer = () => {
    return (
        <footer>
            <div className='contactus'>
                <h3>Contact Us</h3>
                <p>Baku,Baku Azerbaijan<br />Tel:+99499-999-99-99<br />maxxcam@gmail.com</p>
                <div className='socialmedia'>
                    <i className='twitter icon'></i>
                    <i className='facebook icon'></i>
                    <i className='instagram icon'></i>
                </div>
            </div>
            <div className='customerservice'>
                <h3>Customer Service</h3>
                <div className='flex'>
                    <span>Contact Us {'>'}</span>
                    <p> / Shipping {'>'}</p>
                </div>
                <div className='flex'>
                    <span>Returns {'>'} </span>
                    <p> / Paymant {'&'} Warranty {'>'}</p>
                </div>
            </div>
          <p className='developer'>Created by sarvankm@code.edu.az</p>
        </footer>
    );
}

export default Footer;
