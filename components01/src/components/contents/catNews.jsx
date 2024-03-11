import React from 'react';
import './catNews.scss';

const CatNews = () => {

    const imgData = {
        src1: "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        src2: "https://images.pexels.com/photos/1510543/pexels-photo-1510543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        src3: "https://images.pexels.com/photos/208773/pexels-photo-208773.jpeg?auto=compress&cs=tinysrgb&w=600",


    }
    return (
        <div className='catNews'>
            <h1>Cat News</h1>
            <div className="container">
                <div style={{
                    backgroundImage: `url(${imgData.src1})`
        
                }}>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.

                    </p>
                </div>
                <div style={{ backgroundImage: `url(${imgData.src2})` }}>


                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.

                    </p>
                </div>
                <div style={{ backgroundImage: `url(${imgData.src3})` }}>


                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.

                    </p>
                </div>
            </div>


        </div>
    );
};

export default CatNews;
