import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import { UserInfoData, SocialItem } from "../../../types/portfolio.ts";
import styles from "./index.module.scss";
import Link from "next/link";

const Hero = (props: {
  userInfo: UserInfoData | undefined;
  social: SocialItem[] | undefined;
}) => {
  const { userInfo, social } = props;
  return (
    <div className={styles.Hero} id="home">
      <AnimationOnScroll
        animateIn="animate__backInDown"
        animatePreScroll={true}
        initiallyVisible={true}
      >
        <div className={`${styles.main} animate__animated animate__backInDown`}>
          <h1>{userInfo?.name}</h1>

          <p className={styles.job}>{userInfo?.job}</p>

          <div className={styles.social}>
            {social?.map((item, i: number) => (
              <Link
                key={i}
                className={styles.link_social}
                target="_blank"
                href={item.url}
              >
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
          <a
            className={styles.download}
            href="documents/CV_LUISA_ZIZZO.pdf"
            download={true}
          >
            DOWLOAD MY CV {">>>"}
          </a>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Hero;
