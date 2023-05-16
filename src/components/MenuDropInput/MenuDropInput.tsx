import { FC } from 'react';
import s from './MenuDropInput.module.scss';
import { todosSelector } from '../../store/todos/selectors';
import { useAppSelector } from '../../store/store';

interface MenuDropInputProps {
  activeForm?: boolean;
  onActiveChange: (value: boolean) => void;
  takeValueToInput: (value: string) => void;
  value: string;
}

export const MenuDropInput: FC<MenuDropInputProps> = ({
  activeForm,
  takeValueToInput,
}) => {
  const todos = useAppSelector(todosSelector);

  const className = `${s.MenuDropInput} ${
    activeForm ? s.MenuDropInputActive : s.MenuDropInputClose
  }`;

  return (
    <div className={className}>
      {todos.map((todo) => {
        return (
          <div
            className={s.TodosItem}
            key={todo.id}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
              takeValueToInput((e.target as HTMLDivElement).textContent ?? '')
            }
          >
            {todo.text}
          </div>
        );
      })}
    </div>
  );
};
