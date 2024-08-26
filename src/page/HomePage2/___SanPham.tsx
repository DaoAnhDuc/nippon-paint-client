import {} from 'react';

type Props = {};

const SanPham = ({}: Props) => {
  const sonoto: Array<any> = [
    {
      img: 'https://product.hstatic.net/1000109642/product/gen_303_urethane_primer_grey_f22810997a3c403c9318b933d1ca1004_large.jpg',
      text: 'GEN 303 Urethane Primer Grey',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/gen_690_fast_dry_clear_coat_444abdf579d1488180e0834f7b6a730d_large.jpg',
      text: 'Gen 690 Fast Dry Clear Coat',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/nax_2200_2k_primer_grey_c0b4644ce0b749a28a446193b37d19a5_large.png',
      text: 'Nax 2200 2K Primer Grey',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/nax_2400_2k_urethane_primer_grey_f98acf1c85914f919433ebe443795e4e_large.jpg',
      text: 'NAX 2400 2K URETHANE PRIMER GREY',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/nax_crystal_9905_mirror_image_clear_2k_cabd6340c16e4bf9b8352612ae77e4c9_large.jpg',
      text: 'NAX CRYSTAL 9905 MIRROR CLEAR',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/nax_e3_wb-02_e3584c06c59b4c37964919e7776a7f6f_large.png',
      text: 'NAX E3 WB',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/nax_pp_primer_e457bab6d0f7479ab7ab466eadeb6cd5_large.jpg',
      text: 'NAX PP PRIMER',
    },

    {
      img: 'https://product.hstatic.net/1000109642/product/nax_premila_2k_a37002909a75421ab77d3a34d30f1467_large.jpg',
      text: 'NAX PREMILA 2K',
    },
  ];

  const vattuphutro: Array<any> = [
    {
      img: 'https://product.hstatic.net/1000109642/product/car_brite_black_p_c_c49a6d082d4f479d8c85177eea566863_80dbc22ffa2d416eaf0fe1f1da02ff1a_large.jpg',
      text: 'BLACK PEARL CERAMIC COATING KIT  - Bộ sản phẩm phủ Cerami...',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/black-pearl-speed-spray_38ae0611adcc4ec5b7582b8080b7649b_b6f7a18e98b34ef09d4cead316b7bff7_large.png',
      text: 'BLACK PEARL SIO2 SPRAY - Dung dịch xịt phủ bảo dưỡng lớp ...',
    },
  ];

  const chamsocoto: Array<any> = [
    {
      img: 'https://product.hstatic.net/1000109642/product/black-pearl-speed-spray_38ae0611adcc4ec5b7582b8080b7649b_b6f7a18e98b34ef09d4cead316b7bff7_large.png',
      text: 'BLACK PEARL SIO2 SPRAY - DUNG DỊCH XỊT PHỦ BẢO DƯỠNG LỚP ...',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/bumper-kote_e861b173fe334e86b734adb442c04761_d524fa7eead143cbbe8a8f8af648bd94_large.jpg',
      text: 'BUMPER KOTE - GEL DƯỠNG PHỤC HỒI NHỰA NGOẠI THẤT CAR BRITE',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/brite-stik-purple_9b0cd2a768fe4c2289235b3aee2b8f14_f1eb1aabae8e4626925ae543d4439f21_large.jpg',
      text: 'CAR BRITE BRITE STIK 8 OZ. PURPLE CLAY WITH TUB - ĐẤT SÉT...',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/tire-and-trim-dressing_6bc130f3ba7c47a8af1447503b3d4dc6_7c69c697cafd43fc87ae0527ceb7490d_large.jpg',
      text: 'CB SELCET TIRE & TRIM DRSG -  DUNG DỊCH PHỦ DƯỠNG LỐP VÀ ...',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/all-purpose-dressing_79ea8c2c28dc410e99e277df6baff2a2_e30c84517eb9475a9991a3368cf029c6_large.jpg',
      text: 'CB SELECT ALL PURPOSE DRESSING - DUNG DỊCH DƯỠNG ĐA NĂNG ...',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/car-soap-5gal_3af7d5059b86483ab8a12dfeaf689a20_9c54b98ba1f44127ab1350fc61b435d3_large.jpg',
      text: 'CB SELECT CAR SOAP - DUNG DỊCH RỬA XE TRUNG TÍNH GỐC NƯỚC...',
    },
    {
      img: 'https://product.hstatic.net/1000109642/product/select-cutting-compound_7f41838103a24424a5b386f8cb54810c_8739bed45c07462384425dfcdc2582dd_large.jpg',
      text: 'CB SELECT COMPOUND - XI ĐÁNH BÓNG CAO CẤP BƯỚC 1 SELECT',
    },
  ];

  return (
    <div className="mt-20 mb-20 container" id="san-pham">
      <p className="text-4xl text-center font-bold uppercase">Sản phẩm</p>
      <div className="flex mt-8  rounded-2xl" style={{ background: '#eeeeee' }}>
        <div style={{ flex: 1 }}>
          <div className="pl-10 w-full bg-white">
            <img src="/images/print_pink.png" alt="" />
          </div>
          <div
            className="w-full rounded-2xl"
            style={{ background: '#eeeeee', height: 350 }}
          >
            <div className="p-12">
              <p>
                <span className="text-3xl text-blue-500 font-bold">
                  01. Sơn ô tô
                </span>
              </p>
              <p className="text-xl text-justify mt-4 line-clamp-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto adipisci iste rem nesciunt eligendi totam fugit ipsam
                enim provident quo? Molestias reiciendis deserunt voluptatum
                voluptate ut libero cum recusandae praesentium.
              </p>
              <button className="bg-blue-500 text-white font-bold text-xl px-8 py-2 rounded-md mt-4">
                Xem thêm
              </button>
            </div>
          </div>
        </div>
        <div
          className="rounded-2xl p-4 flex flex-wrap gap-4"
          style={{
            flex: 2,
            height: 640,
            background: '#f176ac',
            marginRight: 20,
          }}
        >
          {sonoto.slice(0, 6).map((i, index) => (
            <div
              key={index}
              className="relative sanpham-item"
              style={{
                width: 'calc((100% - 2rem)/3)',
                height: 'calc((100% - 1rem)/2)',
                overflow: 'hidden',
              }}
            >
              <img
                src={i.img}
                className="w-full h-full object-contain bg-white rounded-2xl"
              />
              <div className="description absolute inset-0  flex items-center justify-center p-8 rounded-2xl">
                <div
                  className="bg-white text-pink-600 font-bold  text-center text-xl py-1 px-2"
                  style={{
                    boxShadow:
                      '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                  }}
                >
                  {i.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex flex-row-reverse mt-24  rounded-2xl"
        style={{ background: '#eeeeee' }}
      >
        <div style={{ flex: 1 }}>
          <div className="pl-10 w-full bg-white">
            <img src="/images/print_orange.png" alt="" />
          </div>
          <div
            className="w-full rounded-2xl"
            style={{ background: '#eeeeee', height: 350 }}
          >
            <div className="p-12">
              <p>
                <span className="text-3xl text-blue-500 font-bold">
                  02. Vật tư phụ trợ
                </span>
              </p>
              <p className="text-xl text-justify mt-4 line-clamp-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto adipisci iste rem nesciunt eligendi totam fugit ipsam
                enim provident quo? Molestias reiciendis deserunt voluptatum
                voluptate ut libero cum recusandae praesentium.
              </p>
              <button className="bg-blue-500 text-white font-bold text-xl px-8 py-2 rounded-md mt-4">
                Xem thêm
              </button>
            </div>
          </div>
        </div>
        <div
          className="rounded-2xl p-4 flex flex-wrap gap-4"
          style={{
            flex: 2,
            height: 640,
            background: '#f49a78',
          }}
        >
          {vattuphutro.slice(0, 6).map((i, index) => (
            <div
              key={index}
              className="relative sanpham-item"
              style={{
                width: 'calc((100% - 2rem)/3)',
                height: 'calc((100% - 1rem)/2)',
                overflow: 'hidden',
              }}
            >
              <img
                src={i.img}
                className="w-full h-full object-contain bg-white rounded-2xl"
              />
              <div className="description absolute inset-0  flex items-center justify-center p-8 rounded-2xl">
                <div
                  className="bg-white text-pink-600 font-bold  text-center text-xl py-1 px-2"
                  style={{
                    boxShadow:
                      '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                  }}
                >
                  {i.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex mt-24  rounded-2xl"
        style={{ background: '#eeeeee' }}
      >
        <div style={{ flex: 1 }}>
          <div className="pl-10 w-full bg-white">
            <img src="/images/print_green.png" alt="" />
          </div>
          <div
            className="w-full rounded-2xl"
            style={{ background: '#eeeeee', height: 350 }}
          >
            <div className="p-12">
              <p>
                <span className="text-3xl text-blue-500 font-bold">
                  03. Chăm sóc ô tô
                </span>
              </p>
              <p className="text-xl text-justify mt-4 line-clamp-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto adipisci iste rem nesciunt eligendi totam fugit ipsam
                enim provident quo? Molestias reiciendis deserunt voluptatum
                voluptate ut libero cum recusandae praesentium.
              </p>
              <button className="bg-blue-500 text-white font-bold text-xl px-8 py-2 rounded-md mt-4">
                Xem thêm
              </button>
            </div>
          </div>
        </div>
        <div
          className="rounded-2xl p-4 flex flex-wrap gap-4"
          style={{
            flex: 2,
            height: 640,
            background: '#b7da88',
            marginRight: 20,
          }}
        >
          {chamsocoto.slice(0, 6).map((i, index) => (
            <div
              key={index}
              className="relative sanpham-item"
              style={{
                width: 'calc((100% - 2rem)/3)',
                height: 'calc((100% - 1rem)/2)',
                overflow: 'hidden',
              }}
            >
              <img
                src={i.img}
                className="w-full h-full object-contain bg-white rounded-2xl"
              />
              <div className="description absolute inset-0  flex items-center justify-center p-8 rounded-2xl">
                <div
                  className="bg-white text-pink-600 font-bold  text-center text-xl py-1 px-2"
                  style={{
                    boxShadow:
                      '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                  }}
                >
                  {i.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SanPham;
