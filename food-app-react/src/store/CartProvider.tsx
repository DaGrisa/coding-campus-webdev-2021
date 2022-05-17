import { ReactNode, useReducer } from "react";
import CartContext, {CartContextState, CartItem} from "./CartContext";

interface CartProviderProps{
    children: ReactNode;
}

export interface CartState {
    items: CartItem[];
    totalPrice: number;
}

const defaultCartState: CartState ={
    items: [],
    totalPrice: 0
}

function cartReducer(state: CartState, action: {type: string, item?: CartItem, id?: string}): CartState{
    //state -> aktuelle Snapshot von unserem Warenkorb
    //action -> welche aktion wir ausführen möchten (ADD, REMOVE) + daten (obj)

    if(action.type === 'ADD' && action.item){
        const newItemToAdd = action.item;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === newItemToAdd.id
        );

        const existingItem = state.items[existingCartItemIndex];

        let updatedItems: CartItem[];
                
        if(existingItem){

            let updatedItem: CartItem = {
                ...existingItem,
                quantity: existingItem.quantity + newItemToAdd.quantity
            }

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
                    
        }else{
            //item(s) zu bisherigem State hinzufügen
            updatedItems = state.items.concat(newItemToAdd);
        }

        //total price berechnen
        const updatedTotalPrice = state.totalPrice + newItemToAdd.price * newItemToAdd.quantity;
       
        //neuer state mit daten zurückgeben
        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }

    if(action.type === 'REMOVE' && action.id){
        const itemToRemoveIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const itemToRemove = state.items[itemToRemoveIndex];

        let updatedItem: CartItem = {
            ...itemToRemove,
            quantity: itemToRemove.quantity--
        }

        const updatedItems = [...state.items];
        if(updatedItem.quantity === 0){
            updatedItems.splice(itemToRemoveIndex, 1);
        } else {
            updatedItems[itemToRemoveIndex] = updatedItem;
        }

        const updatedTotalPrice = state.totalPrice - itemToRemove.price;

        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }

    return defaultCartState; //TODO: neue aktualisierte state
}

export default function CartProvider(props: CartProviderProps){
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    function addItemToCartHandler(item: CartItem){
        dispatchCartAction({type: 'ADD', item: item})
    }

    function removeItemFromCartHandler(id: string){
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const cartContext: CartContextState = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}