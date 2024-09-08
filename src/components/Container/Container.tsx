import React from 'react';

interface IContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: any
}

export const Container = (props: Readonly<IContainerProps>) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ''
      }`}
      style={props.style || {}}
    >
      {props.children}
    </div>
  );
};
