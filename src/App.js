import React from 'react';

import FoodInput from './FoodInput';
import FoodList from './FoodList';
import './App.css';

class App extends React.Component {
  state = {
    calorieTarget: 0,
    caloriesConsumed: 0,
    islistPanelOpen: false,
    foodItems: [
      {
        name: 'banana, raw',
        calories: 70
      },
      {
        name: 'apple, raw',
        calories: 40
      }
    ],
    foodInputForm: {
      nameValue: '',
      caloriesValue: 0
    }
  }

  calculateTotalCaloriesConsumed = () => {
    return this.state.foodItems.reduce(function(previousItem, currentItem) {
      return Number(previousItem) + Number(currentItem.calories);
    }, 0);
  }

  handleFoodInputFormChange = (fieldName, value) => {
    var newFoodInputForm = Object.assign({}, this.state.foodInputForm);
    newFoodInputForm[fieldName] = value;

    this.setState({
      foodInputForm: newFoodInputForm
    });
  }

  handleTogglePanel = () => {
    this.setState({
      islistPanelOpen: !this.state.islistPanelOpen
    });
  }

  handleAddFood = () => {
    var newFoodItemsArray = Object.assign([], this.state.foodItems);
    var newFoodItem = {
      name: this.state.foodInputForm.nameValue,
      calories: this.state.foodInputForm.caloriesValue
    };
    newFoodItemsArray.push(newFoodItem);

    this.setState({
      foodItems: newFoodItemsArray
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-totalCount">
          <div className="App-totalCount--calorieDisplay">
            {this.calculateTotalCaloriesConsumed()}
          </div>
          <div>
            Calories Consumed
          </div>
        </div>
        <FoodList
          foodItems={this.state.foodItems}
          onPanelClick={this.handleTogglePanel}
          panelOpen={this.state.islistPanelOpen}
        />
        <FoodInput
          onAddFood={this.handleAddFood}
          onInputChange={this.handleFoodInputFormChange}
        />
      </div>
    );
  }
}

export default App;
