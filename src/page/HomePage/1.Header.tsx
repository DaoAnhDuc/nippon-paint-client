import {} from 'react';
import './1.scss';
type Props = {};

const HeaderHome = ({}: Props) => {
  return (
    <div id="header-home" style={{ zIndex: 10, background: '#fff' }}>
      <div className="container">
        <img
          src="https://theme.hstatic.net/1000109642/1000599395/14/aboutus_img_author.jpg?v=155"
          alt=""
        />
        <div className="menu">
          <div className="text-lg font-bold">Trang chủ</div>
          <div className="text-lg font-bold">Giới thiệu</div>
          <div className="text-lg font-bold">Sản phẩm</div>
          <div className="text-lg font-bold">Dịch vụ kỹ thuật</div>
        </div>
        <div style={{ flex: 1 }} />
        <div className="menu-sub">
          <div className="text-lg font-bold">Đối tác toàn cầu</div>
          <div className="text-lg font-bold">Tin tức - sự kiện</div>
          <div className="text-lg font-bold">Liên hệ</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
