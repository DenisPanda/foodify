import React from "react";
import styles from "./PitchCard.module.scss";

import { PropsWithChildren } from "react";

function PitchCard(
  props: PropsWithChildren<{ title: string; className?: string }>
) {
  return (
    <div className={`${styles["pitch-card"]} ${props.className}`}>
      <div className={styles["pitch-card__title"]}>{props.title}</div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

export default PitchCard;