import { ProjectData } from "../../../types/portfolio";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import Image from "next/image";
import styles from "./index.module.scss";

const SectionProject = (props: { project: ProjectData[] | undefined }) => {
  const { project } = props;
  return (
    <div className={styles.SectionProject} id="portfolio">
      <h2>PROGETTI</h2>
      <div className={styles.content}>
        {project?.map((item, i: number) => (
          <div className={styles.card} key={i}>
            <AnimationOnScroll animateIn="animate__fadeInDown">
              <a
                className={styles.link_img_desktop}
                href={item.links[1].url}
                target="_blank"
              >
                <Image
                  className={styles.img_desktop}
                  src={item.image_big}
                  width={150}
                  height={150}
                  alt="img"
                />
              </a>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInDown">
              <div className={styles.description}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <a
                  className={styles.link_img_mobile}
                  href={item.links[1].url}
                  target="_blank"
                >
                  <Image
                    className={styles.img_mobile}
                    src={item.image_small}
                    width={150}
                    height={150}
                    alt="img"
                  />
                </a>
                <div className={styles.links}>
                  <a href={item.links[0].url} target="_blank">
                    {item.links[0].name}
                  </a>
                  <a href={item.links[1].url} target="_blank">
                    {item.links[1].name}
                  </a>
                </div>
              </div>
            </AnimationOnScroll>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SectionProject;
