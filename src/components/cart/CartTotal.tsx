import react, { useCallback, useEffect, useState } from "react";
import { CartTotalProps } from "../../types/cart.types";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./CartTotal.module.scss";
import BadgeIcon from "../UI/badge-icon/BadgeIcon";
import TotalOrderPreviewModal from "../../modals/total-order/TotalOrderPreviewModal";

const debounce = (func: any, to: number) => {
    let timer: any = null;
    const ctx = this;

    return (...args: any) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(ctx, args);
        }, to);
    }
}


function CartTotal(props: CartTotalProps) {
    const [isInit, setIsInit] = useState(true);
    const [justAdded, setJustAdded] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const cb = useCallback(debounce(() => setJustAdded(false), 1500), []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!isInit) {
            setJustAdded(true);
        }

        return () => {
            if (isInit) {
                setIsInit(false);
            }

            cb();
        }
    }, [props.totalAmount, isInit, cb]);


    const addedAnimationEnded = () => {
        setJustAdded(false);
    }

    const handleCartClick = () => {
        setShowModal((s) => !s);
    }

    return (
        <div onClick={handleCartClick} onTransitionEnd={addedAnimationEnded} className={`${styles['cart-total']} ${!isInit && justAdded ? styles['pop-animation'] : '' }`}>
            <FaShoppingCart></FaShoppingCart>
            <span>Your Cart</span>
            <BadgeIcon amount={props.totalAmount}></BadgeIcon>

            {showModal ? <TotalOrderPreviewModal></TotalOrderPreviewModal> : ''}
        </div>
    )
}

export default CartTotal;