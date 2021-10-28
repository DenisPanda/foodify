import React from "react";
import { PropsWithChildren } from "react";
import { ModalBaseProp } from "../../types/modal.type";
import styles from "./Backdrop.module.scss";

/**
 * Dark background used as modal backdrop.
 * Bind out of modal clicks to this component
 */
function Backdrop(
  props: PropsWithChildren<{
    className?: string;
  } & ModalBaseProp>
) {
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('Click handle in backdrop');

    props.backdropClickHandle && props.backdropClickHandle();
  };

  return (
    <div
      onClick={clickHandler}
      className={`${styles.container} ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export default Backdrop;
