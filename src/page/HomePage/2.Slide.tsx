import {} from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './2.scss';
type Props = {};

const Slide = ({}: Props) => {
  const data = [
    'https://png.pngtree.com/thumb_back/fw800/background/20240729/pngtree-the-procedure-of-painting-a-car-in-the-service-center-image_15933746.jpg',
    'https://png.pngtree.com/thumb_back/fw800/background/20240312/pngtree-auto-car-repair-service-center-mechanic-examining-suspension-image_15640925.jpg',
    'https://png.pngtree.com/thumb_back/fw800/background/20240729/pngtree-the-procedure-of-painting-a-car-in-the-service-center-image_15933745.jpg',
    'https://png.pngtree.com/thumb_back/fw800/background/20240402/pngtree-broken-car-on-tow-truck-after-traffic-accident-on-the-road-image_15649472.jpg',
  ];
  return (
    <div id="slide-home" className="w-screen h-screen relative mt-0">
      <button
        className="text-white font-bold text-lg"
        style={{
          width: 300,
          height: 69,
          backgroundImage:
            'url("https://nipponpaint.com.vn/themes/wosh_sub/assets/images/btn-image.png")',
          position: 'absolute',
          zIndex: 2,
          top: '17%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        Tìm hiểu ngay
      </button>
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
