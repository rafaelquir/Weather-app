import React, {Component} from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "Caracas,ve",
  "Madrid,es",
  "Buenos Aires,ar",
  "Santiago,cl",
  "Mexico,mx",
  "Bogota,co",
];
class App extends Component {
  render (){
    return (
      <div className="App">
        <LocationList cities = {cities}> </LocationList>
      </div>
    );
  }
}

export default App;
