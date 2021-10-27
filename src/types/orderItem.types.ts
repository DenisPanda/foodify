import { Currency } from "./currency.types";

export interface OrderItem {
    title: string;
    shortDescription: string;
    price: number;
    currency: Currency;
}