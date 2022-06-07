import {configureStore} from '@reduxjs/toolkit';
import TestReducer from './Reducer/testReducer';

const store=configureStore({
    reducer:{
        TestReducer
    }
});
export default store;