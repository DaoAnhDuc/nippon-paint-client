import {} from 'react';

type Props = {};
const COLOR = 'var(--red)';
const Footer = ({}: Props) => {
  return (
    <div
      className="py-20 text-white relative w-full p-0 m-0"
      style={{
        // backgroundImage:
        //   'url("https://theme.hstatic.net/1000109642/1000599395/14/ft_bg_img.jpg?v=155")',
        // backgroundSize: 'cover',
        background: COLOR,
      }}
    >
      <div
        style={{
          backgroundColor: COLOR,
          maskPosition: 'top center',
          maskSize: 'cover',
          maskImage: `url(./images/mask.png)`,
          position: 'absolute',
          top: -75,
          width: '100%',
          display: 'block',
          height: 120,
          zIndex: 1,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
        }}
      />
      <div className="container grid grid-cols-3 gap-16">
        <div className="col-span-1">
          <p className="text-3xl text-yellow-500 font-bold">SG INVEST</p>
          <p className="font-bold mt-4">
            NHÀ PHÂN PHỐI SƠN NIPPON VÀ CÁC SẢN PHẨM CHĂM SÓC XE CHẤT LƯỢNG CAO
          </p>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-4 h-4 text-yellow-500">
              <svg
                className="svg-inline--fa fa-map-marker-alt fa-w-12"
                aria-hidden="true"
                data-prefix="fas"
                data-icon="map-marker-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                />
              </svg>
            </div>
            <p>
              số 23J2 đường DD5, Khu Dân cư An Sương, P. Tân Hưng Thuận, Quận
              12, TP.HCM
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-4 h-4 text-yellow-500">
              <span className="ft-contact-icon">
                <svg
                  className="svg-inline--fa fa-phone fa-w-16"
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="phone"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M493.397 24.615l-104-23.997c-11.314-2.611-22.879 3.252-27.456 13.931l-48 111.997a24 24 0 0 0 6.862 28.029l60.617 49.596c-35.973 76.675-98.938 140.508-177.249 177.248l-49.596-60.616a24 24 0 0 0-28.029-6.862l-111.997 48C3.873 366.516-1.994 378.08.618 389.397l23.997 104C27.109 504.204 36.748 512 48 512c256.087 0 464-207.532 464-464 0-11.176-7.714-20.873-18.603-23.385z"
                  />
                </svg>
              </span>
            </div>
            <p>(+8428) 2253.5829</p>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-4 h-4 text-yellow-500">
              <span className="ft-contact-icon">
                <svg
                  className="svg-inline--fa fa-envelope fa-w-16"
                  aria-hidden="true"
                  data-prefix="fas"
                  data-icon="envelope"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  data-fa-i2svg=""
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  />
                </svg>
              </span>
            </div>
            <p>contact@sginvest.com.vn</p>
          </div>
        </div>
        <div className="col-span-2">
          <p className="font-bold text-2xl ">Liên hệ</p>
          <p className="text-yellow-500 font-bold text-xl mt-4">
            Công Ty Cổ Phần Đầu Tư Công Nghiệp Sài Gòn Invest (SG INVEST)
          </p>
          <ul className="list-disc pl-8">
            <li className="mt-2">
              Địa chỉ văn phòng: 23J2, DD5, KDC An Sương, Tổ 10 KP1, Phường Tân
              Hưng Thuận, Quận 12, Thành phố Hồ Chí Minh
            </li>
            <li className="mt-2">Mã số thuế: 0315375186</li>
            <li className="mt-2">
              Địa chỉ theo MST: Văn phòng 4.01, Tầng 4, Tòa nhà The Prince
              Residence, số 19 - 21 Nguyễn Văn Trỗi, Phường 11, Quận Phú Nhuận,
              Thành phố Hồ Chí Minh, Việt Nam
            </li>
            <li className="mt-2">Ngày hoạt động: 09/11/2018</li>
            <li className="mt-2"> Giấy phép kinh doanh: 0315375186</li>
            <li className="mt-2">
              Lĩnh vực: Bán buôn vật liệu, thiết bị lắp đặt khác trong xây dựng
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
