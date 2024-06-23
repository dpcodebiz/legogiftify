// pages/api/user/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get((req, res) => {
  res.json({});
});

export const config = {
  runtime: "edge",
};

export default router.handler({
  onError: (err: any, req, res) => {
    console.log(res);
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
