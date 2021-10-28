import { Currency } from "./currency.types";

export interface OrderItem {
    id: string;
    title: string;
    shortDescription: string;
    price: number;
    currency: Currency;
}