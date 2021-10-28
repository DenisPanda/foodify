// import React, { useCallback, useEffect, useRef, useState } from 'react';
import React, { useEffect, useState } from 'react';
import { MenuListItemProp } from '../../../types/menuListItem.type';
import { kamelStyles } from '../../../utils/helpers/styles.helpers';
import _styles from './MenuListItemForm.module.scss';

const styles = kamelStyles(_styles);

export function MenuListItemForm(props: MenuListItemProp) {
    const [amountVal, setAmountVal] = useState(props.item.amount);

    useEffect(() => {
        setAmountVal(props.item.amount);
    }, [props.item])

    const onAmountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmountVal(+e.target.value);
    }


    const updateAmount = (e: React.MouseEvent<HTMLButtonElement> ) => {
        const amount = amountVal;

        props.itemHandler({
            ...props.item,
            amount
        });
    }

    return (
        <div className={styles.container}>
            <div className={styles.formControl}>
                <label>Amount</label>
                <input onChange={onAmountChangeHandler} min="0" type="number" value={amountVal} />
            </div>
            <button onClick={updateAmount}>
                +Add
            </button>
        </div>
    )
}

export default MenuListItemForm;