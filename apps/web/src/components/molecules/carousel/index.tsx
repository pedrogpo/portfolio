import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'

interface CarouselProps {
  children: React.ReactNode
  slidesPerView?: number | 'auto'
  spaceBetween?: number
  autoPlayDelay?: number
}

export default function Carousel({
  children,
  slidesPerView = 3,
  spaceBetween = 24,
  autoPlayDelay = 7000,
}: CarouselProps) {
  return (
    <Swiper
      breakpoints={{
        992: {
          slidesPerView: slidesPerView,
        },
      }}
      slidesPerView="auto"
      spaceBetween={spaceBetween}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: autoPlayDelay,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
      }}
    >
      {children}
    </Swiper>
  )
}
