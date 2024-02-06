'use client'
import { useState } from 'react';
import { Countries, CountriesInterface } from '../data/Countries'
import { Platforms, PlatformsInterface } from '../data/Platforms'
import CustomRadioBtn from './CustomRadioBtn'
import FormGroup from './FormGroup'
export default function GameSettingsWidget() {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div className=" flex flex-col max-w-[50vw] max-h-[75vh] rounded-xl bg-extraDark lg:h-[75vh] lg:w-[50vw] p-10 gap-5">
            <h1 className="font-bold text-white text-2xl">Game Settings</h1>
            <form className='flex flex-col gap-4'>
                <FormGroup>
                    <label className="text-white" >Country</label>
                    <select className='h-[4vh] rounded-md px-2 bg-dark text-white'>
                        {Countries.map((country: CountriesInterface) => (
                            <option key={country.name} value={country.code} className='hover:text-primary'>{country.name}</option>
                        ))}
                    </select>
                </FormGroup>
                <FormGroup flexType='row' className="justify-between">
                    {Platforms.map((platform: PlatformsInterface) => (
                        <CustomRadioBtn
                            name="platform"
                            value={platform.code}
                            label={platform.name}
                            checked={selectedValue === platform.code}
                            onChange={handleChange}
                        />
                    ))}
                </FormGroup>
            </form>
        </div>
    )
}