import { FC } from 'react';
import WomanIconComp from '../../components/WomanIconComp';
import InvalidIconComponent from '../../components/InvalidIconComponent';
import {
  StyledCollapse,
  StyledPanel,
  StyledPersonalBlock,
  StyledPersonalItems,
  StyledTestPsyhoText,
} from './styles';
import { Checkbox, Collapse } from 'antd';
import RollUpComp from '../../components/RollUpComp';

const { Panel } = Collapse;

const text = `
  A dog`;

const TestPsyho: FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <div style={{ width: '600px' }}>
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
      <StyledTestPsyhoText>
        Тестирование пациента психологом
      </StyledTestPsyhoText>

      <StyledCollapse onChange={onChange} expandIcon={() => <RollUpComp />}>
        <StyledPanel
          header={
            <div className="text-in-panel">
              <span>This is header 1</span>
              <span>-/-</span>
            </div>
          }
          key="1"
        >
          <StyledCollapse expandIcon={() => <RollUpComp />}>
            <Panel header="Заголовок теста" key="1">
              <StyledCollapse expandIcon={() => <RollUpComp />}>
                <Panel header="Заголовок теста" key="1">
                  <form>
                    <label>
                      <input type="radio" name="option" value="1" />
                      varinat 1
                    </label>
                    <label>
                      <input type="radio" name="option" value="2" />
                      varinat 2
                    </label>
                    <label>
                      <input type="radio" name="option" value="3" />
                      varinat 3
                    </label>
                  </form>
                </Panel>
                <Panel header="Заголовок теста" key="2">
                  <StyledCollapse expandIcon={() => <RollUpComp />}>
                    <Panel header="Заголовок теста" key="1">
                      <form>
                        <label>
                          <input type="radio" name="option" value="1" />
                          varinat 1
                        </label>
                        <label>
                          <input type="radio" name="option" value="2" />
                          varinat 2
                        </label>
                        <label>
                          <input type="radio" name="option" value="3" />
                          varinat 3
                        </label>
                      </form>
                    </Panel>
                    <Panel header="Заголовок теста" key="2">
                      <p>{text}</p>
                    </Panel>
                    <Panel header="Заголовок теста" key="3">
                      <p>{text}</p>
                    </Panel>
                  </StyledCollapse>
                </Panel>
                <Panel header="Заголовок теста" key="3">
                  <p>{text}</p>
                </Panel>
              </StyledCollapse>{' '}
            </Panel>
            <Panel header="Заголовок теста" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="Заголовок теста" key="3">
              <p>{text}</p>
            </Panel>
          </StyledCollapse>
        </StyledPanel>
        <StyledPanel
          header={
            <div className="text-in-panel">
              <span>This is header 2</span>
              <span>-/-</span>
            </div>
          }
          key="2"
        >
          <p>{text}</p>
        </StyledPanel>
        <StyledPanel
          header={
            <div className="text-in-panel">
              <span>This is header 3</span>
              <span>-/-</span>
            </div>
          }
          key="3"
        >
          <p>{text}</p>
          <Checkbox>{text}</Checkbox>
        </StyledPanel>
      </StyledCollapse>
    </div>
  );
};

export default TestPsyho;
