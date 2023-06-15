import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .styledLabel {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 40px;
    font-size: 16px;
    line-height: 15px;
    padding-left: 30px;
  }
  .StyledInput {
    width: 24px;
    height: 24px;
    /* position: absolute; */
    /* z-index: -1; */
    /* opacity: 0; */
    &::before {
      position: absolute;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      content: '';
      display: inline-block;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #6796ad;
      border-radius: 50%;
      margin-right: 0.5em;
      /* background-repeat: no-repeat; */
      background-position: center center;
      background-size: 50% 50%;
    }
		&[type="radio"]:checked::before {
			color: red;
		}
  }

  .StyledSpan {
    padding-left: 10px;
  }
`;
