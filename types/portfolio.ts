export interface SocialItem {
  name: string;
  url: string;
}

export interface UserInfoData {
  name: string;
  job: string;
  info: string;
  image: string;
}

export interface ProjectData {
  title: string;
  image_big: string;
  image_small: string;
  description: string;
  links: SocialItem[];
}

export interface SkillsData {
  title: string;
  bg: any;
  color: any;
}

export interface WorksData {
  job: string;
  data: any;
  description: string;
}
export interface PortfolioData {
  social: SocialItem[];
  userInfo: UserInfoData;
  project: ProjectData[];
  skills: SkillsData[];
  works: WorksData[];
}
