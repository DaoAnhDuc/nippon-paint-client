import {} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { chunkArray } from './3.GioiThieuCty';
type Props = {};

const COLOR = 'var(--dark-blue)'
const SanPham = ({}: Props) => {
  // const imgs = [
  //   'https://nipponpaint.com.vn/sites/default/files/2019-04/%5BNipponPaint%5D%5BDesktop%5D01-Homepage_13.jpg',
  //   'https://nipponpaint.com.vn/sites/default/files/2019-04/%5BNipponPaint%5D%5BDesktop%5D01-Homepage_15.jpg',
  //   'https://nipponpaint.com.vn/sites/default/files/2019-04/%5BNipponPaint%5D%5BDesktop%5D01-Homepage_18.jpg',
  // ];

  const sonoto: Array<any> = [
    {
      img: 'https://product.hstatic.net/1000109642/product/gen_303_urethane_primer_grey_f22810997a3c403c9318b933d1ca1004_large.jpg',
      text: 'GEN 303 Urethane Primer Grey',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/gen_690_fast_dry_clear_coat_444abdf579d1488180e0834f7b6a730d_large.jpg',
      text: 'Gen 690 Fast Dry Clear Coat',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/nax_2200_2k_primer_grey_c0b4644ce0b749a28a446193b37d19a5_large.png',
      text: 'Nax 2200 2K Primer Grey',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/nax_2400_2k_urethane_primer_grey_f98acf1c85914f919433ebe443795e4e_large.jpg',
      text: 'NAX 2400 2K URETHANE PRIMER GREY',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/nax_crystal_9905_mirror_image_clear_2k_cabd6340c16e4bf9b8352612ae77e4c9_large.jpg',
      text: 'NAX CRYSTAL 9905 MIRROR CLEAR',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/nax_e3_wb-02_e3584c06c59b4c37964919e7776a7f6f_large.png',
      text: 'NAX E3 WB',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/nax_pp_primer_e457bab6d0f7479ab7ab466eadeb6cd5_large.jpg',
      text: 'NAX PP PRIMER',
    },

    {
      img: 'https://product.hstatic.net/1000109642/product/nax_premila_2k_a37002909a75421ab77d3a34d30f1467_large.jpg',
      text: 'NAX PREMILA 2K',
    },
  ];

  const vattuphutro: Array<any> = [
    {
      img: 'https://product.hstatic.net/1000109642/product/car_brite_black_p_c_c49a6d082d4f479d8c85177eea566863_80dbc22ffa2d416eaf0fe1f1da02ff1a_large.jpg',
      text: 'BLACK PEARL CERAMIC COATING KIT  - Bộ sản phẩm phủ Cerami...',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/black-pearl-speed-spray_38ae0611adcc4ec5b7582b8080b7649b_b6f7a18e98b34ef09d4cead316b7bff7_large.png',
      text: 'BLACK PEARL SIO2 SPRAY - Dung dịch xịt phủ bảo dưỡng lớp ...',
    },
  ];

  const chamsocoto: Array<any> = [
    {
      img: 'https://product.hstatic.net/1000109642/product/black-pearl-speed-spray_38ae0611adcc4ec5b7582b8080b7649b_b6f7a18e98b34ef09d4cead316b7bff7_large.png',
      text: 'BLACK PEARL SIO2 SPRAY - DUNG DỊCH XỊT PHỦ BẢO DƯỠNG LỚP ...',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/bumper-kote_e861b173fe334e86b734adb442c04761_d524fa7eead143cbbe8a8f8af648bd94_large.jpg',
      text: 'BUMPER KOTE - GEL DƯỠNG PHỤC HỒI NHỰA NGOẠI THẤT CAR BRITE',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/brite-stik-purple_9b0cd2a768fe4c2289235b3aee2b8f14_f1eb1aabae8e4626925ae543d4439f21_large.jpg',
      text: 'CAR BRITE BRITE STIK 8 OZ. PURPLE CLAY WITH TUB - ĐẤT SÉT...',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/tire-and-trim-dressing_6bc130f3ba7c47a8af1447503b3d4dc6_7c69c697cafd43fc87ae0527ceb7490d_large.jpg',
      text: 'CB SELCET TIRE & TRIM DRSG -  DUNG DỊCH PHỦ DƯỠNG LỐP VÀ ...',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/all-purpose-dressing_79ea8c2c28dc410e99e277df6baff2a2_e30c84517eb9475a9991a3368cf029c6_large.jpg',
      text: 'CB SELECT ALL PURPOSE DRESSING - DUNG DỊCH DƯỠNG ĐA NĂNG ...',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/car-soap-5gal_3af7d5059b86483ab8a12dfeaf689a20_9c54b98ba1f44127ab1350fc61b435d3_large.jpg',
      text: 'CB SELECT CAR SOAP - DUNG DỊCH RỬA XE TRUNG TÍNH GỐC NƯỚC...',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/select-cutting-compound_7f41838103a24424a5b386f8cb54810c_8739bed45c07462384425dfcdc2582dd_large.jpg',
      text: 'CB SELECT COMPOUND - XI ĐÁNH BÓNG CAO CẤP BƯỚC 1 SELECT',
    },
  ];

  const renderCard = (data: Array<any>) => {
    return (
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{ border: 'none' }}
      >
        {chunkArray(data, 5).map((item: Array<any>, index: number) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-5 gap-6 py-6">
              {item.map((i, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      borderTop: '1px solid rgba(60, 64, 67, 0.15)',
                      boxShadow:
                        'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                    }}
                  >
                    <div className="bg-white pt-4">
                      <img
                        src={i.img}
                        className="h-60 object-contain bg-white w-full"
                        alt=""
                      />
                    </div>
                    <div className=" text-black px-4 py-4 bg-white min-h-24 flex items-center justify-center">
                      <p className="font-bold text-lg text-center">{i.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

  return (
    <div
      className="pt-24 pb-48 relative text-white"
      style={{ background: COLOR }}
    >
      {/* <PaintBg src="https://nipponpaint.com.vn/themes/wosh_sub/assets/images/top-pink-paint.png" /> */}
      {/* <div className="container">
        <p className="font-bold">
          Giúp bạn tạo nên không gian ngôi nhà mơ ước với các
        </p>
        <p className="font-bold text-4xl my-4">MẪU PHỐI MÀU NHÀ ĐẸP</p>
        <p className="font-bold">
          Làm phong phú thêm không gian cuộc sống với những dải sắc màu ấn tượng
          của chúng tôi
        </p>
        <div
          className="mx-auto my-6"
          style={{
            width: 800,
            maxWidth: '90%',
            borderBottom: '1px solid #959595',
          }}
        />
        <div className="grid xl:grid-cols-2 gap-10 sm:grid-cols-1">
          <div className="text-left">
            <p className="font-bold text-4xl mt-12">BIỂN XANH THANH BÌNH</p>
            <p className="font-bold text-base mt-4 ">
              Nhẹ nhàng và bình yên là những gì bạn sẽ cảm nhận được khi ở trong
              một căn phòng đầy sắc xanh dương, như một bức tranh về đại dương
              với những âm thanh vỗ về của từng con sóng.
            </p>
            <button className="btn-blue w-fit mt-4">Xem bộ sưu tập</button>
            <div className="flex gap-3 mt-16">
              {imgs.map((i, index) => (
                <img src={i} key={index} className="w-1/3 object-cover h-60" />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <img
              className="w-full"
              src="https://nipponpaint.com.vn/sites/default/files/2019-04/Layer-74_1_0.png"
              alt=""
            />
          </div>
        </div>
      </div> */}
      <div
        style={{
          backgroundColor: COLOR,
          maskPosition: 'top center',
          maskSize: 'cover',
          maskImage: `url(./images/mask.png)`,
          position: 'absolute',
          top: -110,
          width: '100%',
          display: 'block',
          height: 120,
          zIndex: 1,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      />
      <div className="container">
        <p className="text-4xl text-center font-bold">SẢN PHẨM</p>
        <div className="flex justify-between items-end mt-8">
          <div>
            <p className="font-bold text-3xl">SƠN Ô TÔ</p>
          </div>
          <div className="btn-blue">Xem tất cả</div>
        </div>
        <div className=" mt-0 ">{renderCard(sonoto)}</div>
        <div className="flex justify-between items-end mt-8">
          <div>
            <p className="font-bold text-3xl">VẬT TƯ PHỤ TRỢ</p>
          </div>
          <div className="btn-blue">Xem tất cả</div>
        </div>
        <div className=" mt-0 ">{renderCard(vattuphutro)}</div>
        <div className="flex justify-between items-end mt-8">
          <div>
            <p className="font-bold text-3xl">CHĂM SÓC Ô TÔ</p>
          </div>
          <div className="btn-blue">Xem tất cả</div>
        </div>
        <div className=" mt-0 ">{renderCard(chamsocoto)}</div>
      </div>
    </div>
  );
};

export default SanPham;
