import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './src/Cities/Cities'
import AddCity from './src/AddCity/AddCity'
import Countries from './src/Countries/Countries'
import AddCountry from './src/AddCountry/AddCountry'
import Country from './src/Cities/Country'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


  function CitiesStackScreen ({navigation, route}){
    return (
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
      }}>
      <Stack.Screen name="Cities" component={Cities} initialParams={{
        cities: route.params.cities,
        addCity: route.params.addCity,
        addLocation: route.params.addLocation}} />
      <Stack.Screen name="Country" component={Country} initialParams={{
        cities: route.params.cities,
        addCity: route.params.addCity,
        addLocation: route.params.addLocation}}/>
      </Stack.Navigator>
    );
}

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
