import currentUser from '../apis/current-user'; // used axios create for setup
import menu from '../apis/menu'; // used axios create for setup
import { FETCH_USER, FETCH_MENU, ADD_ONE_TO_BASKET, REMOVE_ONE_FROM_BASKET } from './types';

export const fetchUser = () => async dispatch => {
    console.log("fetchUser is called");
    const res = await currentUser.get('/');
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

// Makes an api call to the backend
export const fetchMenu = (id) => async dispatch => {
    console.log("fetchMenu is called");
    const res = await menu.get(`/${id}`);
    dispatch({
        type: FETCH_MENU,
        payload: res.data
    });
};

export const addOneToBasket = (item)=>{
    console.log("addOneToBasket is called");
    return{
        type: ADD_ONE_TO_BASKET,
        item
    }
}

export const removeOneFromBasket = (item) =>{
    console.log("removeOneFromBasket is called");
    return{
        type: REMOVE_ONE_FROM_BASKET,
        item
    }
}