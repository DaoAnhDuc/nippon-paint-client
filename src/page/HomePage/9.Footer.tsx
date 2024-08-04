import {} from 'react';
import PaintBg from './PaintBg';
import { chunkArray } from './3.MaMauSon';

type Props = {};

const Footer = ({}: Props) => {
  const vietnamProvinces = [
    'An Giang',
    'Bà Rịa - Vũng Tàu',
    'Bạc Liêu',
    'Bắc Kạn',
    'Bắc Giang',
    'Bắc Ninh',
    'Bến Tre',
    'Bình Dương',
    'Bình Định',
    'Bình Phước',
    'Bình Thuận',
    'Cà Mau',
    'Cao Bằng',
    'Cần Thơ',
    'Đà Nẵng',
    'Đắk Lắk',
    'Đắk Nông',
    'Điện Biên',
    'Đồng Nai',
    'Đồng Tháp',
    'Gia Lai',
    'Hà Giang',
    'Hà Nam',
    'Hà Nội',
    'Hà Tĩnh',
    'Hải Dương',
    'Hải Phòng',
    'Hậu Giang',
    'Hòa Bình',
    'Hưng Yên',
    'Khánh Hòa',
    'Kiên Giang',
    'Kon Tum',
    'Lai Châu',
    'Lạng Sơn',
    'Lào Cai',
    'Lâm Đồng',
    'Long An',
    'Nam Định',
    'Nghệ An',
    'Ninh Bình',
    'Ninh Thuận',
    'Phú Thọ',
    'Phú Yên',
    'Quảng Bình',
    'Quảng Nam',
    'Quảng Ngãi',
    'Quảng Ninh',
    'Quảng Trị',
    'Sóc Trăng',
    'Sơn La',
    'Tây Ninh',
    'Thái Bình',
    'Thái Nguyên',
    'Thanh Hóa',
    'Thừa Thiên Huế',
    'Tiền Giang',
    'TP Hồ Chí Minh',
    'Trà Vinh',
    'Tuyên Quang',
    'Vĩnh Long',
    'Vĩnh Phúc',
    'Yên Bái',
    'Bà Rịa - Vũng Tàu',
    'Bắc Ninh',
    'Bình Dương',
    'Bình Phước',
  ];
  return (
    <div
      className="pt-20 pb-20 text-white text-center relative"
      style={{ background: 'var(--red)' }}
    >
      <PaintBg src="https://nipponpaint.com.vn/themes/wosh_sub/assets/images/bg-paint/footer-top-red-paint.png" />
      <div className="container text-left">
        <div className="grid xl:grid-cols-4 gap-10 sm:grid-cols-2">
          {chunkArray(vietnamProvinces, 18).map((arr, i) => (
            <div key={i}>
              {arr.map((item, index) => (
                <p key={index} className="text-left m-2">
                  {item}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-xl mt-8">Tuyển dụng</p>
            <p className="mt-2" style={{ color: '#ddd' }}>
              Copyright © 2020 Nippon Paint. All Rights Reserved
            </p>
          </div>
          <div className="flex gap-10">
            <img
              src="https://nipponpaint.com.vn/themes/wosh_sub/assets/images/fb.png"
              alt=""
            />
            <img
              src="https://nipponpaint.com.vn/themes/wosh_sub/assets/images/yb.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
