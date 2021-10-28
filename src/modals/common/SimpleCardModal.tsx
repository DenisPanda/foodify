import { PropsWithChildren } from "react";
import ReactDom from "react-dom";
import SimpleCard from "../../components/UI/cards/SimpleCard";
import { ModalBaseProp } from "../../types/modal.type";
import { kamelStyles } from "../../utils/helpers/styles.helpers";
import Backdrop from "./Backdrop";
import _styles from "./SimpleCardModal.module.scss";

const styles = kamelStyles(_styles);

function SimpleCardModal(props: PropsWithChildren<ModalBaseProp>) {
  return ReactDom.createPortal(
    <Backdrop
      backdropClickHandle={props.backdropClickHandle}
      className="center-modal fade-in"
    >
      <SimpleCard className={styles.simpleCard}>{props.children}</SimpleCard>
    </Backdrop>,
    document.getElementById("modal-root") as Element
  );
}

export default SimpleCardModal;
