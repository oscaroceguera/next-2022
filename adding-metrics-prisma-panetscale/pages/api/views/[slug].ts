import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // your API methos here!
  try {
    const slug = req.query.slug?.toString();

    if (req.method === "POST") {
      // handle the post
      const newOrUpdateViews = await prisma.stats.upsert({
        where: { slug },
        create: {
          // @ts-ignore
          slug,
        },
        update: {
          views: {
            increment: 1,
          },
        },
      });

      return res.status(200).json({
        total: newOrUpdateViews.views.toString(),
      });
    }

    if (req.method === "GET") {
      // handle the get
      const stats = await prisma.stats.findUnique({
        where: {
          slug,
        },
      });

      return res.status(200).json({ total: stats?.views.toString() });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
