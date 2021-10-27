import React from "react";
import { kamelStyles } from "../../utils/helpers/styles.helpers";
import _styles from './ConfirmBar.module.scss';

const styles = kamelStyles(_styles);

function ConfirmBar(props: {
  closeBtn?: string;
  confirmBtn?: string;
  closeHandle: () => void;
  confirmHandle: () => void;
}) {
  const closeClickHandle = () => {
    props?.closeHandle();
  };

  const confirmClickHandle = () => {
    props?.confirmHandle();
  };

  return (
    <div className={styles.confirmBar}>
      <button onClick={closeClickHandle} className="secondary-btn">
        {props.closeBtn || "Close"}
      </button>
      <button onClick={confirmClickHandle} className="primary-btn">
        {props.confirmBtn || "Confirm"}
      </button>
    </div>
  );
}

export default ConfirmBar;
