import {
  PrismaClientKnownRequestError,
  NotFoundError,
  PrismaClientValidationError,
} from '@prisma/client/runtime'

import { AxiosError } from 'axios'
import { NextApiResponse } from 'next'
import { ZodError } from 'zod'

export class HttpError {
  statusCode: number
  message: string
  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode
    this.message = message
  }
}

const handleHttpErrors = (err: HttpError, res: NextApiResponse) => {
  return res.status(err.statusCode).json({ message: err.message })
}

const handleZodErrors = (err: ZodError, res: NextApiResponse) => {
  return res.status(400).json({ message: err.issues[0].message })
}

export const handleCommonErrors = (err: any, res: NextApiResponse) => {
  if (err.constructor.name === 'ZodError') {
    // TODO: prolly there's a better way to do this
    return handleZodErrors(err, res)
  }

  if (err instanceof HttpError) {
    return handleHttpErrors(err, res)
  }

  if (err instanceof AxiosError) {
    return res
      .status(err.response?.status || 500)
      .json({ message: 'Internal Request Error' })
  }

  if (err instanceof PrismaClientValidationError) {
    return res.status(400).json({ message: 'Bad Request' })
  }

  if (err instanceof NotFoundError) {
    return res.status(404).json({ message: 'Not Found' })
  }

  if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === 'P2025') {
      return res.status(409).json({ message: 'Conflict' })
    }
  }

  if (process.env.NODE_ENV === 'development') {
    return res.status(500).json({ message: err })
  }

  return res.status(500).json({ message: 'Internal Server Error' })
}
