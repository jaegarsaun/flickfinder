type CustomRadioBtnProps = {
    name: string;
    value: string;
    label: string;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Added to handle changes.
  }
  
  export default function CustomRadioBtn({ name, value, label, checked, onChange }: CustomRadioBtnProps) {
    return (
      <label className='text-white flex gap-2 relative cursor-pointer items-center justify-center'>
        <input 
          type='radio' 
          name={name} 
          value={value} 
          checked={checked} 
          onChange={onChange} 
          className='hidden' 
        />
        <span className={`checkmark ${checked ? 'bg-primary' : 'bg-dark'} h-[20px] w-[20px] block rounded-full border-dark border-1`}></span>
        {label}
      </label>
    )
  }