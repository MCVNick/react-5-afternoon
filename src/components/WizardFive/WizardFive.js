import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { realEstateAgent } from './../../ducks/reducer'

class WizardFive extends Component {

    render() {
        const { realEstateAgent } = this.props
        return (
            <div className="parent-div">
                <div className="vert-align">

                    <p>Are you currently working with a real estate agent?</p> <br />
                    <div className="row">
                        <Link to="/wSix"><button onClick={() => realEstateAgent('True')}>Yes</button></Link>
                        <Link to="/wSix"><button onClick={() => realEstateAgent('False')}>No </button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { realEstateAgent } = reduxState
    return {
        realEstateAgent
    }
}

const connectComponent = connect(mapStateToProps, { realEstateAgent })(WizardFive)
export default connectComponent;