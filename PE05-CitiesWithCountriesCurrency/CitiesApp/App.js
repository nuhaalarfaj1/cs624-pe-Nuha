import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './src/Cities/Cities'
import AddCity from './src/AddCity/AddCity'
import Countries from './src/Countries/Countries'
import AddCountry from './src/AddCountry/AddCountry'

const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = {
    cities: []
    
  
  }

  
  
  
 
  addCity = (country) => {
    const cities = this.state.Countries
    cities.push(country)
    this.setState({ Countries })
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Cities"  initialParams={{cities: this.state.cities, addCity: this.addCity}} component={Cities} />
          <Tab.Screen name="AddCity" initialParams={{cities: this.state.cities, addCity: this.addCity}} component={AddCity} />
          <Tab.Screen name="Countries"  initialParams={{Countries: this.state.Countries, AddCountry: this.AddCountry}} component={Countries} />
          <Tab.Screen name="AddCountry" initialParams={{Countries: this.state.Countries, AddCountry: this.AddCountry}} component={AddCountry} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
