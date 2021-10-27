import React from "react";
import { PropsWithChildren } from "react";
import styles from './Backdrop.module.scss';

/**
 * Dark background used as modal backdrop.
 * Bind out of modal clicks to this component
 */
function Backdrop(props: PropsWithChildren<{}>) {
    return <div className={styles.container}>{props.children}</div>;
}

export default Backdrop;