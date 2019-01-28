import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';
import WizardSix from './components/WizardSix/WizardSix';
import WizardSeven from './components/WizardSeven/WizardSeven';
import WizardEight from './components/WizardEight/WizardEight';
import WizardNine from './components/WizardNine/WizardNine';
import WizardTen from './components/WizardTen/WizardTen';
import WizardEleven from './components/WizardEleven/WizardEleven';
import Finish from './components/Finish/Finish';

import NextBtn from './components/NextBtn/NextBtn';
import { Switch, Route, HashRouter } from 'react-router-dom';


export default (
    <HashRouter>
        <Switch>
            <Route component={NextBtn} exact path='/' />
            <Route component={WizardOne} exact path='/wOne' />
            <Route component={WizardTwo} exact path='/wTwo' />
            <Route component={WizardThree} exact path='/wThree' />
            <Route component={WizardFour} exact path='/wFour' />
            <Route component={WizardFive} exact path='/wFive' />
            <Route component={WizardSix} exact path='/wSix' />
            <Route component={WizardSeven} exact path='/wSeven' />
            <Route component={WizardEight} exact path='/wEight' />
            <Route component={WizardNine} exact path='/wNine' />
            <Route component={WizardTen} exact path='/wTen' />
            <Route component={WizardEleven} exact path='/wEleven' />
            <Route component={Finish} exact path='/finish' />
        </Switch>
    </HashRouter>
)


