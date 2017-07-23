// if you've done work in node,
// the below would be equivalent to var React = require('react')
import React from 'react';
// we can import static assets like images thanks to some
// preconfiguration coming from create-react-app.
import logo from './logo.svg';
// once we import a style sheet, that will be injected into
// the document.
import './App.css';

import FoodInput from './FoodInput';
import FoodList from './FoodList';

// classes are new in javascript 6 and beyond, and are not specific
// to react. They are useful in many other circumstances too!
// more information: https://ponyfoo.com/articles/es6-classes-in-depth

// this component will be holding the majority of the 'state' of the application.
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
        {/* 
            we need to tell javascript that we want the code between the { } 
            to be executed or interpreted as regular old javascript. Anything
            not inside the { } will just be processed as plain text.
         */}
        <div className="App-totalCount">
          <div className="App-totalCount--calorieDisplay">
            {this.calculateTotalCaloriesConsumed()}
          </div>
          <div>
            Calories Consumed
          </div>
        </div>
        <FoodList foodItems={this.state.foodItems} onPanelClick={this.handleTogglePanel} panelOpen={this.state.islistPanelOpen} />
        <FoodInput onAddFood={this.handleAddFood} onInputChange={this.handleFoodInputFormChange} />
      </div>
    );
  }

}

export default App;
