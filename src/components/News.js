import React from 'react';
const News = () => {
    return (
        <div className='news-container'>
            <div className='news-title-container'>
                <img src="assets/img/news-image.webp" alt="" />
                <div className='news-title-color'></div>
                <div className='text-container'>
                <h2>PRICE<br/>DROP!</h2>
                <h4>Up to 15% Off All<br/>Our Products!</h4>
                </div>
            </div>
            <button>Shop Now</button>
        </div>
    );
}

export default News;
