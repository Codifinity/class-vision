import * as React from 'react';

const IconButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="p-2 rounded-md hover:bg-gray-200 text-custom-dark self-end">
      {children}
    </button>
  );
};

export default IconButton;
