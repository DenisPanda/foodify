import { CartItem } from './../../types/cart.types';
import { ORDER_ITEMS } from './orderItems';

export const CART_ITEMS: CartItem[] = ORDER_ITEMS.map((cd) => ({ ...cd, amount: 0 }));