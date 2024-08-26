import {} from 'react';

type Props = {};

const TinTucSuKien = ({}: Props) => {
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
    <div className="mt-20 mb-20">
      <div className="container">
        <p className="font-bold text-4xl text-center">TIN TỨC SỰ KIỆN</p>
        <div
          className="grid grid-cols-2 gap-3 p-8 mt-0 text-black rounded-3xl"
          style={{ background: '#fff' }}
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
    </div>
  );
};

export default TinTucSuKien;
