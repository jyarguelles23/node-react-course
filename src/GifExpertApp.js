import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import './index.css';
 const GifExpertApp = () => {

   // const categories = ['One' ,'Samurai', 'Dragon'];

    const [categorias,setCategorias]= useState(['One Punch']);

    //const handleAdd = () => {
     //  setCategorias([...categorias,'yasser']);
       //setCategorias(['yasser',...categorias]); que se inserte al principio del arreglo
      // setCategories(categorias => [...categorias,inputValue]); lo mejor para setear el state desde otro componente
   // }
    return (
        <div>
            <h2>Gif Expert App</h2>
            <hr/>
            <AddCategory setCategories={setCategorias} />
       
        <ol>
            {
                categorias.map( (category) => 
                    //return <li key={category}>{category}</li>
                    <GifGrid key={category} category={category} />
                )
               /*categories.map( (category,index) => {
                   return <li key={index}>{category}</li>
               })*/
               
            }
        </ol>
        </div>
        
    )
}
export default GifExpertApp;
