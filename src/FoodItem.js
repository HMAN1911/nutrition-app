import React from 'react'

export default function FoodItem(props) {
  return (
    <div className="App-foodItem">
      name: {props.item.name} | calories: {props.item.calories}
    </div>
  );
}