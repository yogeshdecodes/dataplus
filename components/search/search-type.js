import css from './search.module.css';

export const SearchType = ({
  checked,
  onChange,
}) => {
  const toggle = () => onChange(!checked);
  return (
    <>
      <input
        id="ft"
        className={css.checkbox}
        type="checkbox"
        onChange={toggle}
      />
      <label htmlFor="ft" className="ml-1">
        Full Time
      </label>
    </>
  );
};