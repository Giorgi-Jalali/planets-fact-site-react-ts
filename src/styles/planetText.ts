import styled from "styled-components";
import source from "../assets/icon-source.svg";

const InfoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (min-width: 768px) {
  grid-area: info;
  align-items: flex-start;
}
@media (min-width: 1440px) {
  margin-top: 150px;
}
`;

const H3 = styled.h3`
font-family: "Antonio", sans-serif;
font-size: 40px;
line-height: 52px;
text-align: center;
text-transform: uppercase;
margin-bottom: 16px;
@media (min-width: 768px) {
  font-size: 48px;
  line-height: 62px;
}
@media (min-width: 1440px) {
  font-size: 60px;
  line-height: 84px;
}
`;

const Paragraph = styled.p`
font-size: 14px;
line-height: 22px;
text-align: center;
@media (min-width: 768px) {
  text-align: start;
}
`;

const Source = styled.div`
margin-top: 30px;
font-size: 12px;
line-height: 25px;
opacity: 0.5;
margin-bottom: 28px;
@media (min-width: 1440px) {
  margin: 24px 0;
}
`;

const ALink = styled.a`
color: white;
font-weight: 700;
`;

const SourceIcon = styled.div`
background-image: url(${source});
background-repeat: no-repeat;
background-size: contain;
width: 12px;
height: 12px;
display: inline-block;
margin-left: 4px;
`;

export { InfoContainer, H3, Paragraph, Source, ALink, SourceIcon };