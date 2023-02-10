import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface YTEmbedProps {
  embed_id: string
  title: string
  thumbnail: string
}

export default function YTEmbed({ embed_id, title, thumbnail }: YTEmbedProps) {
  // TODO: Put an local thumbnail
  return <LiteYouTubeEmbed thumbnail={thumbnail} aspectHeight={9} aspectWidth={16} id={embed_id} title={title} />
}
