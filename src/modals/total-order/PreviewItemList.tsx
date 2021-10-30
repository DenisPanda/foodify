import { useEffect, useState } from "react";
import IncreaseDecreaseControl from "../../components/controls/IncreaseDecreaseControl";
import { CartItem } from "../../types/cart.types";
import { ITotalOrderPreviewProps } from "../../types/totalOrder.type";
import { getCurrencySymbol } from "../../utils/helpers/currency.helpers";
import { kamelStyles } from "../../utils/helpers/styles.helpers";
import PreviewItem from "./PreviewItem";
import _styles from './PreviewItemList.module.scss';

const styles = kamelStyles(_styles);

function PreviewItemList(
  props: ITotalOrderPreviewProps & { updateTotal: (items: CartItem[]) => void }
) {
  const [itmList, setItmList] = useState(props.data);

  useEffect(() => {
      props.updateTotal(itmList);
  }, [itmList, props]);

  /**
   * We can change the order amount on each item.
   * We don't update the global cart state until the user confirms the order
   */
  const updateItem = (itm: { id: string; amount: number }) => {
    setItmList((itms) =>
      itms.map((_itm) => (itm.id === _itm.id ? { ..._itm, ...itm } : _itm))
    );
  };

  /**
   * Use encapsulation to save the id, so we know which item should be updated by the control
   */
  const increaseAmountHandler = (id: string, amount: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
      updateItem({ id, amount: ++amount });
    };
  };

  const decreaseAmountHandler = (id: string, amount: number) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();
      if (amount > 0) {
        updateItem({ id, amount: --amount });
      }
    };
  };

  return (
    <div className={styles.previewList}>
      {itmList.map((itm) => {
        return (
          <PreviewItem
            key={itm.id}
            name={itm.title}
            amount={itm.amount}
            price={`${getCurrencySymbol(itm.currency)}${itm.price}`}
          >
            <IncreaseDecreaseControl
              deacreaseHandler={decreaseAmountHandler(itm.id, itm.amount)}
              increaseHandler={increaseAmountHandler(itm.id, itm.amount)}
            ></IncreaseDecreaseControl>
          </PreviewItem>
        );
      })}
    </div>
  );
}

export default PreviewItemList;
