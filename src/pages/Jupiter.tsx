import styled from "styled-components";
import { useContext } from "react";
import { MyContext } from "../App";

import data from "../data.json";
import miniData from "../miniData.json";

import FooterContainer from "../components/FooterContainer";

import jupiter from "../assets/planet-jupiter.svg";
import jupiterInternal from "../assets/planet-jupiter-internal.svg";
import jupiterGeology from "../assets/geology-jupiter.png";

import {
  InfoContainer,
  H3,
  Paragraph,
  Source,
  ALink,
  SourceIcon,
} from "../styles/planetText";

import MobileNavbar, { Line } from "../components/MobileNavbar";

import SubtitleNavLinks from "../components/SubtitleNavLinks";

type Context = {
  internalPage: string;
  setInternalPage: React.Dispatch<React.SetStateAction<string>>;
  mobileNavbar: boolean;
  setMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
  windowSize: number | undefined;
};

export default function Jupiter() {
  const context = useContext(MyContext) as Context;

  let planetColor = miniData[4].color;
  let planetData = data[4];

  const planet = planetData.name;

  const overviewContent = planetData.overview.content;
  const overviewSource = planetData.overview.source;

  const structureContent = planetData.structure.content;
  const structureSource = planetData.structure.source;

  const geologyContent = planetData.geology.content;
  const geologySource = planetData.geology.source;

  const rotation = planetData.rotation;
  const revolution = planetData.revolution;
  const radius = planetData.radius;
  const temperature = planetData.temperature;

  return (
    <Main>
      <Line />

      {context.mobileNavbar ||
      (context.windowSize !== undefined && context.windowSize >= 768) ? (
        <div>
          <PageBody>
            <SubtitleNavLinks
              internalPage={context.internalPage}
              planetColor={planetColor}
              setInternalPage={context.setInternalPage}
            />

            <Line />

            <Photo internalPage={context.internalPage}>
              <PlanetGeology internalPage={context.internalPage} />
            </Photo>

            <InfoContainer>
              <H3>{planet}</H3>
              <Paragraph>
                {context.internalPage === "overview"
                  ? overviewContent
                  : context.internalPage === "structure"
                  ? structureContent
                  : geologyContent}
              </Paragraph>
              <Source>
                Source :{" "}
                <ALink
                  href={
                    context.internalPage === "overview"
                      ? overviewSource
                      : context.internalPage === "structure"
                      ? structureSource
                      : geologySource
                  }
                  target="_blank"
                >
                  Wikipedia
                </ALink>
                <SourceIcon />
              </Source>
            </InfoContainer>
          </PageBody>

          <FooterContainer
            page={context.page}
            rotation={rotation}
            revolution={revolution}
            radius={radius}
            temperature={temperature}
          />
        </div>
      ) : (
        <MobileNavbar setMobileNavbar={context.setMobileNavbar} />
      )}
    </Main>
  );
}

const Main = styled.div``;

const PageBody = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 281px;
    grid-template-areas: "image image" "info navbar";
    column-gap: 69px;
  }
  @media (min-width: 1440px) {
    grid-template-columns: 760px auto;
    grid-template-areas: "image image info" "image image navbar";
    column-gap: 0;
    padding: 0 125px;
  }
`;

const Photo = styled.div<{ internalPage: string }>`
  background-image: url(${(props) => props.internalPage === "structure" ? `${jupiterInternal}` : `${jupiter}`});
  background-repeat: no-repeat;
  background-size: 224px 224px;
  background-position: center center;
  width: 100%;
  height: 304px;
  @media (min-width: 768px) {
    grid-area: image;
    height: 460px;
    background-size: 369px 369px;
  }
  @media (min-width: 1440px) {
    height: 754px;
    background-size: 582px 582px;
  }
`;

const PlanetGeology = styled.div<{
  internalPage: string;
}>`
  background-image: url(${(props) => props.internalPage === "geology" ? `${jupiterGeology}` : "none"});
  background-repeat: no-repeat;
  background-size: 80px 95px;
  background-position: bottom center;
  width: 100%;
  height: 270px;
  @media (min-width: 768px) {
    height: 410px;
    background-size: 110px 130px;
  }
  @media (min-width: 1440px) {
    height: 650px;
    background-size: 158px 190px;
  }
`;
