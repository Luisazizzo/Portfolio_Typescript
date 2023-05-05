// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PortfolioData } from "../../../types/portfolio";
import type { NextApiRequest, NextApiResponse } from "next";
import { getDataFromDatabase } from "../../../utils/mongo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getDataFromDatabase("userInfo");
  console.log(data);
  res.status(200).json(data);
}
