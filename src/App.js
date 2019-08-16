import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
import { store } from './store';

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

  constructor() {
    super();
    this.state = {city: null};
  }

  handleSelectedLocation = city =>{
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);

    store.dispatch(setCity(city));
  }

  render (){
    const { city } = this.state;
    return (
      
        <Grid>
          <Row>
            <AppBar position="sticky">
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
              <Col xa={12} md={6}>
                <LocationList cities = {cities} onSelectedLocation={this.handleSelectedLocation}> </LocationList>
              </Col>
              <Col xa={12} md={6}>
                <Paper elvation={4}>
                  <div className="details">
                    {
                      !city ? 
                      <h1>No se selecciono ninguna ciudad</h1> :  <ForecastExtended city={city}></ForecastExtended>
                    }
                   
                  </div>
                </Paper>
                
              </Col>
          </Row>
         
        </Grid>
   
    );
  }
}

export default App;
