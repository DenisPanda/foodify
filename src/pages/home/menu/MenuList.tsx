import React from "react";
import { kamelStyles } from "../../../utils/helpers/styles.helpers";
import _styles from "./MenuList.module.scss";
import MenuListItem from "./MenuListItem";

const styles = kamelStyles(_styles);

function MenuList() {
    return (
        <div className={styles.container}>
            <ul className={styles.menuList}>
                {/* test data */}
                {Array.from(new Array(5)).map((_, i) => (
                    // <li style={{padding: "20px 10px"}}>Item {i}</li>
                    <>
                        <MenuListItem></MenuListItem>
                    </>
                ))}
                {/* test data */}
            </ul>
        </div>
    );
}

export default MenuList;