import css from './pagination.module.css';
import { ElipsisIcon, LeftIcon } from '../common/icons';

 

export const PaginationHasPrev  = ({
  value,
  onSet,
  onDecrement,
}) => {
  const more = `${css['pagination-button']} ${css.more}`;
  return (
    <>
      <div className={css['pagination-button']} onClick={onDecrement}>
        <LeftIcon />
      </div>
      {value >= 2 && (
        <div className={more}>
          <ElipsisIcon />
        </div>
      )}
      <div className={css['pagination-button']} onClick={onSet}>
        <span>{value}</span>
      </div>
    </>
  );
};