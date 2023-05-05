import { WorksData } from "../../../types/portfolio";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import styles from "./index.module.scss";

const SectionWork = (props: { works: WorksData[] | undefined }) => {
  const { works } = props;
  return (
    <div className={styles.SectionWork} id="esperienze">
      <h2>ESPERIENZE LAVORATIVE</h2>
      <AnimationOnScroll animateIn="animate__slideInDown">
        <div className={styles.content}>
          {works?.map((item, i: number) => (
            <div className={styles.work} key={i}>
              <div className={styles.data}>
                <p>{item.data}</p>
              </div>

              <div className={styles.separator}>
                <div className={styles.circle}></div>
                <div className={styles.line}></div>
              </div>
              <div className={styles.job}>
                <h3>{item.job}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimationOnScroll>
    </div>
  );
};
export default SectionWork;
