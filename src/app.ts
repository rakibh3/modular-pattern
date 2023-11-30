import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { catRouter } from './app/modules/Cat/Cat.route'

// Create Express app
const app: Application = express()

// Parser
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1/cat', catRouter)

// Route handler for GET requests to /
const getController = (req: Request, res: Response) => {
  // Send response text
  res.send('Hello Express JS!')
}

app.get('/', getController)

export default app
