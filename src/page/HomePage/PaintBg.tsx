import {} from 'react';

type Props = {
  src: string;
};

const PaintBg = ({ src }: Props) => {
  return (
    <div
      className="absolute h-24 w-full bg-no-repeat bg-cover z-20"
      style={{
        backgroundImage: `url('${src}')`,
        bottom: 'calc(100% - 1px)',
        zIndex: 1,
      }}
    />
  );
};

export default PaintBg;
