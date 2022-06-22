import React, {useState} from 'react';
import { Card } from '../card/card';
import "../specialnft/specialnft.css";
import { Categories } from '../categories/categories';
import nftitems from '../categories/data';

const allCategories = ['all', ...new Set(nftitems.map((item) => item.category))];



  export const SpecialNFT = ({}) => {
  const [categories, setCategories] = useState(allCategories);
  const [nftItems, setNftItems] = useState(nftitems);

  const filterItems = (category) =>{
    if(category === 'all'){
      setNftItems(nftitems);
      return;
    }
    const newItems = nftitems.filter((item) => item.category === category);
    setNftItems(newItems);
  }

  return (
    <div className='specialnft-container'>
        <div className='specialnft-heading'>
            <h1>Special NFT item for you</h1>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <div className='cards' id="cards">
            {nftItems.map((card)=>{
              const {id, image, name, author, price, category} = card;
            return(
            <Card key={id} image={image} name={name} author={author} price={price} category={category}/>
            );

            })}
        </div>
    </div>
  )
}
