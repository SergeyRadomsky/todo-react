import { FC } from 'react';
import WomanIconComp from '../../components/WomanIconComp';
import InvalidIconComponent from '../../components/InvalidIconComponent';
import { StyledPersonalBlock, StyledPersonalItems } from './styles';
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog`;

const TestPsyho: FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <>
      <StyledPersonalBlock>
        <StyledPersonalItems>
          <WomanIconComp />
          <span>Кольцова Каролина Тихоновна</span>
          <InvalidIconComponent />
          <span>18 лет (12.03.2005), 52 кг</span>
          <span> Отделение Реабилитация</span>
          <span>дата поступления 28.04.2023 06:32</span>
          <span>ф. № 042/У</span>
        </StyledPersonalItems>
      </StyledPersonalBlock>
      <div style={{display:'flex',}}>Тестирование пациента психологом</div>
      <Collapse onChange={onChange}>
        <Panel header="This is panel header 1" key="1">
          <Collapse >
            <Panel header="This is panel nest panel" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel nest panel" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel nest panel" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
          <Checkbox>{text}</Checkbox>
        </Panel>
      </Collapse>
    </>
  );
};

export default TestPsyho;
