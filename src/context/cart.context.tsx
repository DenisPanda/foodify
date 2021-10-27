import { createContext } from "react";
import { CartItem } from "../types/cart.types";

const CartCtx = createContext(([] as CartItem[]));

export default CartCtx;