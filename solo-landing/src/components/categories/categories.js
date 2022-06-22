import React from 'react'

export const Categories = ({categories, filterItems}) => {
  return (
    <div className='specialnft-links'>
        {categories.map((category, index)=>{
            return(
                <a key={index} onClick={()=>filterItems(category)}>{category}</a>
            );

        })}
    </div>
  )
}
