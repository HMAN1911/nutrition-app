import React from 'react'

export default function FoodItem(props) {
  return (
    <div className="App-foodItem">
      <span className="App-foodItem-name">
        {props.item.name}
      </span>
      <span className="App-foodItem-calories">
        {props.item.calories} calories
      </span>
    </div>
  );
}