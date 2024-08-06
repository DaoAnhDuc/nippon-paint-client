import {} from 'react';

type Props = {};

const HoTro = ({}: Props) => {
  return (
    <div className="text-black text-center relative">
      <div
        style={{
          backgroundColor: 'var(--sliver)',
          maskPosition: 'top center',
          maskSize: 'cover',
          maskImage: `url(https://nipponpaint.com.vn/themes/wosh_sub/assets/images/bot-paint.svg)`,
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
      <img
        className="w-full"
        src="https://nipponpaint.com.vn/themes/wosh_sub/assets/images/bg-support.png"
        alt=""
      />
      <div
        className="container text-black absolute"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-1/2 float-right">
          <p className="text-6xl font-bold" style={{ color: '#cc0000' }}>
            HỖ TRỢ
          </p>
          <div
            className="w-96 my-6 mx-auto"
            style={{ borderBottom: '1px solid #a0a6af' }}
          />
          <p className="text-lg">
            Hô biến ngôi nhà của bạn trở nên đầy màu sắc
          </p>
          <div className="mt-6">
            <button className="btn-blue-2 w-72 h-12">
              Tính toán lượng sơn
            </button>
          </div>
          <div className="mt-6">
            <button className="btn-blue-2 w-72 h-12">Mẹo sơn nhà</button>
          </div>
          <div className="mt-6">
            <button className="btn-blue-2 w-72 h-12">Hỗ trợ phối màu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoTro;
