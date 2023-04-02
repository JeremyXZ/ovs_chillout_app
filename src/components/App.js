import React from 'react'
import styled, { createGlobalStyle } from "styled-components"
import Header from './Header'
import Jokes from './Jokes'
import Quotes from './Quotes'
import CodePen from './FunImages'
import Weather from './Weather'
import YoutubeMusic from './Youtube'
import Reminder from './Reminder'



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
            {/* <SectionWrapper><Quotes/></SectionWrapper>    */}
            <SectionWrapper><Weather/></SectionWrapper>   
            <SectionWrapper><Reminder/></SectionWrapper>   
            <SectionWrapper><Jokes/></SectionWrapper>
            {/* <SectionWrapper><CodePen/></SectionWrapper> */}
            <SectionWrapper><YoutubeMusic/></SectionWrapper>       
          </MainContainer>      
      </>
    )
  }  
 
const MainContainer = styled.div`
    height: 100vh;
    display: grid;    
    grid-template-columns: 1fr;
    gap: 5px;
    padding: 8px;  
       

  & > :nth-child(5) > * {
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    /* padding-right: 8px; */
    /* gap: 5px; */
  }

`


const SectionWrapper = styled.div`
  /* width: 250px; */
  /* max-height: 280px;  */
  background-color: pink;
  grid-column: 1;
  grid-row: auto;
  /* overflow: hidden; */

  
`

export default App