const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: 'false',
    realEstateAgent: 'false',
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

//these are action types that will hold a value for the switch statement
//they help prevent type errors that are hard to catch
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE"
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE"
//this is another action type
const UPDATE_CITY = "UPDATE_CITY"
//another action type
const UPDATE_PROP = 'UPDATE_PROP'
//another action type
const UPDATE_FOUND = 'UPDATE_FOUND'
//another action type
const UPDATE_REAL_ESTATE = 'UPDATE_REAL_ESTATE'
//more action types
const UPDATE_COST = 'UPDATE_COST'
const UPDATE_DOWN = 'UPDATE_DOWN'
//another action type
const UPDATE_CREDIT = 'UPDATE_CREDIT'
//another action type
const UPDATE_HISTORY = 'UPDATE_HISTORY'
//creating more action types
const UPDATE_ADD_ONE = 'UPDATE_ADD_ONE'
const UPDATE_ADD_TWO = 'UPDATE_ADD_TWO'
const UPDATE_ADD_THREE = 'UPDATE_ADD_THREE'
//creating three more action types
const UPDATE_FIRST = 'UPDATE_FIRST'
const UPDATE_LAST = 'UPDATE_LAST'
const UPDATE_EMAIL = 'UPDATE_EMAIL'

//this is the reducer function and it is the barin of all the things taht come in
function reducer(state = initialState, action){
    let newState = {}
    switch (action.type) {
        case UPDATE_LOAN_TYPE:
            newState = {...state, ...{loanType: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_PROPERTY_TYPE:
            newState = {...state, ...{property: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_CITY:
            newState = {...state, ...{city: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_PROP:
            newState = {...state, ...{propToBeUsedOn: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_FOUND:
            newState = {...state, ...{found: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_REAL_ESTATE:
            newState = {...state, ...{realEstateAgent: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_COST:  
            newState = {...state, ...{cost: +action.payload}}
            console.log(newState)
            return newState
        case UPDATE_DOWN:
            newState = {...state, ...{downPayment: +action.payload}}
            console.log(newState)
            return newState
        case UPDATE_CREDIT: 
            newState = {...state, ...{credit: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_HISTORY:
            newState = {...state, ...{history: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_ADD_ONE:
            newState = {...state, ...{addressOne: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_ADD_TWO:
            newState = {...state, ...{addressTwo: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_ADD_THREE:
            newState = {...state, ...{addressThree: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_FIRST:
            newState = {...state, ...{firstName: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_LAST:
            newState = {...state, ...{lastName: action.payload}}
            console.log(newState)
            return newState
        case UPDATE_EMAIL:
            newState = {...state, ...{email: action.payload}}
            console.log(newState)
            return newState
        default:
            return state;
    }
}

//this is called an action creator
//here we are taking in a loanType and going to do the switch statement
//that will update the state of loanType
export function updateLoanType(loanType) {
    return {
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}

//this is called an action creator
//here we are taking in a property and going to do the switch statement
//that will update the state of property
export function updatePropertyType(property) {
    return {
        type: UPDATE_PROPERTY_TYPE,
        payload: property
    }
}

//this is called an action creator
//here we are taking in a city and going to do the switch statement
//that will update the state of city
export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

//this is called an action creator
export function updateProp(prop) {
    return {
        type: UPDATE_PROP,
        payload: prop
    }
}

//this is called an action creator
export function updateFound(found) {
    return {
        type: UPDATE_FOUND,
        payload: found
    }
}

//this is called an action creator
export function realEstateAgent(realEstateAgent) {
    return {
        type: UPDATE_REAL_ESTATE,
        payload: realEstateAgent
    }
}

//this is another action creator
export function updateCost(cost) {
    return {
        type: UPDATE_COST,
        payload: cost
    }
}

//this is another action creator
export function updateDown(downPayment) {
    return {
        type: UPDATE_DOWN,
        payload: downPayment
    }
}

//this is another action creator
export function updateCredit (credit) {
    return {
        type: UPDATE_CREDIT,
        payload: credit
    }
}

//this is another action creator
export function updateHistory (history) {
    return {
        type: UPDATE_HISTORY,
        payload: history
    }
}

//this is another action creator
export function updateAddLineOne (address) {
    return {
        type: UPDATE_ADD_ONE,
        payload: address
    }
}

//this is another action creator
export function updateAddLineTwo (address) {
    return {
        type: UPDATE_ADD_TWO,
        payload: address
    }
}

//this is another action creator
export function updateAddLineThree (address) {
    return {
        type: UPDATE_ADD_THREE,
        payload: address
    }
}

//this is another action creator
export function updateFirstName (name) {
    return {
        type: UPDATE_FIRST,
        payload: name
    }
}

//this is another action creator
export function updateLastName (name) {
    return {
        type: UPDATE_LAST,
        payload: name
    }
}

//this is another action creator
export function updateEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

export default reducer;