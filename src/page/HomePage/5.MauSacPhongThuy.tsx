import { Select } from 'antd';
import {} from 'react';
import PaintBg from './PaintBg';

type Props = {};

const MauSacPhongThuy = ({}: Props) => {
  const options = [
    {
      label: 'Tuổi Tí',
      value: 1,
    },
    {
      label: 'Tuổi Sửu',
      value: 2,
    },
    {
      label: 'Tuổi Dần',
      value: 3,
    },
    {
      label: 'Tuổi Mão',
      value: 4,
    },
    {
      label: 'Tuổi Thìn',
      value: 5,
    },
    {
      label: 'Tuổi Tỵ',
      value: 6,
    },
    {
      label: 'Tuổi Ngọ',
      value: 7,
    },
    {
      label: 'Tuổi Mùi',
      value: 8,
    },
    {
      label: 'Tuổi Thân',
      value: 9,
    },
    {
      label: 'Tuổi Dậu',
      value: 10,
    },
    {
      label: 'Tuổi Tuất',
      value: 11,
    },
    {
      label: 'Tuổi Hợi',
      value: 12,
    },
  ];

  const imgs = [
    'https://nipponpaint.com.vn/sites/default/files/styles/437x291/public/2023-02/cof_2023_web_banner-01.png?itok=FydNPIG-',
    'https://nipponpaint.com.vn/sites/default/files/styles/437x291/public/2023-02/1.png?itok=ZoqIm-pU',
    'https://nipponpaint.com.vn/sites/default/files/styles/437x291/public/2023-02/1b.png?itok=gb597BSM',
  ];
  return (
    <div
      className="pt-24 pb-48 text-white text-center relative"
      style={{ background: 'var(--light-blue)' }}
    >
      <PaintBg src="https://nipponpaint.com.vn/themes/wosh_sub/assets/images/top-bluegr-paint.png" />
      <div className="container">
        <p className="font-bold text-4xl my-4">MÀU SẮC PHONG THỦY</p>
        <p className="font-bold">
          Mang thịnh vượng và hạnh phúc đến cho ngôi nhà của bạn với những màu
          sắc Phong Thủy may mắn năm 2022 của Sơn Nippon. Khám phá những lựa
          chọn màu sắc tốt lành và phù hợp nhất cho tuổi của bạn với lời khuyên
          của chuyên gia phong thủy: Tan Khoon Yong, Goh Guang Leong, Mark Tan
        </p>
        <Select options={options} className="w-80 mt-6" size="large"></Select>
        <div className="flex gap-8 mt-8">
          {imgs.map((i, index) => (
            <img src={i} key={index} className="w-1/3 object-cover" />
          ))}
        </div>
        <button className="btn-light-blue mt-8">Tìm hiểu thêm</button>
      </div>
    </div>
  );
};

export default MauSacPhongThuy;
