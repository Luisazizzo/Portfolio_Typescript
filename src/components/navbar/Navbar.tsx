import { useState, useEffect, Dispatch } from "react";
import { CgMenuGridO } from "react-icons/cg";
import styles from "./index.module.scss";

const Navbar = (props: {
  setTendina: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setTendina } = props;

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTendina = () => {
    setTendina((prev: boolean) => !prev);
  };

  return (
    <>
      <CgMenuGridO onClick={toggleTendina} className={styles.menu} />
      <div
        className={`${styles.Navbar} ${
          scrollPosition > 0 ? styles.scrolled : ""
        }`}
      >
        <a href="#home">HOME</a>
        <a href="#chi-sono">CHI SONO</a>
        <a href="#competenze">COMPETENZE</a>
        <a href="#portfolio">PROGETTI</a>
        <a href="#esperienze">ESPERIENZE LAVORATIVE</a>
        <a href="#contatti">CONTATTI</a>
      </div>
    </>
  );
};

export default Navbar;
