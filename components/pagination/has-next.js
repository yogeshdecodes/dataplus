import css from './pagination.module.css';
import { ElipsisIcon, RightIcon } from '../common/icons';

 

export const PaginationHasNext  = ({
  value,
  onSet,
  onIncrement,
}) => {
  const more = `${css['pagination-button']} ${css.more}`;
  return (
    <>
      <div className={css['pagination-button']} onClick={onSet}>
        <span>{value}</span>
      </div>
      <div className={more}>
        <ElipsisIcon />
      </div>
      <div className={css['pagination-button']} onClick={onIncrement}>
        <RightIcon />
      </div>
    </>
  );
};