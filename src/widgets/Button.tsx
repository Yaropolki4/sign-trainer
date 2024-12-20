import React from 'react';

interface Props {
  text: string;
  onClick(): void;
}

export const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <div onClick={onClick} style={{ background: 'red' }}>
      Button with {text}
    </div>
  );
};
