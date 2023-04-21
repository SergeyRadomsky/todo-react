import { FC, useState } from 'react';
import s from './TodoForm.module.scss';
import { addTodoAction, sortTodosAction } from '../../store/todos/reducer';
import { useAppDispatch } from '../../store/store';
import { SortTypes, TodoFormContent } from './constants';

export const TodoForm: FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const [sortType, setSortType] = useState<SortTypes>();

  const changeSort = (type: SortTypes) => {
    setSortType(type);
    dispatch(sortTodosAction(type));
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
      <button
        onClick={() => changeSort(SortTypes.dateAsc)}
        className={`${s.btn} ${sortType === SortTypes.dateAsc && s.active}`}
      >
        sort date
      </button>
      <button
        onClick={() => changeSort(SortTypes.lenghtAsc)}
        className={`${s.btn} ${sortType === SortTypes.lenghtAsc && s.active}`}
      >
        sort max lengh
      </button>
    </>
  );
};
