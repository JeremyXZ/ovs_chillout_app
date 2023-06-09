import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../Header/Header";
import Jokes from "../Jokes/Jokes";
import Quotes from "../Quotes/Quotes";
import FunImages from "../FunImages/FunImages";
import Weather from "../Weather/Weather";
import Youtube from "../Youtube/Youtube";
import Reminder from "../Reminder/Reminder";
import { AnimDivider } from "../Divider_styled";
import Player from "../Player";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Beigly';
    src: url('../fonts/FontdinerSwanky.ttf') format('ttf');
    font-weight: bold;
}
:root {
margin: 0;
padding: 0;
box-sizing: border-box;  
height: 100%;

}
`;

const title = "Time to Chill Out";

function App() {
  const [musics, setMusics] = useState([]);
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <Wrapper>
      <GlobalStyle />
      <Header title={title} />
      <MainContainer>
        <div>
          <Quotes />
          <AnimDivider />
        </div>
        <div>
          <Weather />
          <AnimDivider />
        </div>
        <div>
          <Reminder />
          <AnimDivider />
        </div>
        <div>
          <Jokes />
          <AnimDivider />
        </div>
        <div>
          <FunImages />
          <AnimDivider />
        </div>
        <div>
          <Youtube setMusics={setMusics} />
          <AnimDivider />
        </div>
        {musics &&
          musics.map((music) => (
            <InfoWrapper
              key={music.id.videoId}
              onClick={() => setIsFullScreen(!isFullScreen)}
            >
              <Info>
                <Text>
                  <li>Title: {music.snippet.title}</li>
                  <li>Channel title: {music.snippet.channelTitle}</li>
                  <li>
                    Published on: {music.snippet.publishedAt.split("T")[0]}
                  </li>
                </Text>
                <Player videoId={music.id.videoId} />
              </Info>
              <AnimDivider />
            </InfoWrapper>
          ))}
      </MainContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  margin: 0;
  padding: 0;
  /* height: 100vh; */
`;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(auto-fit, minmax(9.375em, 1fr));
  background-color: #fcf;
  gap: 1.25em;
  min-width: 18.75em;
  max-width: 84.375em;

  @media (min-width: 48em) {
    grid-template-columns: repeat(2, minmax(18.75em, 1fr));
    grid-auto-rows: auto;
  }

  @media (min-width: 64em) {
    grid-template-columns: repeat(3, minmax(18.75em, 1fr));
    grid-auto-rows: auto;
  }
`;

const InfoWrapper = styled.div`
  ${(props) =>
    props.fullScreen &&
    `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  `}
`;

const Info = styled.div`
  max-height: 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  gap: 0.3125em;

  ${(props) =>
    props.fullScreen &&
    `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  `}

  @media (min-width: 48em) {
    justify-content: center;
    height: 11.25em;
    gap: 0.75em;
  }
`;

const Text = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export default App;
