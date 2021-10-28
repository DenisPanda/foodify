import { PropsWithChildren } from "react";
import { ModalBaseProp } from "../../types/modal.type";
import SimpleCardModal from "../common/SimpleCardModal";

function TotalOrderPreviewModal(props: PropsWithChildren<ModalBaseProp>) {
  return <SimpleCardModal backdropClickHandle={props.backdropClickHandle}>{props.children}</SimpleCardModal>;
}

export default TotalOrderPreviewModal;
