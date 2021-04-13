import { PaginationHasNext } from './has-next';
import { PaginationHasPrev } from './has-prev';

import css from './pagination.module.css';

 

export const Pagination  = ({
  current,
  disabled,
  onChange,
  hasNext,
}) => {
  const increment = disabled ? () => {} : () => onChange(current + 1);
  const decrement = disabled ? () => {} : () => onChange(current - 1);
  const setPage = disabled
    ? () => () => {}
    : (num ) => () => onChange(num);
  const active = `${css['pagination-button']} ${css.active}`;
  return (
    <div className={css.pagination}>
      <div className="flex">
        {current > 1 && (
          <PaginationHasPrev
            value={current - 1}
            onSet={setPage(current - 1)}
            onDecrement={decrement}
          />
        )}
        <div className={active}>
          <span>{current}</span>
        </div>
        {hasNext && (
          <PaginationHasNext
            value={current + 1}
            onSet={setPage(current + 1)}
            onIncrement={increment}
          />
        )}
      </div>
    </div>
  );
};