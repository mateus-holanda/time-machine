import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const PORT = 3333

const app = fastify()
const prisma = new PrismaClient()

app.get('/users', async () => {
  const users = await prisma.user.findMany()

  return users
})

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`HTTP server is running on http://localhost:${PORT}`)
  })
