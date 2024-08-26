import { SearchOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import {} from 'react';

type Props = {};

const Header = ({}: Props) => {
  return (
    <div
      className="container top-4 fixed z-10 left-1/2 -translate-x-1/2 flex rounded-xl bg-white"
      style={{ color: 'var(--white)' }}
    >
      <img
        className="h-24 bg-white p-2 rounded-tl-xl rounded-bl-xl"
        src="https://theme.hstatic.net/1000109642/1000599395/14/aboutus_img_author.jpg?v=155"
        alt=""
      />
      <div
        className="flex items-center justify-between w-full"
        style={{
          background: 'linear-gradient(to right,#e66465, #9198e5)',
        }}
      >
        <div className="flex items-center gap-10 pl-16">
          <div className="text-lg font-bold cursor-pointer">Trang chủ</div>
          <div className="text-lg font-bold cursor-pointer">Sản phẩm</div>
          <div className="text-lg font-bold cursor-pointer">
            Dịch vụ kỹ thuật
          </div>
          <div className="text-lg font-bold cursor-pointer">
            Tin tức sự kiện
          </div>
          <div className="text-lg font-bold cursor-pointer">Liên hệ</div>
        </div>
        <div style={{ flex: 1 }} />
        <div className="flex items-center pr-16" style={{ gap: 10 }}>
          <Button
            icon={
              <SearchOutlined
                className="scale-150 "
                style={{ color: 'var(--white)' }}
              />
            }
            type="text"
          />
          <Select
            value={'VI'}
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
  );
};

export default Header;
