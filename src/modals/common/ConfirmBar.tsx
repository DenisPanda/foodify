import React from "react";
import { kamelStyles } from "../../utils/helpers/styles.helpers";
import _styles from './ConfirmBar.module.scss';

const styles = kamelStyles(_styles);

function ConfirmBar(props: {
  closeBtn?: string;
  confirmBtn?: string;
  closeHandle?: () => void;
  confirmHandle?: () => void;
}) {
  const closeClickHandle = () => {
    props.closeHandle && props.closeHandle();
  };

  const confirmClickHandle = () => {
    props.confirmHandle && props.confirmHandle();
  };

  const shouldShowConfirmBtn = () =>
    !!props.confirmHandle ? (
      <button onClick={confirmClickHandle} className="primary-btn">
        {props.confirmBtn || "Confirm"}
      </button>
    ) : (
      ""
    );

  return (
    <div className={styles.confirmBar}>
      <button onClick={closeClickHandle} className="secondary-btn">
        {props.closeBtn || "Close"}
      </button>
      {shouldShowConfirmBtn()}
    </div>
  );
}

export default ConfirmBar;
