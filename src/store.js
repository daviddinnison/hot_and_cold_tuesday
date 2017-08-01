import {createStore} from 'redux';
import reducer from './reducer';
// thunk here wednesday
import ReduxThunk from 'redux-thunk';

export default createStore(reducer);