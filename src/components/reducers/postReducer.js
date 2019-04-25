import { FETCH_POSTS, NEW_POST,USER_REGISTER_FORM } from '../../actions/types';

const initialState={
    items:[],
    item:{},
    register:{}
};
export default function(state = initialState,action){
    switch(action.type){
        case FETCH_POSTS:
        return{
            ...state,
            items:action.payload
        }
        case  NEW_POST:
        return{
            ...state,
            item:action.payload
        };
        case  USER_REGISTER_FORM:
        return{
            ...state,
            register:action.payload
        };
        default:
        return state;
    }
}