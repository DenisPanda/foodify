import { useEffect, useState } from "react";
import { CartItem } from "../../types/cart.types";
import { ITotalOrderPreviewProps } from "../../types/totalOrder.type";
import { getCurrencySymbol } from "../../utils/helpers/currency.helpers";
import { kamelStyles } from "../../utils/helpers/styles.helpers";
import ConfirmBar from "../common/ConfirmBar";
import PreviewItemList from "./PreviewItemList";
import _styles from "./TotalOrderPreview.module.scss";
import { round } from "lodash-es";

const styles = kamelStyles(_styles);
const CURRENCY = getCurrencySymbol("USD");

function TotalOrderPreview(props: ITotalOrderPreviewProps) {
  const [showList, setShowList] = useState(false);
  const [total, setTotal] = useState(0);
  const [lastUpdatedList, setLastUpdateList] = useState([] as CartItem[]);

  useEffect(() => {
    // show list if there is an amount defined on at least one
    // cart item
    setShowList(!!props.data.some((cI) => cI.amount));
  }, [props.data]);

  const confirmClick = () => {
    props.confirm(lastUpdatedList);
  };

  const cancelClick = () => {
    props.close();
  };

  const updateTotal = (cartItems: CartItem[]): void => {
    if (cartItems?.length) {
      setLastUpdateList(cartItems);
      // calc total
      setTotal(round(cartItems.reduce((acc, itm) => {
        acc += itm.amount*itm.price;

        return acc;
      },0), 2));

      return;
    }
  };

  const list = (
    <>
      <PreviewItemList
        data={props.data.filter((itm) => itm.amount)}
        close={props.close}
        confirm={props.confirm}
        updateTotal={updateTotal}
      ></PreviewItemList>
      <div className={styles.total}>
        <div>Total Amount</div>
        <div>{CURRENCY}{total.toFixed(2)}</div>
      </div>
      <ConfirmBar
        confirmBtn="Order"
        confirmHandle={confirmClick}
        closeHandle={cancelClick}
      ></ConfirmBar>
    </>
  );

  const noData = <div className={styles.noData}>No orders to show</div>;

  return <div className={styles.totalOrder}>{showList ? list : noData}</div>;
}

export default TotalOrderPreview;
