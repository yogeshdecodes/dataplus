import { FormEvent, useState } from 'react';

import css from './search.module.css';
import { GlobeIcon } from '../common/icons';

 

export const SearchLocation  = ({
  location,
  onChange,
}) => {
  const [value, setValue] = useState('');
  const [selections, setSelections] = useState([]);

  const handleNewLocation = (e) => {
    e.preventDefault();
    setSelections(Array.from(new Set([...selections, value])));
    onChange(value);
    setValue('');
  };
  return (
    <form onSubmit={handleNewLocation}>
      <h3 className={css['location-header']}>location</h3>
      <div className={css['location-input']}>
        <GlobeIcon />
        <input
          name="location"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="City, state, zip code or country"
        />
      </div>
      {selections.map((s) => (
        <div key={s} className={css['location-radio']}>
          <input
            type="radio"
            id={s}
            name="select"
            value={s}
            checked={s === location}
            onChange={(e) => onChange(e.target.value)}
          />
          <label className="ml-1" htmlFor={s}>
            {s}
          </label>
        </div>
      ))}
    </form>
  );
};