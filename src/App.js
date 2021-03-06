import React, {Component} from 'react';

import { Grid, Row, Col } from 'react-flexbox-grid';

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LocationListContainer';
import ForescastExtendedContainer from './containers/ForescastExtendedContainer';



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
                <LocationListContainer cities={cities}></LocationListContainer>
              </Col>
              <Col xa={12} md={6}>
                <Paper elvation={4}>
                  <div className="details">
                   <ForescastExtendedContainer></ForescastExtendedContainer>            
                  </div>
                </Paper>
                
              </Col>
          </Row>

        </Grid>
   
    );
  }
}
export default App;
