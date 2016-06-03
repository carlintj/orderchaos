import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


export default function(state, message) {
    return function(dispatch) {
        console.log('got async', message);
        return state;
    }
}