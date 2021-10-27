import React, { PropsWithChildren, useState } from "react";
import CartTotal from "../../cart/CartTotal";
import Header from "./Header";
import styles from './Main.module.scss';

function Main(props: PropsWithChildren<{ title: string }>) {
  const [totalAmount, setTotalAmount] = useState(4);

  const testHandler = (): void => {
      setTotalAmount(totalAmount + 1);
  }

  return (
    <div className={styles["main-wrapper"]}>
      <Header title={props.title}>
        <CartTotal totalAmount={totalAmount}></CartTotal>
      </Header>

      <button onClick={testHandler} style={{position: 'absolute', top: '50%', 'color': 'white', background: 'blue'}}>JUST DO IT</button>
      <div className={styles["main-wrapper__content"]}>{props.children}</div>
    </div>
  );
}

export default Main;
