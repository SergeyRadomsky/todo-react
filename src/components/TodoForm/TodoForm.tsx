import { FC } from 'react';
import s from './TodoForm.module.scss';
import { SortTypes, TodoFormContent } from './constants';
import useSortTodos from './hooks/useSortTodos';
import useForm from './hooks/useForm';
import { useAppDispatch } from '../../store/store';
// import { SortedButton } from '../sortedButton/sortedButton'

export const TodoForm: FC = () => {
  const dispatch = useAppDispatch();

  const {
    changeSortByLenght,
    changeSortByData,
    changeSortByStatus,
    sortType,
    setSortType,
  } = useSortTodos(dispatch);

  const { addTodo, value, onInputChange } = useForm(setSortType, dispatch);

  return (
    <>
      <form className={s.TodoForm} onSubmit={addTodo}>
        <input
          className={s.inputArea}
          placeholder={TodoFormContent.textholder}
          type="text"
          onChange={onInputChange}
          value={value}
        />
        <button className={s.btnInput}>New To do</button>
      </form>
      {/* <SortedButton /> */}
      {
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
            className={`${s.btn} ${
              sortType === SortTypes.dateAsc && s.active
            } ${sortType === SortTypes.dateDesk && s.activeAnother}`}
          >
            sort date: {sortType === SortTypes.dateAsc ? 'asc' : 'desk'}
          </button>

          <button
            onClick={() => {
              changeSortByLenght(SortTypes.lenghtAsc);
            }}
            className={`${s.btn} ${
              sortType === SortTypes.lenghtAsc && s.active
            } ${sortType === SortTypes.lenghtDesk && s.activeAnother}`}
          >
            sort lenght: {sortType === SortTypes.lenghtAsc ? 'asc' : 'desk'}
          </button>
        </div>
      }
    </>
  );
};
