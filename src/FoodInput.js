import React from 'react'

export default function FoodInput(props) {
  return (
    <div className="App-foodInput">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onAddFood();
        }}
      >
        <div className="App-foodInput--inputWrapper">
          <input
            className="App-foodInput--foodName"
            type="text"
            placeholder="Enter food name"
            onChange={(e) => {
              props.onInputChange('nameValue', e.target.value)
            }}
          />
          <input
            className="App-foodInput--calories"
            type="text"
            placeholder="Enter calories"
            onChange={(e) => {
              props.onInputChange('caloriesValue', e.target.value)
            }} 
          />
        </div>
        <button type="submit">
          Add Food
        </button>
      </form>
    </div>
  );
}