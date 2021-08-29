import React,{useState} from 'react';

const LoginBasket = () => {
    const [clicked, setClicked] = useState(false);
    return (
        <>
        {clicked?<span onClick={()=>setClicked(!clicked)}>Log Out</span>:<span onClick={()=>setClicked(!clicked)}>Log In</span>}
            <i className="shopping cart icon"></i>
            <p>0</p> 
        </>
    );
}

export default LoginBasket;
