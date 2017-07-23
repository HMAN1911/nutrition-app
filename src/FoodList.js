import React from 'react';
import FoodItem from './FoodItem'

const FoodList = (props) => {
  return (
    <div className={props.panelOpen ? 'App-itemList open' : 'App-itemList closed'}>
      {
        props.panelOpen && (
          props.foodItems.map((foodItem, i) => {
            return <FoodItem key={i} item={foodItem} />
          })
        )
      }
      <p onClick={props.onPanelClick}>
        {
          props.panelOpen
          ? 'Hide'
          : 'Show'
        }
      </p>
    </div>
  )
}

export default FoodList;