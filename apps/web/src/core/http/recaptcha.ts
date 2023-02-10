import axios from 'axios'

export const verifyReCaptcha = async (token: string) => {
  const req = await axios.get('https://www.google.com/recaptcha/api/siteverify', {
    params: {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: token,
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'application/json',
    },
  })

  return req.data.success && req.data.score > 0.75
}
