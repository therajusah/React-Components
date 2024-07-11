import { useState } from 'react';

const ColorChanger = () => {
  const [currentColor, setCurrentColor] = useState('');

  const colors = [
    { name: 'Red', className: 'bg-red-500' },
    { name: 'Yellow', className: 'bg-yellow-500' },
    { name: 'Green', className: 'bg-green-500' },
    { name: 'Pink', className: 'bg-pink-500' },
    { name: 'Blue', className: 'bg-blue-500' },
    { name: 'Slate', className: 'bg-slate-500' },
    { name: 'Rose', className: 'bg-rose-800' }
  ];

  const changeColor = (colorClassName) => {
    setCurrentColor(colorClassName);
  };

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${currentColor}`}>
      <div className="grid grid-cols-7 relative h-12 w-4/5 top-[50%]">
        {colors.map((color, index) => (
          <div key={index} className={`relative rounded-full overflow-hidden ${color.className}`}>
            <button
              onClick={() => changeColor(color.className)}
              className={`w-full h-full flex items-center justify-center focus:outline-none text-white`}
            >
              {color.name}
            </button>
          </div>
        ))}
      </div>
      <div className="w-70% mx-auto mb-8 h-36 bg-white rounded-lg shadow-lg"></div>
    </div>
  );
};

export default ColorChanger;
