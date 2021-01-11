import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { AddCategory } from './componets/AddCategory'
import { GifGrid } from './componets/GifGrid'




const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto'])

    //const handdleAdd = () => {
        //setCategories([...categories,'Nanatzu no Tazai'])
    //}
    
    return (
        <>
            <h2 className='animate__fadeInDownBig'>GifExpertApp</h2>
            <h3>by miguelvel8 bb</h3>
            
            <AddCategory setCategories={setCategories} categories={categories}/>           
            <hr/>
            <ol>
                {
                    categories.map(categories=> ( 
                    <GifGrid category={categories} key={categories}/>
                    ))
                }
            </ol>

        </>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
