import { useContext } from "react";
import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { MyContext } from "../App";

import background from "../assets/background-stars.svg";
import HeaderContainer from "../components/HeaderContainer";

type Context = {
  internalPage: string;
  setInternalPage: React.Dispatch<React.SetStateAction<string>>;
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  windowSize: number | undefined;
};

export default function Root() {
  const context = useContext(MyContext) as Context;

  return (
    <MainContainer>
      <GlobalStyle />
      <HeaderContainer
        mobileNavbar={context.mobileNavbar}
        setMobileNavbar={context.setMobileNavbar}
        page={context.page}
        setPage={context.setPage}
      />
      <Outlet />
    </MainContainer>
  );
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Antonio&display=swap');
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // font-family: 'Antonio', sans-serif;
  font-family: 'League Spartan', sans-serif;
  font-weight: 400;
}
  body {
    background-color: #070724;
    background-image: url(${background});
    color: white;
    width: 375px;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    overflow-x: hidden;
    @media (min-width: 768px) {
      width: 768px;
    }
    @media (min-width: 1440px) {
      width: 1440px;
    }
  }
`;

const MainContainer = styled.div`
  padding: 16px 24px 47px 24px;
  @media (min-width: 768px) {
    padding: 32px 40px 36px 40px;
  }
`;
