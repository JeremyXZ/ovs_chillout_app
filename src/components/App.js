import { useState } from 'react'
import styled, { createGlobalStyle } from "styled-components"
import Header from './Header'
import Jokes from './Jokes'
import Quotes from './Quotes'
import CodePen from './FunImages'
import Weather from './Weather'
import YoutubeMusic from './Youtube'
import Reminder from './Reminder'
import { AnimDivider } from './Divider_styled'
import Player from './Player';




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
`

const title = "Time to Chill Out"

function App() {
  const [musics, setMusics] = useState([])
  const [isFullScreen, setIsFullScreen] = useState(false)
  

    return (
      <Wrapper>
      <GlobalStyle/>        
          <Header 
          title ={title}
          />
          <MainContainer>
            <div>
              <Quotes/>
              <AnimDivider/> 
            </div>
            <div>
              <Weather/>
              <AnimDivider/> 
            </div>           
            <div>
              <Reminder/>
              <AnimDivider/> 
            </div>  
            <div>
              <Jokes/>            
              <AnimDivider/>
            </div>
            <div>
              <CodePen/>
              <AnimDivider/>
            </div>
            <div>
              <YoutubeMusic setMusics={setMusics}/>
              <AnimDivider/>  
            </div>
            {musics && (
                musics.map(music  => (
                  <InfoWrapper key={music.id} onClick={() => setIsFullScreen(!isFullScreen)} >
                    <Info >
                        <Text>
                            <li>Title: {music.title}</li>
                            <li>Artist: {music.artist}</li>
                            <li>Album: {music.album}</li>    
                        </Text>
                        <Player videoId={music.id}/>                   
                    </Info>
                    <AnimDivider/>
                  </InfoWrapper>)
                  ) )
            }   
          </MainContainer>      
      </Wrapper>
    )
  }  
 
  const Wrapper = styled.div`
  display: grid;
  place-content: center;
  margin: 0;
  padding: 0;
  
`

// const MainContainer = styled.div`
//   display: grid;
//   grid-template-columns: 100%;
//   grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
//   background-color: #FCF;
//   gap: 20px;
//   min-width: 300px;
//   max-width: 1350px;
  
//   @media (min-width: 768px) {
//     grid-template-columns: repeat(2, minmax(300px, 1fr));
//     grid-auto-rows: auto;
//   }
  
//   @media (min-width: 1024px) {
//     grid-template-columns: repeat(3, minmax(300px, 1fr));
//     /* grid-template-rows: repeat(2, minmax(160px, 1fr)); */
//     grid-auto-rows: auto;
//   }
// `
// const InfoWrapper = styled.div`
//   ${(props) => props.fullScreen && `
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 9999;
//   `}
      
// `

// const Info = styled.div`
    
//     max-height: 160px;
//     /* width: 100%; */
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0 16px;
//     gap: 5px;

//     ${(props) => props.fullScreen && `
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 9999;
//   `}


//     @media (min-width: 768px) {
//       justify-content: center;
//       height: 180px;
//       gap: 10px;
      
//   }
// `

// const Text = styled.ul`
//   padding: 0;
//   margin: 0;
//   list-style: none;
// `

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(auto-fit, minmax(9.375em, 1fr));
  background-color: #FCF;
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
`

const InfoWrapper = styled.div`
  ${(props) => props.fullScreen && `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  `}
`

const Info = styled.div`
  max-height: 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  gap: 0.3125em;

  ${(props) => props.fullScreen && `
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
`

const Text = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`


export default App