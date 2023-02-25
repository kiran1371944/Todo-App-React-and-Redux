import {combineReducers} from 'redux';
import {todoListReducer} from './todoapp/reducers/operation';

 const reducer = combineReducers({
    todoReducer :  todoListReducer
})
export default reducer