import React from 'react'
import { TRecipe } from '../type/type-element'; 
import  './rcp.css'


interface Props {
    recipe: TRecipe;
}

export const Recipe: React.FC<Props> = ({ recipe }) => {
    return (
        <div className='recipe'>
            <img src={recipe.image} />
            <div className='bloc'>
                <h1>{recipe.name}</h1>
                <p>{recipe.description}</p>
            </div>
            <div className='bloc-color'>
                <h2 className='title-bloc2'>Preparation Time</h2>
                <ul>
                    {recipe.prepTime.map((preptime, index) => (
                        <li key={index}><strong>{preptime}</strong></li>
                    ))}
                </ul>
            </div>
            <div className='bloc'>
                <p className='title-bloc-3-4-5'>Ingredients</p>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li className='list1' key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <hr/>
            <div className='bloc'>
                <p className='title-bloc-3-4-5'>Instructions</p>
                <ol>
                    {recipe.instructions.map((instruction, index) => (
                        <li key={index}><strong>{instruction.step}</strong> <p>{instruction.description}</p> </li>
                    ))}
                </ol>
            </div>
            <hr/>
            <div className='bloc'>
                <p className='title-bloc-3-4-5'>Nutrition</p>
                <table>
                    <thead>
                        <tr className='border'>
                            <th>Name</th>
                            <th>Value (with unit)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipe.nutrition.map((nutrition, index) => (
                            <tr className='border' key={index}>
                                <td>{nutrition.name}</td>
                                <td><span>{nutrition.value} {nutrition.unit}</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}