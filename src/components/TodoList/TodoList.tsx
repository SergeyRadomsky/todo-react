import { todosSelector, viewSelector } from '../../store/todos/selectors';
import { Task } from '../Task/Task';
import s from '../TodoList/TodoList.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { ViewOfLists } from '../DropDownInput/constants';
import { Link, useNavigate } from 'react-router-dom';
import { auth, changeStatusOfLoginAction } from '../../store/auth/reducer';

const TodoList = () => {
  const view = useAppSelector(viewSelector);
  const todos = useAppSelector(todosSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = () => {
    dispatch(changeStatusOfLoginAction());

    if (!auth) {
      navigate('/login');
    }
  };

  return (
    <>
    <Link to={'/login'} onClick={handleChange}>loginOut</Link>
      <div
        className={`
        ${view === ViewOfLists.table ? s.viewTable : s.viewList}
      }`}
      >
        {todos.map(({ text, id, completed }) => (
          <Task completed={completed} id={id} key={id} text={text} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
