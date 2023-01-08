import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../assets/icon-chevron.svg";
import miniData from "../miniData.json";

type Props = {
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileNavbar(props: Props) {
  const mobileNavbarHandler = () => {
    props.setMobileNavbar((prevState) => !prevState);
  };

  return (
    <MobileNavbarContainer>
      {miniData.map((planet) => {
        return (
          <div>
            <LinkToPage to={planet.path} onClick={mobileNavbarHandler}>
              <MobileNavbarTitleContainer>
                <CircleTitle>
                  <Circle color={planet.color} />
                  <Title>{planet.name}</Title>
                </CircleTitle>

                <Arrow />
              </MobileNavbarTitleContainer>
            </LinkToPage>
            <MobileNavLine />
          </div>
        );
      })}
    </MobileNavbarContainer>
  );
}

const MobileNavbarContainer = styled.div`
  background-color: #070724;
  width: 325px;
  height: 598px;
  padding: 44px 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

const LinkToPage = styled(Link)`
  color: White;
  text-decoration: none;
`;

const MobileNavbarTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const CircleTitle = styled.div`
  display: flex;
  align-items: center;
`;

const Circle = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1.36364px;
  margin-left: 24px;
`;

const Arrow = styled.div`
  background-image: url(${arrow});
  background-position: center;
  width: 4px;
  height: 8px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #ffffff;
  opacity: 0.2;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLine = styled(Line)`
  margin: 20px 0;
  opacity: 0.1;
`;

export {
  MobileNavbarContainer,
  LinkToPage,
  MobileNavbarTitleContainer,
  CircleTitle,
  Circle,
  Title,
  Arrow,
  Line,
  MobileNavLine,
};
