import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

  const [enteredFilter, setEnteredFilter] = useState('');
  const { onLoadIngredients } = props;

  const inputRef = useRef();

  useEffect(() => {


    const timer = setTimeout(() => {
      if (enteredFilter !== inputRef?.current.value) {
        return;
      }

      const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`
      fetch('https://react-hooks-demo-bf828.firebaseio.com/ingredients.json' + query)
        .then(response => {
          return response.json();
        })
        .then(responseData => {
          const ingredients = Object.entries(responseData).reduce((arr, [id, obj]) => {
            arr.push({ id, ...obj });
            return arr;
          }, []);

          onLoadIngredients(ingredients);
        });
    }, 500);

    return () => {
      clearTimeout(timer);
    }

  }, [enteredFilter, onLoadIngredients, inputRef]);


  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input ref={inputRef} type="text" value={enteredFilter} onChange={event => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
