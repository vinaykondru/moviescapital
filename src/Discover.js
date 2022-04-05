import React from 'react';
import Unsplash from './Unsplash.jpg'
const Discover = () => {
    return (
        <main id='main'>
            <div className='movie'>
                <img src={Unsplash}></img>
                <div className='movie-info'>
                    <h3>movie title</h3>
                    <span className='green'>9.8</span>
                </div>
                <div className='overview'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eius possimus quis dicta provident expedita vitae illum voluptatibus! Debitis deserunt possimus ullam, temporibus,
                    ipsum labore quidem id, totam provident deleniti magnam
                </div>
            </div>

        </main>
    )
}
export default Discover;