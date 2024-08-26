import {} from 'react';
import './1.scss';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
type Props = {};

const HeaderHome = ({}: Props) => {
  return (
    <>
      <div
        id="header-home-1"
        className="text-white "
        style={{ background: '#cc0000' }}
      >
        <div className="container menu-sub flex justify-end">
          <div className="">Giới thiệu</div>
          <div className="">Tin tức - sự kiện</div>
          <div className="">Liên hệ</div>
        </div>{' '}
      </div>
      <div
        id="header-home-2"
        style={{ zIndex: 10, background: '#fff', position: 'sticky', top: 0 }}
      >
        <div className="container" style={{}}>
          <img
            src="https://theme.hstatic.net/1000109642/1000599395/14/aboutus_img_author.jpg?v=155"
            alt=""
          />
          <div className="menu">
            <div className="text-lg font-bold cursor-pointer">Trang chủ</div>
            <div className="text-lg font-bold cursor-pointer">Sản phẩm</div>
            <div className="text-lg font-bold cursor-pointer">
              Dịch vụ kỹ thuật
            </div>
          </div>
          <div style={{ flex: 1 }} />
          <div className="menu-sub" style={{gap:10}}>
            {/* <div className="text-lg font-bold">Đối tác toàn cầu</div> */}
            <Button icon={<SearchOutlined />} type="text"/>
            <Select
              style={{ width: 120, border: 'none' }}
              options={[
                {
                  label: 'Tiếng Việt',
                  value: 'VI',
                },
                {
                  label: 'English',
                  value: 'EN',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderHome;
