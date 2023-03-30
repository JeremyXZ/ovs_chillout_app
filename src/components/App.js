import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from "styled-components"
import Header from './Header'
// import { QUERIES } from '../constants'


const GlobalStyle = createGlobalStyle`
 :root {
  margin: 0;
  padding: 0;
  box-sizing: border-box;  
 }
`

const title = "Time to Chill Out"

export default function App() {
  
    return (
      <>
      <GlobalStyle/>        
          <Header 
          title ={title}
          />
          <MainContainer>
            <SectionWrapper>Quotes</SectionWrapper>   
            <SectionWrapper>Weather</SectionWrapper>   
            <SectionWrapper>Reminder</SectionWrapper>   
            <SectionWrapper>Jokes</SectionWrapper>
            <SectionWrapper>Images</SectionWrapper>
            <SectionWrapper>Youtube</SectionWrapper>       
          </MainContainer>      
      </>
    )
  }  

  // <QuotesWrapper>Quotes</QuotesWrapper>   
  // <WeatherWrapper>Weather</WeatherWrapper>   
  // <ReminderWrapper>Reminder</ReminderWrapper>   
  // <JokesWrapper>Jokes</JokesWrapper>
  // <ImagesWrapper>Images</ImagesWrapper>
  // <YoutubeWrapper>Youtube</YoutubeWrapper>  

const MainContainer = styled.div`
    display: grid;    
    grid-template-columns: 1fr;
    gap: 5px;
    padding: 8px;



`


const SectionWrapper = styled.div`
  /* /* width: 250px; */
  /* height: 200px;  */
  background-color: pink;
  grid-column: 1;
  grid-row: auto;
  
  

`

