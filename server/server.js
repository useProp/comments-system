import "dotenv/config";
import fastify from "fastify";
import sensible from "@fastify/sensible";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = fastify();

app.register(sensible);
app.register(cors, {
  origin: process.env.CLIENT_URL,
  credentials: true,
});

app.get('/posts', async (req, res) => {
  return await commitToDB(prisma.post.findMany({
    select: {
      id: true,
      title: true,
    },
  }));
});

app.get('/posts/:id', async (req, res) => {
  return await commitToDB(prisma.post.findUnique({
    where: {
      id: req.params.id,
      select: {
        body: true,
        title: true,
        comments: {
          orderBy: 'desc',
          select: {
            id: true,
            message: true,
            parentId: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                name: true,
              }
            }
          }
        },
      }
    }
  }));
});

async function commitToDB(promise) {
  const [err, data] = await app.to(promise);

  if (err) {
    return app.httpErrors.internalServerError(err?.message || 'Internal server error');
  }

  return data;
}

app.listen({ port: process.env.APP_PORT }, () => {
  console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
});
