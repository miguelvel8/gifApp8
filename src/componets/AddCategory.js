import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories,categories}) => {
    
    const [inputValue, setinputValue] = useState('')

    const handdleInputChange= (e) => {
        setinputValue(e.target.value)
    }
    
    const handdleSubmit=(e) => {
        e.preventDefault();
        setCategories([inputValue,...categories])
        setinputValue('')
    }
    return ( 
        
        <form onSubmit={handdleSubmit}>
            
            <input
                type='text'
                value={inputValue}
                onChange={handdleInputChange}
            />

        </form>
        
    )
}
AddCategory.propTypes = {
    setCategories:PropTypes.func.isRequired
}

