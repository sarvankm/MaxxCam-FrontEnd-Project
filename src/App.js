import React from 'react';
import News from './components/News';
import Footer from './layout/footer/Footer';
import Header from './layout/header/Header';
import './App.css'

const App = () => {
    return (
        <div className='app'>
            <Header/>
            <News/>
            <Footer/>
        </div>
    );
}

export default App;
