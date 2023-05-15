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

  const { addTodo, value, onInputChange, activeForm, setActiveForm } = useForm(
    setSortType,
    dispatch
  );
  
  return (
    <>
      <form
        className={s.TodoForm}
        onSubmit={addTodo}
        onBlur={() => setActiveForm(false)}
      >
        <input
          onFocus={() => setActiveForm(true)}
          onClick={() => setActiveForm(true)}
          className={s.inputArea}
          placeholder={TodoFormContent.textholder}
          type="text"
          onChange={onInputChange}
          value={value}
        />
        <button
          className={s.btnInput}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            // e.stopPropagation();
            e.preventDefault();
            addTodo(e);
            setActiveForm(false);
          }}
        >
          New To do
        </button>
      </form>
      {/* <SubForm /> */}
      {<SubForm activeForm={activeForm} setActiveForm={setActiveForm} value={value}/>}
      <SortedButtons />
    </>
  );
};
