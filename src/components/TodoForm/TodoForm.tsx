import { FC, useState } from 'react';
import s from './TodoForm.module.scss';
import { addTodoAction, sortTodosAction } from '../../store/todos/reducer';
import { useAppDispatch } from '../../store/store';
import { SortTypes, TodoFormContent } from './constants';

export const TodoForm: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const [sortType, setSortType] = useState<SortTypes>(SortTypes.completed);

  const changeSort = (type: SortTypes) => {
    switch (type) {
      case SortTypes.dateAsc:
      case SortTypes.dateDesk:
        const newSortType =
          type === SortTypes.dateAsc ? SortTypes.dateDesk : SortTypes.dateAsc;

        if (sortType !== type) {
          setSortType(type);
          dispatch(sortTodosAction(type));
        } else {
          setSortType(newSortType);
          dispatch(sortTodosAction(newSortType));
        }
        break;
      case SortTypes.lenghtAsc:
      case SortTypes.lenghtDesk:
        const newSortType2 =
          type === SortTypes.lenghtAsc
            ? SortTypes.lenghtDesk
            : SortTypes.lenghtAsc;

        if (sortType !== type) {
          setSortType(type);
          dispatch(sortTodosAction(type));
        } else {
          setSortType(newSortType2);
          dispatch(sortTodosAction(newSortType2));
        }
        break;

      default:
        // код, который должен выполняться в случае, если type не соответствует ни одному из case
        break;
    }
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!value.trim()) {
      dispatch(addTodoAction(value));
      setValue('');
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

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
      <div className={s.btnContainer}>
        <button
          className={`${s.btn} ${sortType === SortTypes.all && s.active}`}
          onClick={() => {
            if (SortTypes.all) {
              changeSort(SortTypes.all);
            } else if (SortTypes.completed) {
              changeSort(SortTypes.completed);

              return;
            } else if (SortTypes.active) {
              changeSort(SortTypes.active);

              return;
            }
          }}
        >
          Default
        </button>

        <button
          onClick={() => {
            changeSort(SortTypes.dateAsc);
          }}
          className={`${s.btn} ${sortType === SortTypes.dateAsc && s.active} ${
            sortType === SortTypes.dateDesk && s.activeAnother
          }`}
        >
          sort date: {sortType === SortTypes.dateAsc ? 'asc' : 'desk'}
        </button>

        <button
          onClick={() => {
            changeSort(SortTypes.lenghtAsc);
          }}
          className={`${s.btn} ${
            sortType === SortTypes.lenghtAsc && s.active
          } ${sortType === SortTypes.lenghtDesk && s.activeAnother}`}
        >
          sort lenght: {sortType === SortTypes.lenghtAsc ? 'asc' : 'desk'}
        </button>
      </div>
    </>
  );
};
