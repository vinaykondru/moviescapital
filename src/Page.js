
import React, { useEffect, useState } from "react";
import axios from 'axios';
const Page = () => {
    const [posts, setPost] = useState([])
    const image_url = 'https://image.tmdb.org/t/p/w500'

    const API_KEY = 'api_key=ab17dedfe976ae126394ca0a9da2a32d'
    const BASE_URL = 'https://api.themoviedb.org/3';
    const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
    console.log(API_URL)
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ab17dedfe976ae126394ca0a9da2a32d')
            .then(res => {
                setPost(res.data)
                console.log(res.data)
            })
    }, [API_URL])

    return (
        <div className="main">
            {
                posts.map(post => {
                    return (
                        <div className='movie'>
                            <img src={image_url + post.poster_path} alt="vinay"></img>
                            <div className='movie-info'>
                                <h3>{post.title}</h3>
                                <span className='green'>{post.vote_average}</span>
                            </div>
                            <div className='overview'>
                                {post.overview}
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )

}
export default Page;

