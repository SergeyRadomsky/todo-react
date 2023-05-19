import { FC } from 'react';
import s from './DropDownInput.module.scss';
import { DropDownInputContent } from './constants';
import useSortTodos from '../sortedButton/hooks/useSortTodos';
import { useAppDispatch } from '../../store/store';
import { SortedButtons } from '../sortedButton/SortedButtons';
import { MenuDropInput } from '../MenuDropInput/MenuDropInput';
import useDropDownInput from './hooks/useDropDownInput';

export const DropDownInput: FC = (/* value, onchange?, filtered */) => {
  const dispatch = useAppDispatch();

  const { setSortType } = useSortTodos(dispatch);

  const {
    addTodo, // remote
    changeValueOfFilter, // remote
    value,
    onInputChange,
    onActiveChange,
    activeForm, //????? т.к. у меня доп стили я оставляю статус
    takeValueToInput, // remote
    filteredArr,
  } = useDropDownInput(setSortType, dispatch);

  return (
    <>
      <div className={s.DropDownInput}>
        <form onSubmit={addTodo} onBlur={() => onActiveChange(false)}>
          <input
            onFocus={() => onActiveChange(true)}
            onClick={() => onActiveChange(true)}
            className={s.inputArea}
            placeholder={DropDownInputContent.textholder} // создать отдельный динамичный enum
            type="text"
            onChange={onInputChange}
            value={value}
          />
        </form>
        <button
          className={s.btnInput}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            addTodo(e)
          }
        >
          New To do
        </button>
          <MenuDropInput
            value={value}
            activeForm={activeForm}
            filteredArr={filteredArr} //
            onActiveChange={onActiveChange}
            
            takeValueToInput={takeValueToInput}
            changeValueOfFilter={changeValueOfFilter}
          />
      </div>
      <SortedButtons />
    </>
  );
};
