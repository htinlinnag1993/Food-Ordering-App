import { ADD_ONE_TO_BASKET, REMOVE_ONE_FROM_BASKET } from "../actions/types";

const initialState = {
    addedItems: [],
    totalItemsQuantity: 0,
    totalPrice: 0
}

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_ONE_TO_BASKET:
            var existingItem = state.addedItems.find(item => item.itemId === action.item.itemId);
            if (existingItem) {
                let newTotalPrice = state.totalPrice + action.item.price;
                let newTotalItemsQuantity = state.totalItemsQuantity + 1;
                existingItem.quantity += 1;
                return {
                    ...state,
                    addedItems: state.addedItems.map(item => item.itemId === existingItem.itemId ? existingItem : item),
                    totalItemsQuantity: newTotalItemsQuantity,
                    totalPrice: newTotalPrice
                };
            } else {
                let newTotalPrice = state.totalPrice + action.item.price;
                let newTotalItemsQuantity = state.totalItemsQuantity + 1;
                let newItemToAdd = action.item;
                newItemToAdd.quantity = 1;
                return {
                    ...state,
                    addedItems: [...state.addedItems, newItemToAdd ],
                    totalItemsQuantity: newTotalItemsQuantity,
                    totalPrice: newTotalPrice
                };
            }
        case REMOVE_ONE_FROM_BASKET:
            let itemToRemove = state.addedItems.find(item => item.itemId === action.item.itemId);
            if (itemToRemove) {
                let newTotalPrice = state.totalPrice - itemToRemove.price;
                let newTotalItemsQuantity = state.totalItemsQuantity - 1;
                if (newTotalItemsQuantity > 0) {
                    itemToRemove.quantity -= 1;
                    return {
                        ...state,
                        addedItems: state.addedItems.map(item => item.itemId === itemToRemove.itemId ? itemToRemove : item),
                        totalItemsQuantity: newTotalItemsQuantity,
                        totalPrice: newTotalPrice
                    };
                } else {
                    let newItems = state.addedItems.filter(item => item.itemId !== action.item.itemId);
                    return {
                        ...state,
                        addedItems: newItems,
                        totalItemsQuantity: newTotalItemsQuantity,
                        totalPrice: newTotalPrice
                    };
                }
            }
            return state;
        default:
            return state;
    }
};
