import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { SkillsData } from "../../../types/portfolio";
import styles from "./index.module.scss";

const SectionSkills = (props: { skills: SkillsData[] | undefined }) => {
  const { skills } = props;
  return (
    <div className={styles.SectionSkills} id="competenze">
      <h2>COMPETENZE</h2>
      <div className={styles.skills}>
        {skills?.map((item, i: number) => (
          <AnimationOnScroll
            animateIn="animate__bounceInLeft"
            delay={i * 100}
            key={i}
          >
            <p style={{ color: item.color, backgroundColor: item.bg }}>
              {item.title}
            </p>
          </AnimationOnScroll>
        ))}
      </div>
    </div>
  );
};

export default SectionSkills;
