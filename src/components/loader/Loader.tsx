import styles from "./index.module.scss";
import { RiLoader4Fill } from "react-icons/ri";

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <RiLoader4Fill className={styles.icon_loader} />
    </div>
  );
};
export default Loader;
