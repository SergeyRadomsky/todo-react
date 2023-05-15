import { FC } from 'react';
import s from './SubForm.module.scss';
import { todosSelector } from '../../store/todos/selectors';
import { useAppSelector } from '../../store/store';

interface SubFormProps {
  activeForm?: boolean;
  onActiveChange: (value: boolean) => void;
  value: string;
}

export const SubForm: FC<SubFormProps> = ({
  activeForm,
  // onActiveChange,
  value,
}) => {
  const todos = useAppSelector(todosSelector);

  const className = `${s.SubForm} ${
    activeForm ? s.SubFormActive : s.SubFormClose
  }`;

  return (
    <div className={className}>
      {todos.map((todo) => {
        return (
          <div key={todo.id} onClick={() => console.log(value)}>
            {todo.text}
          </div>
        );
      })}
    </div>
  );
};
