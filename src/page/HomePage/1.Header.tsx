import {} from 'react';
import './1.scss';
type Props = {};

const HeaderHome = ({}: Props) => {
  return (
    <div id="header-home" style={{ zIndex: 10, background: '#fff' }}>
      <div className="container">
        <img
          src="https://nipponpaint.com.vn/sites/default/files/GLD21_home_logo.png"
          alt=""
        />
        <div className="menu">
          <div className="text-lg font-bold">Màu sắc</div>
          <div className="text-lg font-bold">Sản phẩm</div>
          <div className="text-lg font-bold">Hỗ trợ</div>
          <div className="text-lg font-bold">Tìm đại lý</div>
        </div>
        <div style={{ flex: 1 }} />
        <div className="menu-sub">
          <div className="text-lg font-bold">Giới thiệu</div>
          <div className="text-lg font-bold">Tin tức</div>
          <div className="text-lg font-bold">Liên hệ</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
