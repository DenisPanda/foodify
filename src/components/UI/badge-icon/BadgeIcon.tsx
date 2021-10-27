import react from "react";
import styles from "./BadgeIcon.module.scss";

function BadgeIcon(props: { amount: number }) {
  return <div className={styles['badge-icon']}>{props.amount}</div>;
}

export default BadgeIcon;