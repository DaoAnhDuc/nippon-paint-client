import {} from 'react';

type Props = {};

const GioiThieu = ({}: Props) => {
  return (
    <div className="mt-20 mb-20">
      <div className="container text-black">
        <p className="text-4xl text-center font-bold">GIỚI THIỆU CÔNG TY </p>
        <div className="grid xl:grid-cols-2 gap-4 sm:grid-cols-1 mt-8">
          <div className="p-4">
            <p className="text-yellow-400 font-bold text-3xl">
              SGINVEST ĐƯỢC THÀNH LẬP
            </p>
            <p className="text-pink-700 font-bold text-2xl mt-4">TỪ NĂM 2018</p>
            <p className="font-bold text-lg mt-4">
              NHÀ PHÂN PHỐI HÀNG ĐẦU CÁC SẢN PHẨM CHĂM SÓC XE
            </p>
            <p className="mt-4 text-lg">
              Được thành lập từ năm 2018 bởi những người đam mê chăm sóc xe, SG
              INVEST nhà phân phối hàng đầu của các sản phẩm sơn Nippon, chăm
              sóc xe Car Brite, phủ Graphene và kính GP...
            </p>
            <p className="mt-4 text-lg">
              SG INVEST cung cấp một cách toàn diện các sản phẩm chăm sóc xe như
              sáp, chất đánh bóng, dung dịch vệ sinh xe, các hợp chất tẩy rửa,
              dung môi, sơn và thuốc nhuộm cho thị trường miền Nam.
            </p>
            <p className="mt-8 text-yellow-400 font-bold text-xl">SG INVEST</p>
            <img
              className="w-full max-w-72 mt-4"
              src="https://theme.hstatic.net/1000109642/1000599395/14/aboutus_img_author.jpg?v=155"
              alt=""
            />
          </div>
          <div className="flex justify-end items-center sm:justify-center">
            <img
              style={{ height: 480, maxWidth: '100%', objectFit: 'contain' }}
              src="https://theme.hstatic.net/1000109642/1000599395/14/aboutus_img.jpg?v=155"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GioiThieu;
