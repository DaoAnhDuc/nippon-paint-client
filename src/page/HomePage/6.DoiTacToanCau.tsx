import { } from 'react';

type Props = {};

const SanPham = ({}: Props) => {
  const img = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFWWHyNnoBqHYeLiBubm6MNcO8k3Jfyv1-A&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJ9Lh-J4SXsKSQe97RAKgibg6_qCjQkjGAA&s',
    'https://img.myloview.com/canvas-prints/bg-logo-initial-letter-logo-design-template-vector-illustration-700-180669450.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHpNBeIuqJI3TyLle8mZ1O7u_FgnqZne1GQ&s',
    'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062015/menzerna_0.png?itok=Pwoc3kC7',
  ];
  return (
    <div
      className="pt-24 pb-56 text-white text-center relative"
      style={{ background: '#0859b6' }}
    >
      <div
        style={{
          backgroundColor: '#0859b6',
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
        <p className="font-bold text-4xl my-4">ĐỐI TÁC TOÀN CẦU</p>
        <div className="flex justify-center flex-wrap gap-8 mt-4">
          {img.map((i, index) => (
            <img
              src={i}
              key={index}
              className="w-28 h-28 object-contain bg-white rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SanPham;
