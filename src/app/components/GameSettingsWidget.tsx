'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Countries, CountriesInterface } from '../data/Countries';
import { Platforms, PlatformsInterface } from '../data/Platforms';
import { Genres, GenresInterface } from '../data/Genres';
import CustomRadioBtn from './CustomRadioBtn';
import FormGroup from './FormGroup';
import SlidingRadio from './SlidingRadio';

interface ISlidingRadioProps {
  items: {
    value: string;
    label: string;
  }[];
}

export default function GameSettingsWidget() {
  const slidingRadioProps: ISlidingRadioProps = {
    items: [
      { value: 'movie', label: 'Movie' },
      { value: 'tv', label: 'TV Show' },
    ],
  };

  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedMediaType, setSelectedMediaType] = useState<string>('');

  const handleMediaTypeChange = (value: string) => {
    setSelectedMediaType(value);
  };

  const handlePlatformChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPlatform(event.target.value);
  };

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleGenreChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you can handle the submission, e.g., logging the selected values or sending them to an API.
    console.log({
      selectedPlatform,
      selectedCountry,
      selectedGenre,
      selectedMediaType
    });
  };

  return (
    <div className="flex flex-col max-w-[50vw] max-h-[75vh] rounded-xl bg-extraDark lg:h-[75vh] lg:w-[50vw] p-10 gap-5">
      <h1 className="font-bold text-white text-2xl">Game Settings</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <FormGroup>
          <label className="text-white">Country</label>
          <select className='h-[4vh] rounded-md px-2 bg-dark text-white' onChange={handleCountryChange}>
            {Countries.map((country: CountriesInterface) => (
              <option key={country.name} value={country.code}>{country.name}</option>
            ))}
          </select>
        </FormGroup>
        <FormGroup flexType='row' className="justify-between flex-col md:flex-row">
          {Platforms.map((platform: PlatformsInterface) => (
            <CustomRadioBtn
              key={platform.code}
              name="platform"
              value={platform.code}
              label={platform.name}
              checked={selectedPlatform === platform.code}
              onChange={handlePlatformChange}
            />
          ))}
        </FormGroup>
        <FormGroup>
        <SlidingRadio items={slidingRadioProps.items} onChange={handleMediaTypeChange} />
        </FormGroup>
        <FormGroup>
          <label className="text-white">Genres</label>
          <select className='h-[4vh] rounded-md px-2 bg-dark text-white' onChange={handleGenreChange}>
            {Genres.map((genre: GenresInterface) => (
              <option key={genre.name} value={genre.code}>{genre.name}</option>
            ))}
          </select>
        </FormGroup>
        <button type='submit' className="bg-primary text-white font-bold py-2 px-4 rounded">Submit</button>
      </form>
    </div>
  );
}

