import { FC } from 'react';
import { SortTypes } from '../TodoForm/constants';
import s from './SortedButtons.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/store';
import useSortTodos from './hooks/useSortTodos';
import { viewSelector } from '../../store/todos/selectors';
import Button, { ButtonVariants } from '../button';

export const SortedButtons: FC = () => {
  const dispatch = useAppDispatch();
  const view = useAppSelector(viewSelector);

  const {
    sortByStatusText,
    sortByDateText,
    sortByLengthText,
    
    changeSortByLenght,
    changeSortByData,
    changeSortByStatus,
    sortType,
    toggleViewOfList,
  } = useSortTodos(dispatch);

  return (
    <div className={s.btnContainer}>
      <Button
        variant={ButtonVariants.red}
        active={
          sortType === SortTypes.completed || sortType === SortTypes.active
        }
        onClick={changeSortByStatus}
      >
        sort by: {sortByStatusText(sortType)}
      </Button>

      <Button
        onClick={() => {
          changeSortByData(SortTypes.dateAsc);
        }}
        variant={ButtonVariants.default}
        active={
          sortType === SortTypes.dateAsc || sortType === SortTypes.dateDesk
        }
      >
        sort date: {sortByDateText(sortType)}
      </Button>

      <Button
        onClick={() => {
          changeSortByLenght(SortTypes.lenghtAsc);
        }}
        active={
          sortType === SortTypes.lenghtAsc || sortType === SortTypes.lenghtDesk
        }
      >
        sort lenght: {sortByLengthText(sortType)}
      </Button>

      <Button onClick={toggleViewOfList} variant={ButtonVariants.green}>
        {view}
      </Button>
    </div>
  );
};
