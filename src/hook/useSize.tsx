import useResizeObserver from '@react-hook/resize-observer';
import React, { useState } from 'react';
const useSize = (target: any) => {
  const [size, setSize] = useState<any>();

  React.useLayoutEffect(() => {
    setSize(target.current.getBoundingClientRect());
  }, [target]);

  // Where the magic happens
  useResizeObserver(target, (entry: any) => setSize(entry.contentRect));
  return size

};
export default useSize;


export const checkScreenSise = (size: any) => {
    if(size?.width > 1400){
        return "FULLHD"
    }else if(size?.width <= 1400 && size?.width > 1200){
        return "HD"
    }else if(size?.width > 767 && size?.width <= 1200){
        return "TABLE"
    }else{
        return "MOBILE"
    }
}