import { FC } from 'react';
import s from './DropDownInput.module.scss';
import { DropDownInputContent } from './constants';
import useSortTodos from '../sortedButton/hooks/useSortTodos';
import { useAppDispatch } from '../../store/store';
import { SortedButtons } from '../sortedButton/SortedButtons';
import { MenuDropInput } from '../MenuDropInput/MenuDropInput';
import useDropDownInput from './hooks/useDropDownInput';

export const DropDownInput: FC = () => {
  const dispatch = useAppDispatch();

  const { setSortType } = useSortTodos(dispatch);

  const {
    addTodo,
    changeValueOfFilter,
    value,
    onInputChange,
    activeForm,
    onActiveChange,
    takeValueToInput,
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
            placeholder={DropDownInputContent.textholder}
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
        {
          <MenuDropInput
            activeForm={activeForm}
            onActiveChange={onActiveChange}
            takeValueToInput={takeValueToInput}
            value={value}
            changeValueOfFilter={changeValueOfFilter}
            filteredArr={filteredArr}
          />
        }
      </div>
      <SortedButtons />
    </>
  );
};
