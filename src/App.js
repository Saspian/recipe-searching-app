import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
    const APP_ID = '94f36a0b';
    const APP_KEY ='d259e5cd644367a9586e7e400530df44'; 
    // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('mushroom soup');


    useEffect(()=>{
      getRecipes();
      // document.getElementById('sch') = {query};
    },[query]);
    
    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits);
    };

    const updateSearch = (e) => {
        setSearch(e.target.value);
        // console.log(search);
    }

    const getSearch = (e) =>{
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }
    // const [counter, setCounter] = useState(0);

    return(
      <div className="App">
        <form className='search-form' onSubmit={getSearch}>
          <input className='search-bar' type="text" value={search} onChange={updateSearch} placeholder='eg. mushroom soup'/>
          <button className='search-button' type='submit'>Search</button>
        </form>
        <div className='recipes'>
          {recipes.map(recipe =>(
              <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} 
              image = {recipe.recipe.image} ing={recipe.recipe.ingredients} key={recipe.recipe.label}
              />
          ))}
        </div>
        {/* <button onClick={()=>setCounter(counter+1)}>{counter}</button> */}
      </div>
    );
}

export default App;

