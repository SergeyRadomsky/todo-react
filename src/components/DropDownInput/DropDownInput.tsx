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

  const onActiveChange = (value: boolean) => {
    setActiveForm(value);
  };

  const handleChangeActive = () => {
    onChange(value);
    onActiveChange(true);
    // console.log(activeForm); 
  };

  const handleChangeHide = () => {
    // setTimeout(() => { 
      onActiveChange(false);
    // }, 100);
    // onActiveChange(false);
  };

  //ТУТ 

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    console.log(activeForm);
    
    // onActiveChange(false);
  };

  const onOptionClick = (value: string) => {
    if (!activeForm) {
      setActiveForm(false);
      onChange(value);
      console.log(activeForm); 
    }
  };

  const handleOnSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (e.type === 'submit') {
      handleChangeActive();
      onSubmit();
    }

    if (e.type === 'click') {
      handleChangeHide();
      // setTimeout(() => onSubmit(), 290);
      // setTimeout(() => {
        onChange('');
      // }, 90);
      onSubmit();

      // onSubmit();
    }

    // onSubmit();
  };

  console.log(activeForm); 
  
  return (
    <>
      <div className={s.DropDownInput}>
        <form onSubmit={handleOnSubmit} >
          <input
            onBlur={handleChangeHide}
            onFocus={handleChangeActive} 
            className={s.inputArea}
            placeholder={DropDownInputContent.textholder}
            type="text"
            onChange={onInputChange}
            value={value}
          />
        </form>
        <button className={s.btnInput} onClick={handleOnSubmit}>
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
