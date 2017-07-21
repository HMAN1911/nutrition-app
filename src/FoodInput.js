import React from 'react'

export default function FoodInput(props) {
  return (
    <div className="App-foodInput">
      <form onSubmit={(e) => {
        e.preventDefault();
        props.onAddFood();
      }}>
        name:
        <input type="text" onChange={(e) => {
          props.onInputChange('nameValue', e.target.value)
        }} />
        calories:
        <input type="text" onChange={(e) => {
          props.onInputChange('caloriesValue', e.target.value)
        }} />
        <button type="submit">
          Add Food
        </button>
      </form>
    </div>
  );
}