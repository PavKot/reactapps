import './App.css';
import { About } from './components/about/about';
import { Categories } from './components/categories/categories';
import { Counts } from './components/counts/counts';
import Home from './components/home/home';
import { Navbar } from './components/navbar/navbar';
import { SpecialNFT } from './components/specialnft/specialnft';
import React, {useState} from 'react';
import nftitems from './components/categories/data';
import { CreateYourNft } from './components/createyour/createyour';
import { Footer } from './components/footer/footer';

const allCategories = ['all collection', ...new Set(nftitems.map((item) => item.category))];

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(nftitems);

  const filterItems = (category) =>{
    if(category === 'all collection'){
      setMenuItems(nftitems)
    }
    const newNftItems = nftitems.filter((item) => item.category === category);
    setMenuItems(newNftItems);
  };

  return (
      <>
        <Navbar/>
        <Home/>
        <Counts/>
        <About/>
        <SpecialNFT items={menuItems}/>
        <CreateYourNft/>
        <Footer/>
      </>
  );
}

export default App;
