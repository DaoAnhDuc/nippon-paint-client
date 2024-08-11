import {} from 'react';

type Props = {};

const DichVuKyThuat = ({}: Props) => {
  const data = [
    {
      src: 'https://nipponpaint.com.vn/sites/default/files/2019-04/son-trang-tri-img.jpg',
      title: 'Sơn trang trí',
    },
    {
      src: 'https://nipponpaint.com.vn/sites/default/files/2019-04/son-dan-dung-img.jpg',
      title: 'Sơn dân dụng',
    },
    {
      src: 'https://nipponpaint.com.vn/sites/default/files/2019-04/son-cong-nghiep-img-1.jpg',
      title: 'Chất phủ công nghiệp',
    },
  ];
  return (
    <div
      className="pt-24 pb-48 text-white  relative"
      style={{ background: '#5d98d1' }}
    >
      {/* <PaintBg src="https://nipponpaint.com.vn/themes/wosh_sub/assets/images/top-bluegr-paint.png" /> */}
      <div
        style={{
          backgroundColor: '#5d98d1',
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
        <p className="font-bold text-4xl my-4 text-center">DỊCH VỤ KỸ THUẬT</p>
        <p className="font-bold text-3xl mt-8">Dịch vụ hỗ trợ</p>
        <div className="grid grid-cols-3 gap-8 mt-4">
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.src} className="w-full" alt="" />
              <p className="text-center mt-2 text-lg">{item.title}</p>
            </div>
          ))}
        </div>
        <p className="font-bold text-3xl mt-8">Hướng dẫn kỹ thuật</p>
        <div className="grid grid-cols-3 gap-8 mt-4">
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.src} className="w-full" alt="" />
              <p className="text-center mt-2 text-lg">{item.title}</p>
            </div>
          ))}
        </div>
        <p className="font-bold text-3xl mt-8">Dụng cụ pha màu</p>
        <div className="grid grid-cols-3 gap-8 mt-4">
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.src} className="w-full" alt="" />
              <p className="text-center mt-2 text-lg">{item.title}</p>
            </div>
          ))}
        </div>
        {/* <div className="mx-auto">
          <button className="btn-light-blue mt-8 mx-auto">Tìm hiểu thêm</button>
        </div> */}
      </div>
    </div>
  );
};

export default DichVuKyThuat;
