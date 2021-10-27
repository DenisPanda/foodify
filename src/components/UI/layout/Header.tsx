import React, { PropsWithChildren } from "react";
// import { HeaderProps } from "../../../types/header.types";
import { HeaderProps } from "../../../types/header.types";
import styles from "./Header.module.scss";


function Header(props: PropsWithChildren<HeaderProps>) {
    return (
        <header className={styles.header}>
            <div className={styles.title}>
                {props.title}
            </div>
            <div>
                {props.children}
            </div>
        </header>
    )
}

export default Header;