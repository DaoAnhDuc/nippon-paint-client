import {} from 'react'

type Props = {}

const ChungNhan = ({}: Props) => {
      const img = [
        'https://posapp.vn/wp-content/uploads/2020/10/giay-chung-nhan-1024x729.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4FUvq9_8nL-BqZeTzGW4RsdUmj1wQIloCmB_7ZsIFIJ1yD3iO-1391jpIW-wn9iEI1Yc&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIFo2CkpUdHsXwz_dkWb0eDjKjP68BqFoBTSfwNQGBn1zhLSNcOB6Af44pfYpVorm6X70&usqp=CAU',
      ];
  return (
    <div>
      <div className="container">
        <p className="font-bold text-4xl mb-16 text-center">
          CHỨNG NHẬN/CHỨNG CHỈ VỀ <br /> TIÊU CHUẨN CHẤT LƯỢNG, GIẢI THƯỞNG
        </p>
        <div className="grid grid-cols-3 gap-8 mt-16 items-center">
          {img.map((i, index) => (
            <img
              src={i}
              key={index}
              className="w-full max-h-96 object-contain bg-white rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChungNhan
