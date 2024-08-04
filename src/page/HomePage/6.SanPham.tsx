import {} from 'react';
import PaintBg from './PaintBg';

type Props = {};

const SanPham = ({}: Props) => {
  const imgs = [
    {
      main: 'https://nipponpaint.com.vn/sites/default/files/2019-04/son-trang-tri-img.jpg',
      sub: 'https://nipponpaint.com.vn/sites/default/files/2019-04/son-trang-tri.png',
      text: 'Sơn trang trí',
    },
    {
      main: 'https://nipponpaint.com.vn/sites/default/files/2019-04/son-dan-dung-img.jpg',
      sub: 'https://nipponpaint.com.vn/sites/default/files/2019-04/son-dan-dung_0_0.png',
      text: 'Sơn dân dụng',
    },
    {
      main: 'https://nipponpaint.com.vn/sites/default/files/2019-04/son-cong-nghiep-img-1.jpg',
      sub: 'https://nipponpaint.com.vn/sites/default/files/2019-04/son-cong-nghiep.png',
      text: 'Sơn và chất phủ công nghiệp',
    },
  ];
  return (
    <div
      className="pt-24 pb-48 text-black text-center relative"
      style={{ background: 'var(--be)' }}
    >
      <PaintBg src="https://nipponpaint.com.vn/themes/wosh_sub/assets/images/top-yellowgr-paint.png" />
      <div className="container">
        <p className="font-bold text-4xl my-4">SẢN PHẨM</p>
        <p className="">của chúng tôi</p>
        <div className="flex justify-center gap-8 mt-8">
          {imgs.map((i, index) => (
            <div key={index} className="relative">
              <img src={i.main} className="h-52 object-cover" />
              <p className="font-bold mt-4 text-lg">{i.text}</p>
              <div
                className="absolute hover:scale-110"
                style={{ bottom: 20, right: -40 }}
              >
                <img src={i.sub} alt="" className="w-40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SanPham;
