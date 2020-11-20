import React, { useState, useEffect, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {


  const [userIngredients, setUserIngredients] = useState([]);

  useEffect(() => {
    console.log('RENDERING INGREDIENTS....')
  }, [userIngredients]); // only trigger when dep: userIngredients got updated.

  const addIngredientHandler = ingredient => {
    fetch('https://react-hooks-demo-bf828.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevUserIngredients => [
        ...prevUserIngredients, { id: responseData.name, ...ingredient }
      ]);
    });

    // prevUserIngredients: depend on the current state, guarantee to get latest state.
    // add: update on existing list, add new ingredient.
  };

  const removeIngredientHandler = id => {
    setUserIngredients(prevUserIngredients => {
      return prevUserIngredients.filter(ig => ig.id !== id);
    });
  }

  const loadIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients);
  }, []);

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={loadIngredientsHandler} />
        <IngredientList onRemoveItem={removeIngredientHandler} ingredients={userIngredients} />
      </section>
    </div>
  );
}

export default Ingredients;
