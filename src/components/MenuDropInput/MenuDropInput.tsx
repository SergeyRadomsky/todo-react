import { FC } from 'react';
import s from './MenuDropInput.module.scss';
// import { DropFilterArrSelector, todosSelector } from '../../store/todos/selectors';
// import { useAppSelector } from '../../store/store';
import { Todo } from '../../store/todos/reducer';

interface MenuDropInputProps {
  value: string | number;
  activeForm?: boolean;
  onActiveChange: (value: boolean) => void;
  takeValueToInput: (value: string) => void;
  changeValueOfFilter: (value: string) => void;
  filteredArr: Todo[];
}

export const MenuDropInput: FC<MenuDropInputProps> = ({
  activeForm,
  takeValueToInput,
  filteredArr,
}) => {
  // const todos = useAppSelector(todosSelector);

  // const filteredArr = useAppSelector(DropFilterArrSelector);
  // console.log(todos);

  const className = `${s.MenuDropInput} ${
    activeForm ? s.MenuDropInputActive : s.MenuDropInputClose
  }`;

  return (
    <div className={className}>
      {filteredArr.map(({ id, text }) => {
        return (
          <div
            className={s.TodosItem}
            key={id}
            onClick={() => takeValueToInput(text)}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
};
