import { useState } from 'react';
import { SortTypes } from '../constants';
import { addTodoAction, sortTodosAction } from '../../../store/todos/reducer';
import { ThunkAppDispath } from '../../../store/store';

const useForm = (
  setSortType: (type: SortTypes) => void,
  dispatch: ThunkAppDispath
) => {
  const [value, setValue] = useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!!value.trim()) {
      dispatch(addTodoAction(value));
      setValue('');
      setSortType(SortTypes.all);
      dispatch(sortTodosAction(SortTypes.all));
    }
  };

  return {
    onInputChange,
    addTodo,
    value,
  };
};

export default useForm;