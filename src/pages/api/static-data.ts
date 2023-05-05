// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { portfolio } from "../../../static-data/portfolio";
import { PortfolioData } from "../../../types/portfolio";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PortfolioData>
) {
  res.status(200).json(portfolio);
}
