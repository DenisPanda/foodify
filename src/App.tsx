import { useState } from "react";
import "./App.scss";
import Main from "./components/UI/layout/Main";
import AppCtx from "./context/app.context";
import Home from "./pages/home/Home";
import { CartAction, CartItem } from "./types/cart.types";
import { CART_ITEMS } from "./utils/data/carrtItems";

function App() {
  const [cartData, setCartData] = useState(CART_ITEMS);

  const dispatchCartDataEvent = (
    actionType: CartAction,
    _payload: CartItem[]
  ) => {
    switch (actionType) {
      case CartAction.UPDATE:
        if (_payload.length) {
          // map cart items by id
          const payload = _payload.reduce((itms, itm) => {
            if (itm.id) {
              itms[itm.id] = itm;
            }

            return itms;
          }, {} as { [prop: string]: CartItem });

          setCartData((state) => {
            const list = state.map((itm) => {
              const cartItm = payload[itm.id];
              if (cartItm) {
                return {
                  ...itm,
                  ...cartItm,
                };
              }

              return itm;
            });

            return list;
          });
        }
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
