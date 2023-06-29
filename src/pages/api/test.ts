import { ExampleData } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExampleData>
) {
  res.status(200).json({ title: "test api", randomNumber: 300 });
}
