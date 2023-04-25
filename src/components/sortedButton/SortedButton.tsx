import { FC } from 'react';
import { SortTypes, ViewOfLists } from '../TodoForm/constants';
import s from './SortedButton.module.scss';
import { useAppDispatch } from '../../store/store';
import useSortTodos from './hooks/useSortTodos';

export const SortedButton: FC = () => {
  const dispatch = useAppDispatch();

  //   const { setViewOfList } = useAppDispatch();

  const {
    changeSortByLenght,
    changeSortByData,
    changeSortByStatus,
    sortType,
    changeViewOfList,
    ViewOfList,
  } = useSortTodos(dispatch);

  return (
    <div className={s.btnContainer}>
      <button
        className={`${s.btn} 
      ${sortType === SortTypes.all && s.active} 
      ${sortType === SortTypes.completed && s.activeAnother}
      ${sortType === SortTypes.active && s.activeActiveTask}
      `}
        onClick={changeSortByStatus}
      >
        sort by
        {sortType === SortTypes.all
          ? ' all'
          : sortType === SortTypes.completed
          ? ' completed'
          : ' active'}
      </button>

      <button
        onClick={() => {
          changeSortByData(SortTypes.dateAsc);
        }}
        className={`${s.btn} ${sortType === SortTypes.dateAsc && s.active} ${
          sortType === SortTypes.dateDesk && s.activeAnother
        }`}
      >
        sort date: {sortType === SortTypes.dateAsc ? 'asc' : 'desk'}
      </button>

      <button
        onClick={() => {
          changeSortByLenght(SortTypes.lenghtAsc);
        }}
        className={`${s.btn} ${sortType === SortTypes.lenghtAsc && s.active} ${
          sortType === SortTypes.lenghtDesk && s.activeAnother
        }`}
      >
        sort lenght: {sortType === SortTypes.lenghtAsc ? 'asc' : 'desk'}
      </button>

      <button
        onClick={changeViewOfList}
        className={`${s.btn} ${
          ViewOfList === ViewOfLists.list && s.activeActiveTask
        } ${ViewOfList === ViewOfLists.table && s.activeAnother}`}
      >
        {ViewOfList}
      </button>
    </div>
  );
};
