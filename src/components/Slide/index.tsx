import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";

import { Box } from '@chakra-ui/react';

import { Item } from './Item';

interface SlideProps {
  continents: {
    slug: string
    name: string
    summary: string
    slideImage: string
  }[]
}

export function Slide({ continents }: SlideProps) {
  return (
    <Box w="100%" maxW="1240" mx="auto">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ width: '100%' }}
      >
        {continents?.map((continent, index) => (
          <SwiperSlide key={index}>
            <Item {...continent} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}