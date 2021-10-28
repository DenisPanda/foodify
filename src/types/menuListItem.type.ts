import { CartItem } from './cart.types';
export interface MenuListItemProp {
    item: CartItem,
    itemHandler: (item: CartItem) => void
}
