import { Disclosure } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container/Container';
import Footer from '../HomePage2/_____Footer';
import './style.scss';
type Props = {};

const HomePage3 = ({}: Props) => {
  const sonoto: Array<any> = [
    {
      img: 'https://www.toyota.com.vn/media/pbajlzb3/thu-tuc-doi-mau-son-xe-o-to-1.jpeg?width=740&height=494&mode=max',
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
  const navigation = [
    'Trang chủ',
    'Giới thiệu',
    'Sản phẩm',
    'Dịch vụ kỹ thuật',
    'Tin tức',
  ];

  const doitactoancau = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFWWHyNnoBqHYeLiBubm6MNcO8k3Jfyv1-A&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJ9Lh-J4SXsKSQe97RAKgibg6_qCjQkjGAA&s',
    'https://img.myloview.com/canvas-prints/bg-logo-initial-letter-logo-design-template-vector-illustration-700-180669450.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHpNBeIuqJI3TyLle8mZ1O7u_FgnqZne1GQ&s',
    'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062015/menzerna_0.png?itok=Pwoc3kC7',
  ];
  return (
    <div>
      {/* <HeaderHome />
      <Slide />
      <GioiThieuCty /> */}
      <div className="w-full">
        <nav className="container relative flex flex-wrap items-center justify-between mx-auto lg:justify-between xl:px-1">
          {/* Logo  */}
          <Link to="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 ">
              <span>
                <img
                  className="h-20"
                  src="https://theme.hstatic.net/1000109642/1000599395/14/aboutus_img_author.jpg?v=155"
                  alt=""
                />
              </span>
            </span>
          </Link>

          {/* get started  */}
          <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
            <div className="hidden mr-3 lg:flex nav__item">
              <Link
                to="/"
                className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
              >
                Liên hệ
              </Link>
            </div>
          </div>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        to="/"
                        className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100  focus:outline-none"
                      >
                        {item}
                      </Link>
                    ))}
                    <Link
                      to="/"
                      className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                    >
                      Liên hệ
                    </Link>
                  </>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    to="/"
                    className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md  hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none "
                  >
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div
        style={{
          backgroundImage:
            'url("https://farpaint.vn/wp-content/uploads/2020/05/banner-son-farpaint.jpg")',
        }}
      >
        <Container className="flex flex-wrap ">
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-3xl lg:leading-tight xl:text-4xl xl:leading-tight ">
                NHÀ PHÂN PHỐI HÀNG ĐẦU CÁC SẢN PHẨM CHĂM SÓC XE
              </h1>
              <p className="py-3 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl ">
                Được thành lập từ năm 2018 bởi những người đam mê chăm sóc xe,
                SG INVEST nhà phân phối hàng đầu của các sản phẩm sơn Nippon,
                chăm sóc xe Car Brite, phủ Graphene và kính GP...
              </p>
              {/* tslint:disable:max-line-length */}
              <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a
                  href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                  target="_blank"
                  rel="noopener"
                  className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
                >
                  Xem thêm
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div style={{ height: 617 }}>
              {/* <Image
              src={
                'https://theme.hstatic.net/1000109642/1000599395/14/aboutus_img.jpg?v=155'
              }
              width="616"
              height="617"
              className={'object-cover'}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            /> */}
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 ">
            Được <span className="text-indigo-600">2000+</span> khách hàng trên
            thế giới tin dùng
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            {doitactoancau.map((i, index) => (
              <div key={index} className="pt-2 text-gray-400 ">
                <img src={i} alt="" className="h-28" />
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Container>
        <div className="mt-16">
          <h3 className="text-gray-600 text-2xl font-medium">Sơn ô tô</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {sonoto.map((i, index) => (
              <div
                key={index}
                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
              >
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${i.img}')`,
                  }}
                >
                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">${i.text}</h3>
                  <span className="text-gray-500 mt-2">$12</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-gray-600 text-2xl font-medium">Vật tư phụ trợ</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {vattuphutro.map((i, index) => (
              <div
                key={index}
                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
              >
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${i.img}')`,
                  }}
                >
                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">${i.text}</h3>
                  <span className="text-gray-500 mt-2">$12</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-gray-600 text-2xl font-medium">Chăm sóc ô tô</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {chamsocoto.map((i, index) => (
              <div
                key={index}
                className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
              >
                <div
                  className="flex items-end justify-end h-56 w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${i.img}')`,
                  }}
                >
                  <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>
                <div className="px-5 py-3">
                  <h3 className="text-gray-700 uppercase">${i.text}</h3>
                  <span className="text-gray-500 mt-2">$12</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="h-64 rounded-md overflow-hidden bg-cover bg-center mt-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')`,
          }}
        >
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">
                Dịch vụ kỹ thuật
              </h2>
              <p className="mt-2 text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempore facere provident molestias ipsam sint voluptatum
                pariatur.
              </p>
              <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>Xem thêm</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex mt-8 md:-mx-4">
          <div
            className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')`,
            }}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Hướng dẫn kỹ thuật
                </h2>
                <p className="mt-2 text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore facere provident molestias ipsam sint voluptatum
                  pariatur.
                </p>
                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>Xem thêm</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')`,
            }}
          >
            <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Dụng cụ pha màu
                </h2>
                <p className="mt-2 text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tempore facere provident molestias ipsam sint voluptatum
                  pariatur.
                </p>
                <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                  <span>Xem thêm</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-6">
          <div className="w-full py-3">
            <h2 className="text-gray-800 text-2xl font-bold">
              <span className="inline-block h-5 border-l-4 border-red-600 mr-2" />
              Tin tức
            </h2>
          </div>
          <div className="xl:container mx-auto ">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                <div className="relative hover-img max-h-96 overflow-hidden">
                  <a href="#">
                    <img
                      className="max-w-full w-full mx-auto h-auto"
                      src="https://tailnews.tailwindtemplate.net/src/img/dummy/img1.jpg"
                      alt="Image description"
                    />
                  </a>
                  <div
                    className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover"
                    style={{ background: '#00000045' }}
                  >
                    <a href="#">
                      <h2 className="text-3xl font-bold capitalize text-white mb-3">
                        Amazon Shoppers Are Ditching Designer Belts for This
                        Best-Selling
                      </h2>
                    </a>
                    <p className="text-gray-100 hidden sm:inline-block">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This very helpfull
                      for generate default content..
                    </p>
                    <div className="pt-2">
                      <div className="text-gray-100">
                        <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                        Europe
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-shrink max-w-full w-full lg:w-1/2">
                <div className="box-one flex flex-row flex-wrap">
                  <article className="flex-shrink max-w-full w-full sm:w-1/2">
                    <div className="relative hover-img max-h-48 overflow-hidden">
                      <a href="#">
                        <img
                          className="max-w-full w-full mx-auto h-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/dummy/img2.jpg"
                          alt="Image description"
                        />
                      </a>
                      <div
                        className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover"
                        style={{ background: '#00000045' }}
                      >
                        <a href="#">
                          <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                            News magazines are becoming obsolete, replaced by
                            gadgets
                          </h2>
                        </a>
                        <div className="pt-1">
                          <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Techno
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="flex-shrink max-w-full w-full sm:w-1/2">
                    <div className="relative hover-img max-h-48 overflow-hidden">
                      <a href="#">
                        <img
                          className="max-w-full w-full mx-auto h-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/dummy/img3.jpg"
                          alt="Image description"
                        />
                      </a>
                      <div
                        className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover"
                        style={{ background: '#00000045' }}
                      >
                        <a href="#">
                          <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                            Minimalist designs are starting to be popular with
                            the next generation
                          </h2>
                        </a>
                        <div className="pt-1">
                          <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Architecture
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="flex-shrink max-w-full w-full sm:w-1/2">
                    <div className="relative hover-img max-h-48 overflow-hidden">
                      <a href="#">
                        <img
                          className="max-w-full w-full mx-auto h-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/dummy/img4.jpg"
                          alt="Image description"
                        />
                      </a>
                      <div
                        className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover"
                        style={{ background: '#00000045' }}
                      >
                        <a href="#">
                          <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                            Tips for decorating the interior of the living room
                          </h2>
                        </a>
                        <div className="pt-1">
                          <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Interior
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className="flex-shrink max-w-full w-full sm:w-1/2">
                    <div className="relative hover-img max-h-48 overflow-hidden">
                      <a href="#">
                        <img
                          className="max-w-full w-full mx-auto h-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/dummy/img5.jpg"
                          alt="Image description"
                        />
                      </a>
                      <div
                        className="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover"
                        style={{ background: '#00000045' }}
                      >
                        <a href="#">
                          <h2 className="text-lg font-bold capitalize leading-tight text-white mb-1">
                            Online taxi users are increasing drastically ahead
                            of the new year
                          </h2>
                        </a>
                        <div className="pt-1">
                          <div className="text-gray-100">
                            <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                            Lifestyle
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-6">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink max-w-full w-full overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-gray-800 text-2xl font-bold">
                    <span className="inline-block h-5 border-l-4 border-red-600 mr-2" />
                    Sự kiện
                  </h2>
                </div>
                <div className="flex flex-row flex-wrap -mx-3">
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                          className="max-w-full w-full mx-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/dummy/img19.jpg"
                          alt="alt title"
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          <a href="#">
                            5 Tips to Save Money Booking Your Next Hotel Room
                          </a>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </p>
                        <a className="text-gray-500" href="#">
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                          Europe
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                          className="max-w-full w-full mx-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/dummy/img20.jpg"
                          alt="alt title"
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          <a href="#">
                            5 Tips to Save Money Booking Your Next Hotel Room
                          </a>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </p>
                        <a className="text-gray-500" href="#">
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                          Europe
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                          className="max-w-full w-full mx-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/dummy/img21.jpg"
                          alt="alt title"
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          <a href="#">
                            5 Tips to Save Money Booking Your Next Hotel Room
                          </a>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </p>
                        <a className="text-gray-500" href="#">
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                          Europe
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                          className="max-w-full w-full mx-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/dummy/img22.jpg"
                          alt="alt title"
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          <a href="#">
                            5 Tips to Save Money Booking Your Next Hotel Room
                          </a>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </p>
                        <a className="text-gray-500" href="#">
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                          Europe
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                          className="max-w-full w-full mx-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/dummy/img23.jpg"
                          alt="alt title"
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          <a href="#">
                            5 Tips to Save Money Booking Your Next Hotel Room
                          </a>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </p>
                        <a className="text-gray-500" href="#">
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                          Europe
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                          className="max-w-full w-full mx-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/dummy/img24.jpg"
                          alt="alt title"
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          <a href="#">
                            5 Tips to Save Money Booking Your Next Hotel Room
                          </a>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </p>
                        <a className="text-gray-500" href="#">
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                          Europe
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                          className="max-w-full w-full mx-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/dummy/img25.jpg"
                          alt="alt title"
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          <a href="#">
                            5 Tips to Save Money Booking Your Next Hotel Room
                          </a>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </p>
                        <a className="text-gray-500" href="#">
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                          Europe
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                    <div className="flex flex-row sm:block hover-img">
                      <a href="">
                        <img
                          className="max-w-full w-full mx-auto"
                          src="https://tailnews.tailwindtemplate.net/src/img/dummy/img26.jpg"
                          alt="alt title"
                        />
                      </a>
                      <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                        <h3 className="text-lg font-bold leading-tight mb-2">
                          <a href="#">
                            5 Tips to Save Money Booking Your Next Hotel Room
                          </a>
                        </h3>
                        <p className="hidden md:block text-gray-600 leading-tight mb-1">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content.
                        </p>
                        <a className="text-gray-500" href="#">
                          <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                          Europe
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white py-6">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              <div className="flex-shrink max-w-full w-full overflow-hidden">
                <div className="w-full py-3">
                  <h2 className="text-gray-800 text-2xl font-bold">
                    <span className="inline-block h-5 border-l-4 border-red-600 mr-2" />
                    CHỨNG NHẬN/CHỨNG CHỈ VỀ TIÊU CHUẨN CHẤT LƯỢNG, GIẢI THƯỞNG
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-8 items-center">
                  {[
                    'https://posapp.vn/wp-content/uploads/2020/10/giay-chung-nhan-1024x729.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FUvq9_8nL-BqZeTzGW4RsdUmj1wQIloCmB_7ZsIFIJ1yD3iO-1391jpIW-wn9iEI1Yc&usqp=CAU',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFo2CkpUdHsXwz_dkWb0eDjKjP68BqFoBTSfwNQGBn1zhLSNcOB6Af44pfYpVorm6X70&usqp=CAU',
                  ].map((i, index) => (
                    <img
                      src={i}
                      key={index}
                      className="w-full max-h-96 object-contain bg-white rounded-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
      {/* <DichVuKyThuat />
      <DoiTacToanCau />
      <TinTucSuKien />
      <ChungNhan />
      <Footer /> */}
    </div>
  );
};

export default HomePage3;
