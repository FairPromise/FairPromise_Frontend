import styled from 'styled-components';

interface Props {
  theme: 'string';
}

export const HeaderParentContainer = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
`;

export const Header = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ffffff;
  transition: 0.354s;

  background-color: ${(props) => (props.theme === 'white' ? 'transparent' : 'white')};
  cursor: pointer;
  gap: 75px;

  & > a {
    text-decoration: none;
  }

  & > a > img[alt='공정한 공약 로고'] {
    width: 190px;
    height: 34px;
    margin-left: 150px;
  }

  & > a > p {
    font-family: 'NanumSquare EB';
    font-size: 20px;
    color: ${(props) => (props.theme === 'white' ? 'white' : 'black')};
  }
`;
