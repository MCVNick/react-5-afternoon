import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//here we are importing connect from react-redux to make the connection to redux
import { connect } from 'react-redux'
//here we are importing the action creator from the reducer
import { updateCity } from './../../ducks/reducer'

class WizardTwo extends Component {
    render() {
        const { updateCity } = this.props;

        return (
            <div className="parent-div">
                <div className="vert-align">

                    <p>In what city will the property be located?</p><br />

                    <input placeholder="city name" type="text" onChange={(e) => updateCity(e.target.value)} />

                    <Link to="/wThree"><button className="wTwo-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

//this returns one property from state that is city
//this is because all we are messing with is the city
function mapStateToProps(reduxState) {
    const { city } = reduxState
    return {
        city
    }
}

//here we are modifying the export statement to use connect
const connectComponent = connect(mapStateToProps, { updateCity })(WizardTwo)
export default connectComponent;