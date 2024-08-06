import { } from 'react';

type Props = {};

const MauSacPhongThuy = ({}: Props) => {
  return (
    <div
      className="pt-24 pb-48 text-white  relative"
      style={{ background: '#083a8d' }}
    >
      {/* <PaintBg src="https://nipponpaint.com.vn/themes/wosh_sub/assets/images/top-bluegr-paint.png" /> */}
      <div
        style={{
          backgroundColor: '#083a8d',
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
        <p className="font-bold text-3xl mt-8">Hướng dẫn kỹ thuật</p>
        <p className="font-bold text-3xl mt-8">Dụng cụ pha màu</p>
        <button className="btn-light-blue mt-8">Tìm hiểu thêm</button>
      </div>
    </div>
  );
};

export default MauSacPhongThuy;
