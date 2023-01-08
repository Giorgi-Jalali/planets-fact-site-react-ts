import { Link } from "react-router-dom";
import styled from "styled-components";
import hamburger from "../assets/icon-hamburger.svg";

import miniData from "../miniData.json";

interface Props {
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

interface ColorProps {
  color: string;
  name: string;
  page: string;
}

export default function HeaderContainer(props: Props) {
  const handleClick = () => {
    props.setMobileNavbar((prevState) => !prevState);
  };

  return (
    <Header>
      <Title>THE PLANETS</Title>

      <Hamburger mobileNavbar={props.mobileNavbar} onClick={handleClick} />
      <Nav>
        {miniData.map((planet) => {
          return (
            <PlanetTitle
              to={planet.path}
              color={planet.color}
              name={planet.name}
              page={props.page}
              onClick={() => {
                props.setPage(planet.name);
              }}
            >
              {planet.name}
            </PlanetTitle>
          );
        })}
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    margin-bottom: 27px;
  }
`;

const Title = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

const Hamburger = styled.div<{ mobileNavbar: boolean }>`
  background-image: url(${hamburger});
  background-size: contain;
  background-repeat: no-repeat;
  width: 24px;
  height: 17px;
  cursor: pointer;
  opacity: ${(props) => (props.mobileNavbar ? "1" : "0.5")};
  @media (min-width: 768px) {
    display: none;
  }
`;

const Nav = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  @media (min-width: 1440px) {
    width: 50%;
  }
`;

const PlanetTitle = styled(Link)<ColorProps>`
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
  @media (min-width: 1440px) {
    border-top: ${(props) =>
      props.name === props.page ? `4px solid ${props.color}` : "none"};
    &:hover {
      border-top: 4px solid ${(props) => props.color};
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #ffffff;
  opacity: 0.2;
`;

export { Line };
