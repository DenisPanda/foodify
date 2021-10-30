import { PropsWithChildren } from "react";
import { kamelStyles } from "../../utils/helpers/styles.helpers";
import _styles from "./PreviewItem.module.scss";

const styles = kamelStyles(_styles);

function PreviewItem(props: PropsWithChildren<{
  name: string;
  amount: number;
  price: string;
}>) {
  return (
    <div className={styles.previewItem}>
      <div className={styles.previewItem__leftColumn}>
        <div className={styles.name}>{props.name}</div>
        <div className={styles.row}>
          <div className={styles.price}>{props.price}</div>
          <div className={styles.amount}>x {props.amount}</div>
        </div>
      </div>

      <div className={styles.previewItem__rightColumn}>
        {props.children}
      </div>
    </div>
  );
}

export default PreviewItem;
