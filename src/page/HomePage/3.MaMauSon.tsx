import {} from 'react'; // import required modules
import { Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import PaintBg from './PaintBg';
type Props = {};

 export const chunkArray = (array: Array<any>, chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  };

const MaMauSon = ({}: Props) => {
  const materialColors = [
    '#F44336',
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722',
    '#795548',
    '#9E9E9E',
    '#607D8B',
    '#FFCDD2',
    '#F8BBD0',
    '#E1BEE7',
    '#D1C4E9',
    '#C5CAE9',
    '#BBDEFB',
    '#B3E5FC',
    '#B2EBF2',
    '#B2DFDB',
    '#C8E6C9',
    '#DCEDC8',
    '#F0F4C3',
    '#FFF9C4',
    '#FFECB3',
    '#FFE0B2',
    '#FFCCBC',
    '#D7CCC8',
    '#F5F5F5',
    '#CFD8DC',
    '#EF9A9A',
    '#F48FB1',
    '#CE93D8',
    '#B39DDB',
    '#9FA8DA',
    '#90CAF9',
    '#81D4FA',
    '#80DEEA',
    '#80CBC4',
    '#A5D6A7',
    '#C5E1A5',
    '#E6EE9C',
    '#FFF59D',
    '#FFE082',
    '#FFCC80',
    '#FFAB91',
    '#BCAAA4',
    '#EEEEEE',
    '#B0BEC5',
    '#E57373',
    '#F06292',
    '#BA68C8',
    '#9575CD',
    '#7986CB',
    '#64B5F6',
    '#4FC3F7',
    '#4DD0E1',
    '#4DB6AC',
    '#81C784',
    '#AED581',
    '#DCE775',
    '#FFF176',
    '#FFD54F',
    '#FFB74D',
    '#FF8A65',
    '#A1887F',
    '#E0E0E0',
    '#90A4AE',
    '#EF5350',
    '#EC407A',
    '#AB47BC',
    '#7E57C2',
    '#5C6BC0',
    '#42A5F5',
    '#29B6F6',
    '#26C6DA',
    '#26A69A',
    '#66BB6A',
    '#9CCC65',
    '#D4E157',
    '#FFEE58',
    '#FFCA28',
    '#FFA726',
    '#FF7043',
    '#8D6E63',
    '#BDBDBD',
    '#78909C',
    '#EF5350',
    '#EC407A',
    '#AB47BC',
    '#7E57C2',
    '#5C6BC0',
    '#42A5F5',
    '#29B6F6',
    '#26C6DA',
    '#26A69A',
    '#66BB6A',
    '#9CCC65',
    '#D4E157',
    '#FFEE58',
    '#FFCA28',
    '#FFA726',
    '#FF7043',
    '#8D6E63',
    '#BDBDBD',
    '#78909C',
    '#F44336',
    '#E91E63',
    '#9C27B0',
    '#673AB7',
    '#3F51B5',
    '#2196F3',
    '#03A9F4',
    '#00BCD4',
    '#009688',
    '#4CAF50',
    '#8BC34A',
    '#CDDC39',
    '#FFEB3B',
    '#FFC107',
    '#FF9800',
    '#FF5722',
    '#795548',
    '#9E9E9E',
    '#607D8B',
    '#FFCDD2',
    '#F8BBD0',
    '#E1BEE7',
    '#D1C4E9',
    '#C5CAE9',
    '#BBDEFB',
    '#B3E5FC',
    '#B2EBF2',
    '#B2DFDB',
    '#C8E6C9',
    '#DCEDC8',
    '#F0F4C3',
    '#FFF9C4',
    '#FFECB3',
    '#FFE0B2',
    '#FFCCBC',
    '#D7CCC8',
    '#F5F5F5',
    '#CFD8DC',
    '#EF9A9A',
    '#F48FB1',
    '#CE93D8',
    '#B39DDB',
    '#9FA8DA',
    '#90CAF9',
    '#81D4FA',
    '#80DEEA',
    '#80CBC4',
    '#A5D6A7',
    '#C5E1A5',
    '#E6EE9C',
    '#FFF59D',
    '#FFE082',
    '#FFCC80',
    '#FFAB91',
    '#BCAAA4',
    '#EEEEEE',
    '#B0BEC5',
    '#E57373',
    '#F06292',
    '#BA68C8',
    '#9575CD',
    '#7986CB',
    '#64B5F6',
    '#4FC3F7',
    '#4DD0E1',
    '#4DB6AC',
    '#81C784',
    '#AED581',
    '#DCE775',
    '#FFF176',
    '#FFD54F',
    '#FFB74D',
    '#FF8A65',
    '#A1887F',
    '#E0E0E0',
    '#90A4AE',
  ];

  const imgs = [
    'https://nipponpaint.com.vn/sites/default/files/2019-04/ma-mau-son-nippon-01.jpg',
    'https://nipponpaint.com.vn/sites/default/files/2019-04/ma-mau-son-nippon-02.jpg',
    'https://nipponpaint.com.vn/sites/default/files/2019-04/ma-mau-son-nippon-03.jpg',
  ];

  return (
    <div className="pt-24 pb-48 relative" style={{ background: 'var(--pink)' }}>
      <PaintBg src="https://nipponpaint.com.vn/themes/wosh_sub/assets/images/top-pink-paint.png" />
      <div className="container grid xl:grid-cols-2 gap-8 sm:grid-cols-1">
        <div>
          <Swiper navigation={true} modules={[Navigation]}>
            {chunkArray(materialColors, 16).map((arr, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-wrap"
                style={{ width: '460px !important' }}
              >
                <table className="m-auto">
                  {chunkArray(arr, 4).map((arr2, index2) => (
                    <tr key={index2}>
                      {arr2.map((i) => (
                        <td key={i} className="p-1">
                          <div
                            className="w-32 h-28 rounded-sm"
                            style={{ background: i }}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </table>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <p className="text-5xl text-white font-bold tracking-wide">
            MÃ MÀU SƠN NIPPON
          </p>
          <p className="text-white mt-4 text-xl">
            Thỏa sức lựa chọn màu sắc cho không gian sống từ thư viện với hơn
            2000 mã màu sơn của chúng tôi.
          </p>
          <div className="mt-8">
            <button className="btn-pink">Tìm mã màu sơn</button>
          </div>
          <div className="flex gap-3 mt-8">
            {imgs.map((i, index) => (
              <img key={index} src={i} className="w-1/3 object-cover h-60" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaMauSon;
