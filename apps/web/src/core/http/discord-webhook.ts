import axios from 'axios'

interface DiscordWebhookEmbed {
  type?: 'rich'
  title?: string
  description?: string
  url?: string
  color?: number
  timestamp?: string
  footer?: {
    text?: string
    icon_url?: string
  }
  thumbnail?: {
    url?: string
  }
  image?: {
    url?: string
  }
  author?: {
    name?: string
    url?: string
    icon_url?: string
  }
  fields?: {
    name: string
    value: string
    inline?: boolean
  }[]
}

interface DiscordWebhookData {
  content?: string
  username?: string
  avatar_url?: string
  embeds: DiscordWebhookEmbed[]
}

export const sendDiscordWebhook = async (url: string, data: DiscordWebhookData) => {
  const req = await axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return req.data
}
