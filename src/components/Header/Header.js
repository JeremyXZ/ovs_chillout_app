import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getImage } from "../../utils";

function Header({ title }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getImage(setImageUrl);
  }, []);

  return (
    <Wrapper imageUrl={imageUrl}>
      <IframeWrapper>
        <iframe
          src="https://free.timeanddate.com/clock/i8s6z6ks/n1337/szw110/szh110/hoc000/hbw0/hfc09f/cf100/hnc07c/hwc000/fas20/facfff/fnu2/fdi76/mqcfff/mqs4/mql18/mqw4/mqd60/mhcfff/mhs4/mhl5/mhw4/mhd62/mmv0/hhcfff/hhs1/hhb10/hmcfff/hms1/hmb10/hscfff/hsw3"
          frameBorder="0"
          width="110"
          height="110"
          title="local-time"
        ></iframe>
        <h3>UK</h3>
      </IframeWrapper>
      <TitleWrapper>{title}</TitleWrapper>
      <IframeWrapper>
        <iframe
          src="https://free.timeanddate.com/clock/i158/n33/szw110/szh110/hoc000/hbw0/hfc09f/cf100/hnc07c/hwc000/fas20/facfff/fnu2/fdi76/mqcfff/mqs4/mql18/mqw4/mqd60/mhcfff/mhs4/mhl5/mhw4/mhd62/mmv0/hhcfff/hhs1/hhb10/hmcfff/hms1/hmb10/hscfff/hsw3
"
          frameBorder="0"
          width="110"
          height="110"
          title="home-time"
        ></iframe>
        <h3>Japan</h3>
      </IframeWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  background-image: url("${(props) => props.imageUrl}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: grid;
  place-content: conter;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  min-width: 300px;
  max-width: 1350px;
  padding-bottom: 16px;

  @media (min-width: 768px) {
    grid-column-gap: 18vw;
  }

  @media (min-width: 1024px) {
    /* grid-column-gap: 30vw; */
  }

  & > :nth-child(1) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    justify-self: end;
  }
  & > :nth-child(2) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    justify-self: center;
    align-self: end;
  }
  & > :nth-child(3) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    justify-self: start;
  }
`;

const IframeWrapper = styled.div`
  display: grid;
  place-items: center;
  & > h3 {
    color: yellow;
    margin: 0;
    padding: 0;
    margin-left: -15px;
    margin-top: -1px;
  }

  & > iframe {
    margin: 0;
    padding: 0;
  }
`;

const TitleWrapper = styled.h1`
  color: rgb(220, 23, 191);
  font: cookie, cursive;
  font-size: 30px;
  @media (min-width: 768px) {
    letter-spacing: 1.5vw;
  }
`;
export default Header;
