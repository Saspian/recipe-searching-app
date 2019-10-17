import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ing}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ing.map(ingredients =>(
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <p>Calories : {calories}</p>
            <img src={image} alt="food"/>
        </div>
    );
}
export default Recipe;