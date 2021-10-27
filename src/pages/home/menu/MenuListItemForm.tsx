import React from 'react';
import { kamelStyles } from '../../../utils/helpers/styles.helpers';
import _styles from './MenuListItemForm.module.scss';

const styles = kamelStyles(_styles);

export function MenuListItemForm() {
    return (
        <div className={styles.container}>
            <div className={styles.formControl}>
                <label>Amount</label>
                <input type="number" defaultValue="0" />
            </div>
            <button>
                +Add
            </button>
        </div>
    )
}

export default MenuListItemForm;