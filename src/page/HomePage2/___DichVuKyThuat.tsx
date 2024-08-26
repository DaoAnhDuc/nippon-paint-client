import { useRef } from 'react';
import useSize from '../../hook/useSize';

type Props = {};

const DichVuKyThuat = ({}: Props) => {
  const target = useRef(null);
  const size: any = useSize(target);
  const data = [
    {
      title: 'Dịch vụ kỹ thuật',
      img: 'https://caodangbachkhoa.com.vn/wp-content/uploads/2019/12/cong-nghe-o-to-htt.edu_.vn_.jpg',
      color: '#0b8c8c',
    },
    {
      title: 'Hướng dẫn kỹ thuật',
      img: 'https://cdn.thuvienphapluat.vn/uploads/Hoidapphapluat/2024/NTH/16022024/xay-dung.jpg',
      color: '#ff9800',
    },
    {
      title: 'Dụng cụ pha màu',
      img: 'https://carpla.vn/blog/wp-content/uploads/2023/11/cach-pha-mau-son-xe-o-to-5.jpg',
      color: '#8bc34a',
    },
    {
      title: 'Dịch vụ khác',
      img: 'https://apcarcare.vn/wp-content/uploads/2020/01/hinh3-phuong-phap-tay-bui-son-cho-xe-o-to-dung-chuan.jpg',
      color: '#ff5722',
    },
  ];
  const width = size?.width / 4;
  const height = (width * 9) / 14;
  return (
    <div>
      <p className="text-4xl text-center font-bold uppercase">
        DỊCH VỤ KỸ THUẬT
      </p>
      <div className={`grid grid-cols-2 text-white  mt-8`} ref={target}>
        {' '}
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center flex-wrap"
            style={{
              background: '#ccc',
              flexDirection: index > 1 ? 'row-reverse' : 'row',
            }}
          >
            <div className="" style={{ width, height }}>
              <img
                src={item.img}
                className="h-full w-full object-cover bg-white"
              />
            </div>
            <div
              style={{ width, height, background: item.color }}
              className="py-4 px-6 flex flex-col items-start justify-start"
            >
              <p className="font-bold text-3xl mt-4 md:text-xl">{item.title}</p>
              <p className="line-clamp-5 mt-4 md:line-clamp-3 sm:hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                amet rem impedit voluptatem ratione ipsam reiciendis expedita
                placeat possimus esse modi vero, natus officiis nostrum
                inventore autem saepe dolore. Cumque!
              </p>
              <button className="bg-slate-300 text-slate-700 px-4 py-1 rounded-md mt-4">
                Xem thêm
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DichVuKyThuat;
