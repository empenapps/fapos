// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import product from './product';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({ menu, product } );

export default reducers;
