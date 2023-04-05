import React from 'react'
import styled, { createGlobalStyle } from "styled-components"
import Header from './Header'
import Jokes from './Jokes'
import Quotes from './Quotes'
import CodePen from './FunImages'
import Weather from './Weather'
import YoutubeMusic from './Youtube'
import Reminder from './Reminder'
import { Divider} from './Divider_styled'



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
  
    return (
      <>
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
              <YoutubeMusic/>
              <Divider/>  
            </div>     
          </MainContainer>      
      </>
    )
  }  
 


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
export default App