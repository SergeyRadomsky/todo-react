import { useState } from 'react';
import { SortTypes } from '../constants';
import { addTodoAction, sortTodosAction } from '../../../store/todos/reducer';
import { ThunkAppDispath } from '../../../store/store';

const useForm = (
  setSortType: (type: SortTypes) => void,
  dispatch: ThunkAppDispath
) => {
  const [value, setValue] = useState('');
  const [activeForm, setActiveForm] = useState(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setActiveForm(true);
  };

  const addTodo = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!!value.trim()) {
      dispatch(addTodoAction(value));
      setValue('');
      setSortType(SortTypes.all);
      dispatch(sortTodosAction(SortTypes.all));
    }
  };

  const onActiveChange = (value: boolean) => {
    setActiveForm(value);
  };

  return {
    onInputChange,
    addTodo,
    value,
    activeForm,
    onActiveChange,
  };
};

export default useForm;
