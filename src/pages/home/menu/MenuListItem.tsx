import React from 'react';
import { kamelStyles } from '../../../utils/helpers/styles.helpers';
import _styles from './MenuListItem.module.scss';
import MenuListItemForm from './MenuListItemForm';

const styles = kamelStyles(_styles);

function MenuListItem() {
    return (
        <li className={styles.menuItem}>
            <div>
                <div className={styles.menuItem__name}>
                    Sushi
                </div>
                <div className={styles.menuItem__description}>
                    some description of sushi
                </div>
                <div className={styles.menuItem__price}>
                    $2.99
                </div>
            </div>
            <MenuListItemForm></MenuListItemForm>
        </li>
    );
}

export default MenuListItem;