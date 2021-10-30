import { PropsWithChildren, useContext, useEffect, useState } from "react";
import AppCtx from "../../../context/app.context";
import CartTotal from "../../cart/CartTotal";
import Header from "./Header";
import styles from "./Main.module.scss";

function Main(props: PropsWithChildren<{ title: string }>) {
  const [totalAmount, setTotalAmount] = useState(0);

  const { cartData } = useContext(AppCtx);

  useEffect(() => {
    const count = cartData.reduce((c, itm) => {
      c += itm.amount;

      return c;
    }, 0);

    setTotalAmount(count);
  }, [cartData]);

  return (
    <div className={styles["main-wrapper"]}>
      <Header title={props.title}>
        <CartTotal totalAmount={totalAmount}></CartTotal>
      </Header>

      <div className={styles["main-wrapper__content"]}>{props.children}</div>
    </div>
  );
}

export default Main;
