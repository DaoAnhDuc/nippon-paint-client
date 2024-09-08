import {} from 'react'
import { Link } from 'react-router-dom';

type Props = { data : {
    title: string
    query: string
    data: Array<any>
}};

const SanPham = ({data}: Props) => {
  
  return (
    <div className="container mt-12 mb-12">
      <div
        className="flex w-full max-w-full gap-10"
      >
        <div className='w-full'>
          <p
            className="text-2xl font-bold mb-2"
            style={{ color: 'var(--green)' }}
          >
            {data.title}
          </p>
          <div className="grid grid-cols-5 gap-4">
            {data.data.map((item, idx) => (
              <Link key={idx} to={`/${data.query}/${idx}`}>
                <div
                  className="relative hover:shadow-lg cursor-pointer overflow-hidden"
                  key={idx}
                  style={{ border: '1px solid #dfdfdf' }}
                >
                  <div
                    className="absolute top-3 right-3 w-12 h-12 text-white rounded-full flex justify-center items-center"
                    style={{ background: 'var(--green)' }}
                  >
                    {item.sale}
                  </div>
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-72 object-contain  hover:scale-105"
                  />
                  <div className="px-2 py-1 mt-4 min-h-16">
                    <p className="line-clamp-2 text-center font-bold">{item.text}</p>
                  </div>
                  <div className="flex justify-center  items-center gap-4 pb-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SanPham
