import { PropsWithChildren } from "react";
import { kamelStyles } from "../../../utils/helpers/styles.helpers";
import _styles from "./SimpleCard.module.scss";

const styles = kamelStyles(_styles);

function SimpleCard(props: PropsWithChildren<{className?: string}>) {
    return (
      <div className={`${styles.simpleCard} ${props.className}`}>
        {props.children}
      </div>
    );
}

export default SimpleCard;
