import { FC } from 'react';
import s from './MenuDropInput.module.scss';
import { Todo } from '../../store/todos/reducer';

interface MenuDropInputProps {
  value: string | number;
  activeForm?: boolean;
  options: Todo[];
  onOptionClick: (value: string) => void;
}

export const MenuDropInput: FC<MenuDropInputProps> = ({
  activeForm,
  onOptionClick,
  options,
}) => {

  const className = `${s.MenuDropInput} ${
    activeForm ? s.MenuDropInputActive : s.MenuDropInputClose
  }`;

  return (
    <div className={className}>
      {options.map((option, index) => {
        return (
          <div
            className={s.TodosItem}
            key={index}
            onClick={() => onOptionClick(option.text)}
          >
            {option.text}
          </div>
        );
      })}
    </div>
  );
};
