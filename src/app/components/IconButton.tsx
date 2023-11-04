import * as React from 'react';

const IconButton = ({
  children,
  click = undefined
}: {
  children: React.ReactNode;
  click?: () => void;
}) => {
  return (
    <button
      onClick={click}
      className="p-2 rounded-md hover:bg-gray-200 text-custom-dark self-end"
    >
      {children}
    </button>
  );
};

export default IconButton;
