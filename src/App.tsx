import React, { useState } from "react";
import "./App.scss";
import Main from "./components/UI/layout/Main";
import AppCtx from "./context/app.context";
import Home from "./pages/home/Home";
import { CartAction, CartItem } from "./types/cart.types";
import { CART_ITEMS } from "./utils/data/carrtItems";

function App() {
  const [cartData, setCartData] = useState(CART_ITEMS);

  const dispatchCartDataEvent = (actionType: CartAction, _payload: CartItem[]) => {
    switch (actionType) {
      case CartAction.UPDATE:
        const [payload] =  _payload;

        setCartData((state) => {
          const list = state.map((itm) => {
            if (itm.id === payload.id) {
              return {
                ...itm,
                ...payload,
              };
            }

            return itm;
          });

          return list;
        });
        return;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <AppCtx.Provider
        value={{ cartData, cartDataHandler: dispatchCartDataEvent }}
      >
        <Main title="ReactMeals">
          <Home></Home>
        </Main>
      </AppCtx.Provider>
    </div>
  );
}

export default App;
