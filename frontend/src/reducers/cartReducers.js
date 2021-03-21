import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state= {cartItems:[]},action)=>{
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            //기존에 있던 아이템 이 새로 들어오는 아이템 과 같은지
            const existItem = state.cartItems.find(x => x.product === item.product);
            if(existItem){
                return {
                    ...state, //cartItems 외의 state 는 건들지 않겟다.
                    cartItems: state.cartItems.map((x)=>x.product === existItem.product?
                        item:x)
                }
            }else{ //기존의 아이템들과 새로운 아이템을 합침.
                return {...state,cartItems:[...state.cartItems,item]}
            }

        case CART_REMOVE_ITEM:
            return {...state, cartItems:state.cartItems.filter(x => x.product !== action.payload)}

        default:
            return state;
    }
}