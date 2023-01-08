import styled from "styled-components";

interface Props {
  internalPage: string;
  setInternalPage: React.Dispatch<React.SetStateAction<string>>;
  planetColor: string;
}

export default function SubtitleNavLinks(props: Props) {
  const overviewClickHandler = () => {
    props.setInternalPage("overview");
  };

  const structureClickHandler = () => {
    props.setInternalPage("structure");
  };

  const surfaceClickHandler = () => {
    props.setInternalPage("geology");
  };

  return (
    <Subtitles>
      <SubtitleOverview
        internalPage={props.internalPage}
        color={props.planetColor}
        onClick={overviewClickHandler}
      >
        <Number>01</Number>
        OVERVIEW
      </SubtitleOverview>
      <SubtitleStructure
        internalPage={props.internalPage}
        color={props.planetColor}
        onClick={structureClickHandler}
      >
        <Number>02</Number>
        STRUCTURE
      </SubtitleStructure>
      <SubtitleSurface
        internalPage={props.internalPage}
        color={props.planetColor}
        onClick={surfaceClickHandler}
      >
        <Number>03</Number>
        SURFACE
      </SubtitleSurface>
    </Subtitles>
  );
}

const Subtitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 768px) {
    grid-area: navbar;
    flex-direction: column;
    height: 170px;
    align-items: center;
    margin-top: 40px;
  }
  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;

const Subtitle = styled.h2`
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  letter-spacing: 1.92857px;
  padding: 20px 0 16px 0;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 100%;
    padding: 8px 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.2);
      background-color: rgba(216, 216, 216, 0.2);
    }
  }
`;

const SubtitleOverview = styled(Subtitle)<{
  internalPage: string;
  color: string;
}>`
  border-bottom: ${(props) =>
    props.internalPage === "overview" ? `4px solid ${props.color}` : "none"};
  @media (min-width: 768px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background-color: ${(props) =>
      props.internalPage === "overview" ? `${props.color}` : "none"};
  }
`;

const SubtitleStructure = styled(Subtitle)<{
  internalPage: string;
  color: string;
}>`
  border-bottom: ${(props) =>
    props.internalPage === "structure" ? `4px solid ${props.color}` : "none"};
  @media (min-width: 768px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background-color: ${(props) =>
      props.internalPage === "structure" ? `${props.color}` : "none"};
  }
`;

const SubtitleSurface = styled(Subtitle)<{
  internalPage: string;
  color: string;
}>`
  border-bottom: ${(props) =>
    props.internalPage === "geology" ? `4px solid ${props.color}` : "none"};
  @media (min-width: 768px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background-color: ${(props) =>
      props.internalPage === "geology" ? `${props.color}` : "none"};
  }
`;

const Number = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
    font-weight: 700;
    font-size: 9px;
    line-height: 25px;
    letter-spacing: 1.92857px;
    opacity: 0.5;
    margin-right: 17px;
  }
`;
