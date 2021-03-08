import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifsGrid } from './components/GifsGrid';

export const GifsApp = () => {

    const [categories, setCategories] = useState(['One Piece Zoro']);

    return (
        <>
            <h2>Search Gifs</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category  => (
                        <GifsGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>            
        </>
    )
}
