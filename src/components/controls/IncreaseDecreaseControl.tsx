import { kamelStyles } from '../../utils/helpers/styles.helpers';
import _styles from './IncreaseDecreaseControl.module.scss'

const styles = kamelStyles(_styles);

function IncreaseDecreaseControl(props: {
  increaseHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deacreaseHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <>
      <button className={`${styles.controlBtn}`} onClick={props.deacreaseHandler}>-</button>
      <button className={`${styles.controlBtn}`} onClick={props.increaseHandler}>+</button>
    </>
  );
}

export default IncreaseDecreaseControl;
