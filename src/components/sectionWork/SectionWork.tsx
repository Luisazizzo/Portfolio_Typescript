import { WorksData } from "../../../types/portfolio";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import styles from "./index.module.scss";

const SectionWork = (props: { works: WorksData[] | undefined }) => {
  const { works } = props;
  return (
    <div className={styles.SectionWork} id="esperienze">
      <h2>ESPERIENZE LAVORATIVE</h2>
      <div className={styles.content}>
        {works?.map((item, i: number) => (
          <div className={styles.work} key={i}>
            <AnimationOnScroll
              className={styles.data}
              animateIn="animate__backInLeft"
              animateOnce={true}
            >
              <div>
                <p>{item.data}</p>
              </div>
            </AnimationOnScroll>

            <div className={styles.separator}>
              <div className={styles.circle}></div>
              <div className={styles.line}></div>
            </div>
            <AnimationOnScroll
              className={styles.job}
              animateIn="animate__backInRight"
              animateOnce={true}
            >
              <div>
                <h3>{item.job}</h3>
                <p>{item.description}</p>
              </div>
            </AnimationOnScroll>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SectionWork;
