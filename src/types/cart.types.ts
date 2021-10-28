import { OrderItem } from './orderItem.types';

export interface CartTotalProps {
    totalAmount: number;
}

export interface CartItem extends OrderItem {
    amount: number;
}

export enum CartAction {
    "UPDATE"
}