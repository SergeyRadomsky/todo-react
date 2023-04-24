import { FC } from 'react';
import s from './TodoForm.module.scss';
import { TodoFormContent } from './constants';
import useSortTodos from '../sortedButton/hooks/useSortTodos';
import useForm from './hooks/useForm';
import { useAppDispatch } from '../../store/store';
import { SortedButton } from '../sortedButton/SortedButton';

export const TodoForm: FC = () => {
  const dispatch = useAppDispatch();

  const { setSortType } = useSortTodos(dispatch);

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
      <SortedButton />
    </>
  );
};
