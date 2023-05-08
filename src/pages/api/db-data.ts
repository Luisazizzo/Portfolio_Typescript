// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PortfolioData } from "../../../types/portfolio";
import type { NextApiRequest, NextApiResponse } from "next";
import { getDataFromDatabase } from "../../../utils/mongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PortfolioData>
) {
  // chiamo le collections da mondgoDb
  const userInfo = await getDataFromDatabase("userInfo");
  const social = await getDataFromDatabase("social");
  const project = await getDataFromDatabase("project");
  const skills = await getDataFromDatabase("skills");
  const works = await getDataFromDatabase("works");

  // creo l'oggetto della risposta della chiamata
  const data: PortfolioData = {
    social: social,
    userInfo: userInfo[0],
    project: project,
    skills: skills,
    works: works,
  };
  res.status(200).json(data);
}
