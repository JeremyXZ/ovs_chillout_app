import { useState } from 'react'
import styled, { createGlobalStyle } from "styled-components"
import Header from './Header'
import Jokes from './Jokes'
import Quotes from './Quotes'
import CodePen from './FunImages'
import Weather from './Weather'
import YoutubeMusic from './Youtube'
import Reminder from './Reminder'
import { Divider} from './Divider_styled'
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
              <Divider/> 
            </div>
            <div>
              <Weather/>
              <Divider/> 
            </div>           
            <div>
              <Reminder/>
              <Divider/> 
            </div>  
            <div>
              <Jokes/>            
              <Divider/>
            </div>
            <div>
              <CodePen/>
              <Divider/>
            </div>
            <div>
              <YoutubeMusic setMusics={setMusics}/>
              <Divider/>  
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
                        {/* <Image><img src={music.thumbnail}/></Image>  */}
                        <Player videoId={music.id}/>                   
                    </Info>
                    <Divider/>
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
  padding:0;

`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(auto-fit, minmax(150px, 1fr));
  background-color: #FCF;
  gap: 20px;
  min-width: 300px;
  max-width: 1350px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    grid-auto-rows: auto;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
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
    
    height: 150px;
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    gap: 5px;

    ${(props) => props.fullScreen && `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  `}


    @media (min-width: 768px) {
      justify-content: center;
      height: 180px;
      gap: 10px;
      
  }
`

const Image = styled.div`
    /* width: 160px; */

    /* & > img {
        width: 100%;
        display: block;
    } */
`

const Text = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

export default App