import { OrderItem } from './../../types/orderItem.types';

/**
 * Lets pretend this is fetched from an API
 */
export const ORDER_ITEMS: OrderItem[] = [
  {
    id: "1",
    title: "Sushi",
    shortDescription: "Best fish evaaa",
    price: 9.99,
    currency: "USD",
  },
  {
    id: "2",
    title: "Sea weed",
    shortDescription: "Not that weed, totally legal ;)",
    price: 12.99,
    currency: "USD",
  },

  {
    id: "3",
    title: "La Pig guts",
    shortDescription: "Classic french cousine",
    price: 29.99,
    currency: "USD",
  },

  {
    id: "4",
    title: "Gummy bear",
    shortDescription: "For the more un-adventerous type",
    price: 0.99,
    currency: "USD",
  },
];
