import { kamelStyles } from "../../utils/helpers/styles.helpers";
import ConfirmBar from "../common/ConfirmBar";
import PreviewItemList from "./PreviewItemList";
import _styles from "./TotalOrderPreview.module.scss";

const styles = kamelStyles(_styles);

function TotalOrderPreview() {
  const confirmClick = () => {
    console.log('Confirm clicked!');
  }

  const cancelClick = () => {
    console.log('Cancel clicked!');
  }

  return (
    <div className={styles.totalOrder}>
      <PreviewItemList></PreviewItemList>
      <div className={styles.total}>
        <div>Total Amount</div>
        <div>$88.99</div>
      </div>
      <ConfirmBar confirmHandle={confirmClick} closeHandle={cancelClick}></ConfirmBar>
    </div>
  );
}

export default TotalOrderPreview;