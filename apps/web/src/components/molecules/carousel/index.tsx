import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper } from 'swiper/react'
import { Pagination, Autoplay, Navigation } from 'swiper'
import { useCallback, useRef } from 'react'
import SwiperCore from 'swiper'

import * as S from './styles'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

interface CarouselProps {
  children: React.ReactNode
  slidesPerView?: number | 'auto'
  spaceBetween?: number
  autoPlayDelay?: number
  navigation?: boolean
}

export default function Carousel({
  children,
  slidesPerView = 3,
  spaceBetween = 24,
  autoPlayDelay = 7000,
  navigation = true,
}: CarouselProps) {
  const sliderRef = useRef<SwiperCore>()

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.slideNext()
  }, [])
  return (
    <S.Container>
      <Swiper
        onInit={(core) => {
          sliderRef.current = core
        }}
        breakpoints={{
          992: {
            slidesPerView: slidesPerView,
          },
        }}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        navigation={navigation}
        autoplay={{
          delay: autoPlayDelay,
          pauseOnMouseEnter: false,
          disableOnInteraction: false,
        }}
      >
        {children}
      </Swiper>
      {navigation && (
        <>
          <div
            className="prev-arrow pagination__left pagination__icon"
            onClick={handlePrev}
          >
            <BiLeftArrowAlt size={30} />
          </div>
          <div
            className="next-arrow pagination__right pagination__icon"
            onClick={handleNext}
          >
            <BiRightArrowAlt size={30} />
          </div>
        </>
      )}
    </S.Container>
  )
}
