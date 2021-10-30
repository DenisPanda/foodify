import { PropsWithChildren } from "react";
import ReactDom from "react-dom";
import SimpleCard from "../../components/UI/cards/SimpleCard";
import { ModalBaseProp } from "../../types/modal.type";
import { kamelStyles } from "../../utils/helpers/styles.helpers";
import Backdrop from "./Backdrop";
import _styles from "./SimpleCardModal.module.scss";

const styles = kamelStyles(_styles);

const preventPropagation = (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  e.stopPropagation();
}

function SimpleCardModal(props: PropsWithChildren<ModalBaseProp>) {
  return ReactDom.createPortal(
    <Backdrop
      backdropClickHandle={props.backdropClickHandle}
      className="center-modal fade-in"
    >
      <SimpleCard  
    onClick={preventPropagation}
      className={styles.simpleCard}>{props.children}</SimpleCard>
    </Backdrop>,
    document.getElementById("modal-root") as Element
  );
}

export default SimpleCardModal;
