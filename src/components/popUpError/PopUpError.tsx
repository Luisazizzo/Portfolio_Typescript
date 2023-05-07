/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, useEffect } from "react";
import styles from "./index.module.scss";

const PopUpError = (props: {
  setPopUp: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setPopUp } = props;

  const closePopUp = () => {
    setPopUp(false);
  };

  useEffect(() => {
    setTimeout(closePopUp, 3000);
  }, []);

  return (
    <div className={styles.PopUpError}>
      <p onClick={closePopUp} className={styles.close}>
        x
      </p>
      <h2>Errore Connessione al Database</h2>
      <p>Caricati dati statici</p>
    </div>
  );
};
export default PopUpError;
