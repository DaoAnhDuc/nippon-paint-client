type Props = {};

const XuHuongMauSac = ({}: Props) => {
  // const data = [
  //   {
  //     color: '#cba299',
  //     text: 'NP N 3372P',
  //     img: 'https://nipponpaint.com.vn/sites/default/files/inline-images/z4881817488418_69792bff65b0bc260890bce40da8cab0_1.jpg',
  //   },
  //   {
  //     color: '#efda71',
  //     text: 'NP YO 1091T',
  //     img: 'https://nipponpaint.com.vn/sites/default/files/inline-images/z4881817516739_cf54f139c8913671ec252529daa4ddfb_1.jpg',
  //   },
  //   {
  //     color: '#6ed1d4',
  //     text: 'NP BGG 2742P',
  //     img: 'https://nipponpaint.com.vn/sites/default/files/inline-images/z4881817502657_e4921469c67eff4a1f2972300f18adfd.jpg',
  //   },
  //   {
  //     color: '#dbc4ad',
  //     text: 'NP N 3195P',
  //     img: 'https://nipponpaint.com.vn/sites/default/files/inline-images/z4881817516693_f1642168f0ee103aafb8d923446de79a_1.jpg',
  //   },
  //   {
  //     color: '#bdd888',
  //     text: 'NP BGG 1672T',
  //     img: 'https://nipponpaint.com.vn/sites/default/files/inline-images/z4881817474070_23cb4d6f54a9fbe27c47159174af5455.jpg',
  //   },
  // ];
  // const [activeIndex, _setActiveIndex] = useState(0);
  // const listImage = data.map((i) => i.img);
  // const activeItem: any = data[activeIndex];
  return (
    <div
      className="pt-16 pb-48 text-black relative"
      style={{ background: '#f5f5f5' }}
    >
      <div
        style={{
          backgroundColor: '#f5f5f5',
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
        <p className="font-bold text-4xl my-4 text-center">TIN TỨC SỰ KIỆN</p>
        <div className="grid xl:grid-cols-4  sm:grid-cols-2 gap-8 mt-16">
          <div className="col-span-1">
            <div className="px-4">
              {[1, 2, 3,].map((i) => (
                <div key={i} className="mb-6 flex flex-col gap-2">
                  <img
                    className="w-full h-60"
                    src="https://file.hstatic.net/1000109642/article/xe-mau-trang-phong-thuy_7fa210d056404f2a901cda1e0ee99746_large.jpg"
                    alt=""
                  />
                  <div className="text-sm">
                    <p className="opacity-80">Thể loại</p>
                    <p className="font-bold ">
                      CHỌN MÀU XE HỢP TUỔI THEO THUYẾT NGŨ HÀNH CỦA ĐẤT TRỜI
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div className="flex gap-4 mb-6" key={i}>
                <img
                  className="w-60 h-40"
                  src="https://file.hstatic.net/1000109642/article/xe-mau-trang-phong-thuy_7fa210d056404f2a901cda1e0ee99746_large.jpg"
                  alt=""
                />
                <div>
                  <p className="opacity-80">Thể loại</p>
                  <p className="font-bold text-lg">
                    CHỌN MÀU XE HỢP TUỔI THEO THUYẾT NGŨ HÀNH CỦA ĐẤT TRỜI
                  </p>
                  <p className="mt-0 text-sm">
                    Chương trình Sáng kiến An toàn Giao thông Việt Nam năm 2024
                    đặt mục tiêu tìm kiếm giải pháp ứng dụng công nghệ trong
                    quản lý, cảnh báo, giảm thiểu tỷ lệ tai nạn giao thông.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-1">
            <div className="px-4" style={{ border: '1px solid #dfdfdf' }}>
              <p className="font-bold text-blue-700 text-xl my-4">
                Bài viết gần đây
              </p>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="mb-6 flex gap-2">
                  <img
                    className="w-28 h-20"
                    src="https://file.hstatic.net/1000109642/article/xe-mau-trang-phong-thuy_7fa210d056404f2a901cda1e0ee99746_large.jpg"
                    alt=""
                  />
                  <div className="text-sm">
                    <p className="opacity-80">Thể loại</p>
                    <p className="font-bold ">
                      CHỌN MÀU XE HỢP TUỔI THEO THUYẾT NGŨ HÀNH CỦA ĐẤT TRỜI
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container text-white">
        {/* <div className=" grid xl:grid-cols-2 gap-10 sm:grid-cols-1">
          <div
            className="flex flex-col items-center justify-center"
            style={{ padding: '0 16%' }}
          >
            <p className="text-lg">2024/25</p>
            <p className="text-5xl font-bold" style={{ lineHeight: '90px' }}>
              XU HƯỚNG <br />
              MÀU SẮC
            </p>
            <p className="text-lg font-bold">
              Những màu sắc nào đang được cả thế giới <br /> "phát cuồng"
            </p>
            <div
              className="my-8 mx-auto"
              style={{ borderBottom: '1px solid #ffffff33', width: '80%' }}
            />
            <div className="flex gap-5 justify-center">
              {data.map((i, index) => (
                
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="w-12 h-12 rounded-3xl cursor-pointer"
                  style={{
                    background: i.color,
                    boxShadow: '2px 3px 12px 0px rgba(51,51,51,0.3)',
                    border:
                      activeIndex === index ? '2px solid #fff' : 'transparent',
                    boxSizing: 'content-box',
                  }}
                />
              ))}
            </div>
            <p className="mt-8">{activeItem.text}</p>
          </div>
          <div>
            {listImage.map((i, index) => (
              <div
                key={index}
                style={{
                  display: activeIndex === index ? 'block' : 'none',
                  boxShadow: '0px 3px 20px 0px rgba(0,0,0,0.3)',
                  width: 'fit-content',
                  maxWidth: '96%',
                  margin: 'auto',
                }}
              >
                <img
                  src={i}
                  style={{
                    width: 590,
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: 442,
                    objectFit: 'cover',
                  }}
                  alt=""
                />
                <div className="p-4 bg-white text-black">
                  <p className="text-sm">
                    <b className="text-base font-bold">LƯU Ý:</b> Màu sắc trên
                    hình chịu ảnh hưởng của ánh sáng, thiết bị điện tử nên có
                    thể sai khác so với màu thực tế.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
      {/* <div
        style={{
          backgroundColor: '#f5f5f5',
          maskPosition: 'top center',
          maskSize: 'cover',
          maskImage: `url(./images/bot-paint.png)`,
          position: 'absolute',
          bottom: -80,
          width: '100%',
          display: 'block',
          height: 120,
          zIndex: 1,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      /> */}
    </div>
  );
};

export default XuHuongMauSac;
