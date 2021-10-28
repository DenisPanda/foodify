import { MenuListItemProp } from '../../../types/menuListItem.type';
import { getCurrencySymbol } from '../../../utils/helpers/currency.helpers';
import { kamelStyles } from '../../../utils/helpers/styles.helpers';
import _styles from './MenuListItem.module.scss';
import MenuListItemForm from './MenuListItemForm';

const styles = kamelStyles(_styles);

function MenuListItem(props: MenuListItemProp) {

    return (
        <li className={styles.menuItem}>
            <div>
                <div className={styles.menuItem__name}>
                    {props.item.title}
                </div>
                <div className={styles.menuItem__description}>
                    {props.item.shortDescription}
                </div>
                <div className={styles.menuItem__price}>
                    {getCurrencySymbol(props.item.currency)}{props.item.price}
                </div>
            </div>
            <MenuListItemForm item={props.item} itemHandler={props.itemHandler}></MenuListItemForm>
        </li>
    );
}

export default MenuListItem;