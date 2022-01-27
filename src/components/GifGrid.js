import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const getGifs = async () => {
        const KEY = 'OkpfeRLseOMtrhFGqsxzHs6TbASjdLUU'
        const PATH = 'https://api.giphy.com/v1/gifs'
        const URL = `${PATH}/search?api_key=${KEY}&q=${ encodeURI(category)}&limit=10`
        const resp = await fetch(URL);
        const { data } = await resp.json();
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        setImages(gifs);
    }

    return (
        <>
            <div className="card-grid">
                <h3>{category}</h3>
                <ol>
                    {
                        images.map(img =>
                            <GifGridItem key={img.id} {...img} />
                        )
                    }
                </ol>
            </div>
        </>
    );
};
