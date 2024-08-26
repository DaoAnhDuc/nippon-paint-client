type Props = {};
const COLOR = '#cba299';
const TinTucSuKien = ({}: Props) => {
  // const data = [
  //   {
  //     color: '#cba299',
  //     text: 'NP N 3372P',
  //     img: 'https://nipponpaint.com.vn/sites/default/files/
  // inline-images/z4881817488418_69792bff65b0bc260890bce40da8cab0_1.jpg',
  //   },
  //   {
  //     color: '#efda71',
  //     text: 'NP YO 1091T',
  //     img: 'https://nipponpaint.com.vn/sites/default/files/
  // inline-images/z4881817516739_cf54f139c8913671ec252529daa4ddfb_1.jpg',
  //   },
  //   {
  //     color: '#6ed1d4',
  //     text: 'NP BGG 2742P',
  //     img: 'https://nipponpaint.com.vn/sites/default/files/
  // inline-images/z4881817502657_e4921469c67eff4a1f2972300f18adfd.jpg',
  //   },
  //   {
  //     color: '#dbc4ad',
  //     text: 'NP N 3195P',
  //     img: 'https://nipponpaint.com.vn/sites/default/files/
  // inline-images/z4881817516693_f1642168f0ee103aafb8d923446de79a_1.jpg',
  //   },
  //   {
  //     color: '#bdd888',
  //     text: 'NP BGG 1672T',
  //     img: 'https://nipponpaint.com.vn/sites/default/files/
  // inline-images/z4881817474070_23cb4d6f54a9fbe27c47159174af5455.jpg',
  //   },
  // ];
  // const [activeIndex, _setActiveIndex] = useState(0);
  // const listImage = data.map((i) => i.img);
  // const activeItem: any = data[activeIndex];

  const data: Array<any> = [
    {
      title: 'Hiện trường vụ rơi máy bay thảm khốc ở Brazil',
      description:
        'Máy bay ATR-72-500 của hãng Voepass (Brazil) rơi với tốc độ 237  km/h, mất 5.000 m độ cao chỉ trong hơn 1 phút.',
      img: 'https://osky.1cdn.vn/thumbs/900x600/2024/08/10/guj6ypfxeaaq6qn.jpeg',
    },
    {
      title: 'Thủ tục cần biết cho khách đi máy bay',
      description: '',
      img: 'https://osky.1cdn.vn/thumbs/900x600/2024/08/08/opensky_5648481830190_d6afac973fbed380f04fe4d021a1d2c2.jpg',
    },
    {
      title: 'Máy bay cũng có quốc tịch',
      description: '',
      img: 'https://osky.1cdn.vn/thumbs/900x600/2024/08/09/opensky_z62_7592-215a40c019d09e0ab87e9175c3eaeab7.jpg',
    },
    {
      title: 'Biển Đà Nẵng lọt top đẹp nhất thế giới',
      description: '',
      img: 'https://osky.1cdn.vn/thumbs/900x600/2024/08/08/1672740553-bai-bien-my-khe-dia-diem-du-lich-da-nang-attdad03-14-1-(1).jpeg',
    },
    {
      title:
        'Lý do ít chuyến bay ngang qua eo biển Drake - vùng biệt lập ở Nam Cực',
      description: '',
      img: 'https://osky.1cdn.vn/thumbs/900x600/2024/08/05/antartica-air-cruise-express-air.jpg',
    },
  ];
  return (
    <div
      className="pt-16 pb-48 text-white relative"
      style={{ background: COLOR }}
    >
      <div
        style={{
          backgroundColor: COLOR,
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
        <p className="font-bold text-4xl mb-16 text-center">TIN TỨC SỰ KIỆN</p>
        <div
          className="grid grid-cols-2 gap-3 p-8  text-white rounded-3xl"
          style={{ background: '#d3a9a0' }}
        >
          <div className="pr-3" style={{ borderRight: '1px solid #dfdfdf42' }}>
            <img src={data[0].img} alt="" className="w-full" />
            <p className="font-bold text-2xl mt-2">{data[0].title}</p>
            <p className="mt-2">{data[0].description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {data.splice(1, 4).map((item: any, index: number) => (
              <div key={index}>
                {index !== 0 && index !== 1 && (
                  <hr
                    className="pb-4"
                    style={{
                      borderColor: '#dfdfdf42',
                      width: '80%',
                      margin: 'auto',
                    }}
                  />
                )}
                <img src={item.img} alt="" className="w-full" />
                <p className="font-bold mt-2">{item.title}</p>
              </div>
            ))}
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

export default TinTucSuKien;
