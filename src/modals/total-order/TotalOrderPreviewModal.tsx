import ReactDom from "react-dom";
import Backdrop from "../common/Backdrop";

function TotalOrderPreviewModal() {
  return ReactDom.createPortal(
    <Backdrop></Backdrop>,
    document.getElementById("modal-root") as Element
  );
}

export default TotalOrderPreviewModal;