import { FC, useState } from 'react';
import s from './DropDownInput.module.scss';
import { DropDownInputContent } from './constants';
import { Todo } from '../../store/todos/reducer';
import { MenuDropInput } from '../MenuDropInput/MenuDropInput';

type DropDownInputProps = {
  value: string;
  onChange: (value: string) => void;
  options: Todo[];
  onSubmit: () => void;
};

const DropDownInput: FC<DropDownInputProps> = ({
  value,
  onChange,
  options,
  onSubmit,
}) => {
  const [activeForm, setActiveForm] = useState(false);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const onOptionClick = (value: string) => {
    onChange(value);
    setActiveForm(false);
    // console.log(activeForm);
  };

  const onActiveChange = (value: boolean) => {
    setActiveForm(value);
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    
    if ((e as React.FormEvent<HTMLFormElement>).currentTarget) {
      setActiveForm(true);
    } 
    
    if ((e as React.MouseEvent<HTMLButtonElement, MouseEvent>).currentTarget) {
    setActiveForm(false);
      }
      onSubmit();
    };
    
  const handleChangeActive = () => {
    onActiveChange(true);
  };

  const handleChangeHide = () => {
    onActiveChange(false);
  };

  return (
    <>
      <div className={s.DropDownInput}>
        <form onSubmit={handleOnSubmit} onBlur={handleChangeHide}>
          <input
            onFocus={handleChangeActive}
            className={s.inputArea}
            placeholder={DropDownInputContent.textholder}
            type="text"
            onChange={onInputChange}
            value={value}
          />
        </form>
          <button
            className={s.btnInput}
            onClick={handleOnSubmit}
          >
            New To do
          </button>
        <MenuDropInput
          value={value}
          activeForm={activeForm}
          options={options}
          onOptionClick={onOptionClick}
        />
      </div>
    </>
  );
};

export default DropDownInput;
