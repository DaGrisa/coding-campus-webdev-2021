import React from "react";

export interface CartItem {
    id: string;
    name: string;
    quantity: number;
    price: number;
}

export interface CartContextState {
    items: CartItem[];
    totalPrice: number;
    addItem: (item: CartItem)=>void,
    removeItem: (id: string)=>void;
}

const defaultCartState:CartContextState = {
    items: [],
    totalPrice: 0,
    addItem: ()=>{},
    removeItem: () => {}
};

const CartContext = React.createContext(defaultCartState);

export default CartContext;