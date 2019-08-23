import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import ForecastExtended from './../components/ForecastExtended';

class ForescastExtendedContainer extends Component {
    render() {
        const { city, forecastData } = this.props;
        return ( 
            city &&
           <ForecastExtended city={city} forecastData={forecastData}/>
        )
    }
}
ForescastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
};

const mapStateToProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData });
export default connect(mapStateToProps, null) (ForescastExtendedContainer);