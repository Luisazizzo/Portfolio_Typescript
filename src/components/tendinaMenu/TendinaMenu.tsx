import { Dispatch } from "react";
import styles from "./index.module.scss";

const TendinaMenu = (props: {
  tendina: boolean;
  setTendina: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { tendina, setTendina } = props;

  const closeTendina = () => {
    setTendina(false);
  };

  return (
    <div className={`${styles.TendinaMenu} ${tendina && styles.show}`}>
      <a onClick={closeTendina} href="#home">
        HOME
      </a>
      <a onClick={closeTendina} href="#chi-sono">
        CHI SONO
      </a>
      <a onClick={closeTendina} href="#competenze">
        COMPETENZE
      </a>
      <a onClick={closeTendina} href="#portfolio">
        PROGETTI
      </a>
      <a onClick={closeTendina} href="#esperienze">
        ESPERIENZE LAVORATIVE
      </a>
      <a onClick={closeTendina} href="#contatti">
        CONTATTI
      </a>
    </div>
  );
};
export default TendinaMenu;
