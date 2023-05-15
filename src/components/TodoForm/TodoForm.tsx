import { FC } from 'react';
import s from './TodoForm.module.scss';
import { TodoFormContent } from './constants';
import useSortTodos from '../sortedButton/hooks/useSortTodos';
import useForm from './hooks/useForm';
import { useAppDispatch } from '../../store/store';
import { SortedButtons } from '../sortedButton/SortedButtons';
import { SubForm } from '../SubForm/SubForm';

export const TodoForm: FC = () => {
  const dispatch = useAppDispatch();

  const { setSortType } = useSortTodos(dispatch);

  const { addTodo, value, onInputChange, activeForm, onActiveChange } = useForm(
    setSortType,
    dispatch
  );

  return (
    <>
      <form
        className={s.TodoForm}
        onSubmit={addTodo}
        onBlur={() => onActiveChange(false)}
      >
        <input
          onFocus={() => onActiveChange(true)}
          onClick={() => onActiveChange(true)}
          className={s.inputArea}
          placeholder={TodoFormContent.textholder}
          type="text"
          onChange={onInputChange}
          value={value}
        />
      </form>
      <button
        className={s.btnInput}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          addTodo(e)
        }
      >
        New To do
      </button>
      {
        <SubForm
          activeForm={activeForm}
          onActiveChange={onActiveChange}
          value={value}
        />
      }
      <SortedButtons />
    </>
  );
};
