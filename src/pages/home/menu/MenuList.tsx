import { useContext } from "react";
import AppCtx from "../../../context/app.context";
import { CartAction, CartItem } from "../../../types/cart.types";
import { kamelStyles } from "../../../utils/helpers/styles.helpers";
import _styles from "./MenuList.module.scss";
import MenuListItem from "./MenuListItem";

const styles = kamelStyles(_styles);

function MenuList() {
  const { cartData, cartDataHandler } = useContext(AppCtx);

  const updateAmount = (item: CartItem) => {
    cartDataHandler(CartAction.UPDATE, [item]);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.menuList}>
        {/* @TODO remove test code */}
        {/* test data */}
        {/* {Array.from(new Array(5)).map((_, i) => (
                    // <li style={{padding: "20px 10px"}}>Item {i}</li>
                    <>
                        <MenuListItem></MenuListItem>
                    </>
                ))} */}
        {/* test data */}
        {cartData.map((d) => {
          return (
            <MenuListItem
              key={d.id}
              item={d}
              itemHandler={updateAmount}
            ></MenuListItem>
          );
        })}
      </ul>
    </div>
  );
}

export default MenuList;
