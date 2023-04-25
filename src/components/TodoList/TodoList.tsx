import { todosSelector } from '../../store/todos/selectors';
import { Task } from '../Task/Task';
import s from '../TodoList/TodoList.module.scss';

import { useAppDispatch, useAppSelector } from '../../store/store';
import { ViewOfLists } from '../TodoForm/constants';
import useSortTodos from '../sortedButton/hooks/useSortTodos';

export const TodoList = () => {
  const dispatch = useAppDispatch();
  const { ViewOfList } = useSortTodos(dispatch);
  const todos = useAppSelector(todosSelector);

  return (
    <div
      className={`
        ${ViewOfList === ViewOfLists.table && s.viewTable}
        ${ViewOfList === ViewOfLists.list && s.viewList}
      }`}
    >
      {todos.map(({ text, id, completed }) => (
        <Task completed={completed} id={id} key={id} text={text} />
      ))}
    </div>
  );
};
