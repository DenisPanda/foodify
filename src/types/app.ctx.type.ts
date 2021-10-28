import { CartItem, CartAction } from './cart.types';
export interface IAppCtx {
    cartData: CartItem[],
    cartDataHandler: (action: CartAction, payload: CartItem[]) => void
};