import cors from '@fastify/cors'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

const PORT = 3333

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(memoriesRoutes)

app
  .listen({
    port: PORT,
  })
  .then(() => {
    console.log(`HTTP server is running on http://localhost:${PORT}`)
  })
