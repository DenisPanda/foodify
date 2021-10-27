import React from "react";
import { kamelStyles } from "../../utils/helpers/styles.helpers";
import _styles from "./PreviewItemList.module.scss";

const styles = kamelStyles(_styles);

// function PreviewItem(props: { name: string; amount: number; price: number }) {
function PreviewItem() {
  return (
    <div className={styles.previewItem}>
      <div className={styles.previewItem__data}>
        <div className={styles.name}>Sushi</div>
        <div className={styles.row}>
          <div className={styles.price}>$22.99</div>
          <div className={styles.amount}>x 1</div>
        </div>
      </div>
    </div>
  );
}

export default PreviewItem;
