export interface HttpError {
  message: string
  statusCode: number
}

export const httpError = (statusCode: number, message: string): HttpError => {
  return { message, statusCode }
}

export const httpErrors = {
  badRequest: (message: string) => httpError(400, message),
  unauthorized: (message: string) => httpError(401, message),
  forbidden: (message: string) => httpError(403, message),
  notFound: (message: string) => httpError(404, message),
  methodNotAllowed: (message: string) => httpError(405, message),
  internalServerError: (message: string) => httpError(500, message),
}

export const handleError = (err: any): HttpError => {
  if (!err.response) {
    return httpErrors.internalServerError('Something went wrong')
  }

  if (err.response.status === 500) {
    return httpErrors.internalServerError('Internal Server Error')
  }

  if (err.response.status === 403) {
    return httpErrors.forbidden("You don't have permission to do this.")
  }

  if (err.response.status === 405) {
    return httpErrors.methodNotAllowed('Method Not Allowed')
  }

  return {
    message: err.response.data.message,
    statusCode: err.response.status,
  }
}
