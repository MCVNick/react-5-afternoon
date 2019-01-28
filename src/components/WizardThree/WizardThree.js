import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//here we are importing connect from react-redux
import { connect } from 'react-redux'
//here we are importing the action creator
import { updateProp } from './../../ducks/reducer'

class WizardThree extends Component {
    render() {
        const { updateProp } = this.props
        return (
            <div className="parent-div">
                <div className="vert-align">
                    <p> What property are you looking to use the loan on? </p><br />
                    <div className="row">
                        <Link to="/wFour"><button value="primaryHome" onClick={(e) => updateProp(e.target.value)}>Primary Home</button></Link>
                        <Link to="/wFour"><button value="rentalProperty" onClick={(e) => updateProp(e.target.value)}>Rental Property</button></Link>
                        <Link to="/wFour"><button value="secondaryHome" onClick={(e) => updateProp(e.target.value)}>Secondary Home</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { propToBeUsedOn } = reduxState
    return {
        propToBeUsedOn
    }
}

const connectComponent = connect(mapStateToProps, { updateProp })(WizardThree)
export default connectComponent; 
