import React, { useState, ChangeEvent } from 'react';

interface Item {
  value: string;
  label: string;
}

interface SlidingRadioProps {
  items: Item[];
  onChange: (value: string) => void;
}

const SlidingRadio: React.FC<SlidingRadioProps> = ({ items, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [sliderPosition, setSliderPosition] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedValue(value);
    onChange(value);
    if (value === 'movie') {
      setSliderPosition('left');
    } else if (value === 'tv') {
      setSliderPosition('right');
    }
  };


  return (
    <div className='bg-dark h-[6vh] rounded-md p-2 justify-between flex flex-row items-center gap-2 relative z-[1]'>
      {items.map((item) => (
        <div className=' w-[50%] rounded-md text-center h-[100%] flex justify-center items-center' key={item.value}>
          <label className={`font-medium text-white z-[20] cursor-pointer`}>
            <input
              type="radio"
              name="mediaSelection"
              value={item.value}
              checked={selectedValue === item.value}
              onChange={handleChange}
              className='hidden'
            />
            {item.label}
          </label>
        </div>
      ))}
      <div className={`slider bg-primary h-[70%] w-[50%] z-10 rounded-lg absolute transition duration-300 ease-in-out ${sliderPosition === 'right' ? 'translate-x-[96.5%]' : ''}`}></div>
    </div>
  );
}

export default SlidingRadio;
