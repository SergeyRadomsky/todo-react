import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

// Redux actions
const setActiveButton = (buttonId) => ({
  type: 'SET_ACTIVE_BUTTON',
  payload: buttonId,
});

// Redux selector
const getActiveButtonId = (state) => state.activeButtonId;

export const ButtonGroup = () => {
  const dispatch = useDispatch();
  const activeButtonId = useSelector(getActiveButtonId);

  const handleButtonClick = (buttonId) => {
    dispatch(setActiveButton(buttonId));
  };

  return (
    <div>
      <Button
        type={activeButtonId === 1 ? 'primary' : 'default'}
        onClick={() => handleButtonClick(1)}
      >
        Button 1
      </Button>
      <Button
        type={activeButtonId === 2 ? 'primary' : 'default'}
        onClick={() => handleButtonClick(2)}
      >
        Button 2
      </Button>
      <Button
        type={activeButtonId === 3 ? 'primary' : 'default'}
        onClick={() => handleButtonClick(3)}
      >
        Button 3
      </Button>
      <Button
        type={activeButtonId === 4 ? 'primary' : 'default'}
        onClick={() => handleButtonClick(4)}
      >
        Button 4
      </Button>
    </div>
  );
};

export default ButtonGroup;
