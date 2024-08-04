import { } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './2.scss';
type Props = {};

const Slide = ({}: Props) => {
  const data = [
    'https://nipponpaint.com.vn/sites/default/files/2022-12/z3953467922281_2310dba07ab9908271888fc8cfc10e6d.jpg',
    'https://nipponpaint.com.vn/sites/default/files/2023-06/z4395142615643_edaa32bb1fa9e2dfee743dc53b9cbbca.jpg',
    'https://nipponpaint.com.vn/sites/default/files/2023-11/z4856999348765_8db9324aac419d034ae5cb9255f2ae8e.jpg',
    'https://nipponpaint.com.vn/sites/default/files/2019-09/web_1-02.jpg',
  ];
  return (
    <div id="slide-home" className="w-screen h-screen relative mt-12">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper h-full w-full"
      >
        {data.map((i) => (
          <SwiperSlide key={i}>
            <div
              className="h-full w-full bg-no-repeat bg-cover"
              style={{ backgroundImage: `url('${i}')` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
