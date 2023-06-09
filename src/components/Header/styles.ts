import { Header } from 'antd/es/layout/layout';
import styled from 'styled-components';
import { Input } from 'antd';
import { ReactComponent as LogoE  } from '../../assets/logoE.svg';
import { ReactComponent as Reload } from '../../assets/Reload.svg';
import { ReactComponent as Profile } from '../../assets/Profile.svg';


export const HeaderStyle = styled(Header)`
	position: fixed;
	z-index:44;
	/* top: auto; */
	/* left: 0; */
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  width: 600px;
  height: 64px;
  padding-inline: 0px;
  line-height: 64px;
  background-color: #7dbcea;
  box-shadow: inset 0px -2.5px 2.5px rgba(66, 104, 123, 0.2);
`;

export const StyledLogo = styled(LogoE)`
  margin: 20px 0 20px 20px;
  width: 32px;
  height: 32px;
  path {
    fill: #fafafa;
  }
`;

export const StyledInput = styled(Input)`
  border: 1px solid #42687b;
  border-radius: 3px;
  margin: 0 20px 0 20px;
  width: 360px;
  height: 40px;
`;

export const StyledReload = styled(Reload)`
  margin: 0 20px 0 5px;
  width: 50px;
  height: 50px;
  path {
    fill: #fafafa;
  }
`;

export const StyledProfile = styled(Profile)`
  margin: 0 20px 0 5px;
  width: 50px;
  height: 50px;
  path {
    fill: none;
  }
`;
