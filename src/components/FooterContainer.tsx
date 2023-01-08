import styled from "styled-components";

interface Props {
  page: string;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

export default function FooterContainer(props: Props) {
  return (
    <Footer>
      <FooterDivs>
        <StatsTitle>ROTATION TIME</StatsTitle>
        <Stats>{props.rotation}</Stats>
      </FooterDivs>
      <FooterDivs>
        <StatsTitle>REVOLUTION TIME</StatsTitle>
        <Stats>{props.revolution}</Stats>
      </FooterDivs>
      <FooterDivs>
        <StatsTitle>RADIUS</StatsTitle>
        <Stats>{props.radius}</Stats>
      </FooterDivs>
      <FooterDivs>
        <StatsTitle>AVERAGE TEMP.</StatsTitle>
        <Stats>{props.temperature}</Stats>
      </FooterDivs>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 11px;
  }
  @media (min-width: 1440px) {
    gap: 30px;
    padding: 0 125px;
  }
`;

const FooterDivs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px 24px;
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 15px 20px 15px;
  }
`;

const StatsTitle = styled.div`
  font-weight: 700;
  font-size: 11px;
  line-height: 25px;
  letter-spacing: 1px;
  opacity: 0.5;
  @media (min-width: 768px) {
    font-size: 8px;
    line-height: 16px;
    letter-spacing: 0.727273px;
    margin-bottom: 6px;
  }
  @media (min-width: 1440px) {
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
  }
`;

const Stats = styled.div`
  font-family: "Antonio", sans-serif;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.75px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 31px;
    letter-spacing: -0.9px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
    line-height: 36px;
    letter-spacing: -1px;
  }
`;
