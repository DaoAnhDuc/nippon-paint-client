import { } from 'react'; // import required modules
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

type Props = {};


export const chunkArray = (array: Array<any>, chunkSize: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
};

const GioiThieuCty = ({}: Props) => {
  // const imgs = [
  //   'https://nipponpaint.com.vn/sites/default/files/2019-04/ma-mau-son-nippon-01.jpg',
  //   'https://nipponpaint.com.vn/sites/default/files/2019-04/ma-mau-son-nippon-02.jpg',
  //   'https://nipponpaint.com.vn/sites/default/files/2019-04/ma-mau-son-nippon-03.jpg',
  // ];

  return (
    <div className="pt-24 pb-48 text-white relative">
      <div className="container text-black">
        <p className="text-4xl text-center font-bold">GIỚI THIỆU CÔNG TY </p>
        <div className="grid xl:grid-cols-2 gap-4 sm:grid-cols-1 mt-8">
          <div className="flex justify-end items-center sm:justify-center">
            <img
              style={{ height: 480, maxWidth: '100%', objectFit: 'contain' }}
              src="https://demo.themesberg.com/landwind/images/hero.png"
              alt=""
            />
          </div>
          <div className="p-4">
            <p className="text-yellow-400 font-bold text-3xl">
              SGINVEST ĐƯỢC THÀNH LẬP
            </p>
            <p className="text-pink-700 font-bold text-2xl mt-4">TỪ NĂM 2018</p>
            <p className="font-bold mt-4">
              NHÀ PHÂN PHỐI HÀNG ĐẦU CÁC SẢN PHẨM CHĂM SÓC XE
            </p>
            <p className="mt-8">
              Được thành lập từ năm 2018 bởi những người đam mê chăm sóc xe, SG
              INVEST nhà phân phối hàng đầu của các sản phẩm sơn Nippon, chăm
              sóc xe Car Brite, phủ Graphene và kính GP...
            </p>
            <p className="mt-8">
              SG INVEST cung cấp một cách toàn diện các sản phẩm chăm sóc xe như
              sáp, chất đánh bóng, dung dịch vệ sinh xe, các hợp chất tẩy rửa,
              dung môi, sơn và thuốc nhuộm cho thị trường miền Nam.
            </p>
            <p className="mt-8 text-yellow-400 font-bold text-xl">SG INVEST</p>
            <img
              className="w-full max-w-72 mt-4"
              src="https://theme.hstatic.net/1000109642/1000599395/14/aboutus_img_author.jpg?v=155"
              alt=""
            />
          </div>
        </div>
        {/* <hr
          className="w-4/5 mx-auto mt-12"
          style={{ borderColor: '#dfdfdf45' }}
        /> */}
        {/* <div className=" mt-16">
          <p className="text-4xl text-center font-bold mb-8">ĐỘI NGỦ NHÂN SỰ</p>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            style={{ border: 'none' }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <SwiperSlide key={i} className="grid grid-cols-2 gap-8">
                {[1, 2].map((k) => (
                  <div
                    key={k}
                    style={{
                      width: 'calc(100% - 200px)',
                      marginLeft: 'auto',
                      height: 300,
                      background: '#ec91a5',
                      borderRadius: 10,
                      position: 'relative',
                    }}
                  >
                    <img
                      style={{
                        height: 240,
                        width: 240,
                        borderRadius: '50%',
                        position: 'absolute',
                        top: '50%',
                        left: -120,
                        transform: 'translateY(-50%)',
                      }}
                      src="https://cdn.pixabay.com/photo/2024/06/24/04/05/woman-8849047_1280.jpg"
                      alt=""
                    />
                    <div
                      style={{
                        paddingLeft: 160,
                        paddingTop: 40,
                        paddingRight: 40,
                        paddingBottom: 40,
                      }}
                    >
                      <h2 className="text-3xl font-bold">Tên của CEO</h2>
                      <p className="italic text-lg mt-2 ">Chức vụ</p>
                      <p className="mt-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Fugiat dolorum, voluptatibus facere tenetur
                        assumenda adipisci, perspiciatis eaque soluta ratione
                        nesciunt unde. Nemo recusandae voluptates saepe rerum
                        laudantium architecto omnis distinctio?
                      </p>
                    </div>
                  </div>
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </div>
  );
};

export default GioiThieuCty;
