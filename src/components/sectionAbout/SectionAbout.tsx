import { UserInfoData } from "../../../types/portfolio";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import Image from "next/image";
import styles from "./index.module.scss";

const SectionAbout = (props: { userInfo: UserInfoData | undefined }) => {
  const { userInfo } = props;
  return (
    <div className={styles.SectionAbout} id="chi-sono">
      <h2>CHI SONO</h2>
      <div className={styles.info}>
        <div className={styles.img}>
          <AnimationOnScroll animateIn="animate__backInLeft" animateOnce={true}>
            {userInfo && (
              <Image
                src={userInfo?.image}
                width={350}
                height={350}
                alt={userInfo?.name}
              />
            )}
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateIn="animate__backInRight" animateOnce={true}>
          <div className={styles.paragrafo}>
            <p>{userInfo?.info}</p>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default SectionAbout;
