import {} from 'react';
import PaintBg from './PaintBg';

type Props = {};

const PhoiMauNhaDep = ({}: Props) => {
  const imgs = [
    'https://nipponpaint.com.vn/sites/default/files/2019-04/%5BNipponPaint%5D%5BDesktop%5D01-Homepage_13.jpg',
    'https://nipponpaint.com.vn/sites/default/files/2019-04/%5BNipponPaint%5D%5BDesktop%5D01-Homepage_15.jpg',
    'https://nipponpaint.com.vn/sites/default/files/2019-04/%5BNipponPaint%5D%5BDesktop%5D01-Homepage_18.jpg',
  ];
  return (
    <div
      className="pt-24 pb-48 text-white text-center relative"
      style={{ background: 'var(--dark-blue)' }}
    >
      <PaintBg src="https://nipponpaint.com.vn/themes/wosh_sub/assets/images/top-blue-paint.png" />
      <div className="container">
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
      </div>
    </div>
  );
};

export default PhoiMauNhaDep;
