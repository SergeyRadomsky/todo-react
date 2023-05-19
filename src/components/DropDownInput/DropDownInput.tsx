import { FC } from 'react';
import s from './DropDownInput.module.scss';
import { DropDownInputContent } from './constants';
// import useSortTodos from '../sortedButton/hooks/useSortTodos';
// import { useAppDispatch } from '../../store/store';
// import { SortedButtons } from '../sortedButton/SortedButtons';
// import { MenuDropInput } from '../MenuDropInput/MenuDropInput';
// import useDropDownInput from './hooks/useDropDownInput';

type DropDownInputProps = {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  onSubmit: () => void;
};

const DropDownInput: FC<DropDownInputProps> = ({
  value,
  onChange,
  options,
  onSubmit,
}) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const onOptionClick = (value: string) => {
    onChange(value);
  };

  return (
    <>
      <div className={s.DropDownInput}>
        <form onSubmit={onSubmit}>
          <input
            // onFocus={() => onActiveChange(true)}
            // onClick={() => onActiveChange(true)}
            className={s.inputArea}
            placeholder={DropDownInputContent.textholder}
            type="text"
            onChange={onInputChange}
            value={value}
          />
        </form>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            zIndex: 10,
            color: 'red',
          }}
        >
          {options.map((option, index) => (
            <p onClick={() => onOptionClick(option)} key={index}>
              {option}
            </p>
          ))}
        </div>

        {/* <MenuDropInput
          value={value} //
          activeForm={activeForm} //
          filteredArr={filteredArr} //
          onActiveChange={onActiveChange} ///////
          takeValueToInput={takeValueToInput} ///////
          changeValueOfFilter={changeValueOfFilter} /////// где много, их в отделный комп и оттуда использовать
        /> */}
      </div>
      {/* <SortedButtons /> */}
    </>
  );
};

export default DropDownInput;
