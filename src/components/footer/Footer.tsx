import {
  MdOutlineMarkunread,
  MdOutlineFmdGood,
  MdOutlineSmartphone,
} from "react-icons/md";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer} id="contatti">
      <h2>CONTATTI</h2>
      <div className={styles.contatti}>
        <div className={styles.info}>
          <MdOutlineMarkunread className={styles.icon} />
          <a href="mailto:luisa0zizzo@gmail.com">luisa0zizzo@gmail.com</a>
        </div>
        <div className={styles.city}>
          <MdOutlineFmdGood className={styles.icon} />
          <p>Bagheria, PA</p>
        </div>
        <div className={styles.info}>
          <MdOutlineSmartphone className={styles.icon} />
          <a href="tel:+393515772471" target="_blank">
            +39 351 577 2471
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
