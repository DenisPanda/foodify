import { createContext } from "react";
import { IAppCtx } from "../types/app.ctx.type";
import { CART_ITEMS } from "../utils/data/carrtItems";

const AppCtx = createContext({
    cartData: CART_ITEMS,
    cartDataHandler: () => {}
} as IAppCtx);

export default AppCtx;