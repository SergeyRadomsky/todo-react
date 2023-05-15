import { FC, useEffect } from 'react';
import s from './SubForm.module.scss';
import { todosSelector } from '../../store/todos/selectors';
import { useAppSelector } from '../../store/store';
// import { Todo, TodoState } from '../../store/todos/reducer';

interface SubFormProps {
  activeForm?: boolean;
  setActiveForm?: React.Dispatch<React.SetStateAction<boolean>>;
  value: string;
}

export const SubForm: FC<SubFormProps> = ({
  activeForm,
  setActiveForm,
  value,
}) => {
  const todos = useAppSelector(todosSelector);

  // const sortFunc = () => {
  //   const sortArr = todos.filter((todo) => {
  //     if (todo.text === value) {
  //       sortArr.map((elem) => {

  //         return (
  //           <li key={elem.id}>{elem.text}</li>
  //         );
  //       });
  //     }
  //   });
  // };

  // useEffect(() => {
  //   console.log(sortFunc());
  // }, [value]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!activeForm) {
      timer = setTimeout(() => {
        setActiveForm;
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [activeForm, setActiveForm]);

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
