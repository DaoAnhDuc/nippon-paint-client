import {} from 'react';

type Props = {};

const DoiTacToanCau = ({}: Props) => {
  const img = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFWWHyNnoBqHYeLiBubm6MNcO8k3Jfyv1-A&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJ9Lh-J4SXsKSQe97RAKgibg6_qCjQkjGAA&s',
    'https://img.myloview.com/canvas-prints/bg-logo-initial-letter-logo-design-template-vector-illustration-700-180669450.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHpNBeIuqJI3TyLle8mZ1O7u_FgnqZne1GQ&s',
    'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/062015/menzerna_0.png?itok=Pwoc3kC7',
  ];
  return (
    <div className="mt-20 mb-20 container">
      <p className="text-4xl text-center font-bold uppercase">
        ĐỐI TÁC TOÀN CẦU
      </p>
      <div className='flex flex-wrap gap-4 justify-center mt-8'>
        {
            img.map((i, index) => (
                <div key={index} className='w-60 p-2' style={{border: '1px solid #dfdfdf'}}>
                    <img src={i} alt="" className='w-full h-full object-contain' />
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default DoiTacToanCau;
