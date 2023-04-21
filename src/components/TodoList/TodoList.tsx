import { Task } from './Task';
import { todosSelector } from '../../store/todos/selectors';
import { useAppSelector } from '../../store/store';

export const TodoList = () => {
  const todos = useAppSelector(todosSelector);

  return (
    <div>
      {todos.map(({ text, id, completed }) => (
        <Task completed={completed} id={id} key={id} text={text} />
      ))}
    </div>
  );
};
