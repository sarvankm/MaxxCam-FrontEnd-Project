import React from 'react';
import LoginBasket from './LoginBasket';
import SecondPartHeader from './SecondPartHeader';
const Header = () => {
    return (
        <header>
            <div className='firstpartheader'>
            <div className='logopart'>
            <img src="assets/img/1f3c0f_22bf7c1a6d8143a69d434304ce3ae908.webp" alt="Logo" />
            <div className='textpart'>
                <div className='shopname'> 
                    <span>Maxx</span>
                    <span className='cam'>Cam</span>
                </div>
                <p>A Picture Perfect Camera Store</p>
            </div>
            </div>
            <div className='login-basket'>
            <LoginBasket/>
            </div>
            </div>
            <div className='secondpartheader'>
            <SecondPartHeader/>
            </div>
            
        </header>
    );
}

export default Header;
