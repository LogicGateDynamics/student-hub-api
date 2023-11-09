import 'reflect-metadata'
import Express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import routes from './routes/router'
import '@shared/container/container'
import { AppError } from '@errors/app-error'

const app = Express()

app.use(Express.json())
app.use(routes)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        message: error.message,
      })
    }

    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${error.message}`,
    })
  },
)

app.listen(3333, () => {
  console.log('[student-hub-api] - Server is running')
})
