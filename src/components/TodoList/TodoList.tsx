import { todosSelector, viewSelector } from '../../store/todos/selectors';
import { Task } from '../Task/Task';
import s from '../TodoList/TodoList.module.scss';
import { useAppSelector } from '../../store/store';
import { ViewOfLists } from '../TodoForm/constants';

const TodoList = () => {
  const view = useAppSelector(viewSelector);
  const todos = useAppSelector(todosSelector);

  return (
    <div
      className={`
        ${view === ViewOfLists.table ? s.viewTable : s.viewList}
      }`}
    >
      {todos.map(({ text, id, completed }) => (
        <Task completed={completed} id={id} key={id} text={text} />
      ))}
    </div>
  );
};

export default TodoList; 
