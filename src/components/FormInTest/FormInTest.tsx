import { FC } from 'react';
import { StyledForm } from './style';

export const FormInTest: FC = () => {
  return (
    <StyledForm>
      <label className="styledLabel">
        <input className="StyledInput" type="radio" name="option" value="1" />
        <span className='StyledSpan'>varinat 1</span>
      </label>
      <label className="styledLabel">
        <input className="StyledInput" type="radio" name="option" value="2" />
        <span className='StyledSpan'>varinat 2</span>
      </label>
      <label className="styledLabel">
        <input className="StyledInput" type="radio" name="option" value="3" />
        <span className='StyledSpan'>varinat 3</span>
      </label>
      <label className="styledLabel">
        <input className="StyledInput" type="radio" name="option" value="4" />
        <span className='StyledSpan'>varinat 4</span>
      </label>
    </StyledForm>
  );
};

export default FormInTest;
