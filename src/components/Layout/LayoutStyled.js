import styled from '@emotion/styled';

export const Header = styled.header`
  padding: 24px;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  & nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 24px;
  }

  & .link {
    font-size: 40px;
    text-decoration: none;
    color: #fff;
  }

  & .link:hover {
    text-decoration: underline;
  }

  & .active {
    color: rgba(255, 255, 0);
  }
  & .container {
    background-color: yellow;
  }
`;

export const Pages = styled.main`
  padding: 30px;
  text-align: center;
  background-color: yellow;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Footer = styled.footer`
  padding: 30px;
  text-align: center;
  background-color: yellow;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
