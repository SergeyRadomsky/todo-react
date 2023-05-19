import { useState } from 'react';
import { SortTypes } from '../constants';
import { addTodoAction, sortTodosAction } from '../../../store/todos/reducer';
import { ThunkAppDispath, useAppSelector } from '../../../store/store';
import { todosSelector } from '../../../store/todos/selectors';

const useDropDownInput = (
  
  setSortType: (type: SortTypes) => void,
  dispatch: ThunkAppDispath
) => {
  const [value, setValue] = useState('');
  const todos = useAppSelector(todosSelector);
  const [activeForm, setActiveForm] = useState(false);
  const [filteredArr, setFilteredArr] = useState(todos);

  const changeValueOfFilter = (value: string) => {
    const trimValue = value.trim();
    const typeFirstSymb = trimValue[0];

    if (
      typeFirstSymb.match(/[а-я]/i) ||
      todos.some((todo) => todo.text.includes(trimValue))
    ) {
      setActiveForm(true);
      setFilteredArr(
        todos.filter((todo) =>
          todo.text.toLocaleLowerCase().includes(trimValue.toLocaleLowerCase())
        )
      );

      return filteredArr;
    }

    if (
      typeFirstSymb.match(/[0-9]/) ||
      todos.some((todo) => todo.id.includes(trimValue))
    ) {
      setActiveForm(true);
      setFilteredArr(todos.filter((todo) => todo.id.includes(trimValue)));

      return filteredArr;
    }
    setFilteredArr([]);
    setActiveForm(false);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    changeValueOfFilter(e.target.value);
/*     console.log(changeValueOfFilter(e.target.value)); */
  };

  const takeValueToInput = (value: string) => {
    setValue(value);
    setActiveForm(false);
  };
  
  const onActiveChange = (value: boolean) => {
    setActiveForm(value);
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


  return {
    onInputChange,
    addTodo,
    value,
    activeForm,
    onActiveChange,
    takeValueToInput,
    changeValueOfFilter,
    filteredArr,
  };
};

export default useDropDownInput;
