
import React, {useState, useEffect} from 'react'
import styled from 'styled-components';

const rapidKey = process.env.REACT_APP_RAPID_API_KEY

const quoteOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${rapidKey}`,
		'X-RapidAPI-Host': 'motivation-quotes-api.p.rapidapi.com'
	}
};


function Quotes() {
    
    const [quote, setQuote] = useState("")
    async function getQuote() {
        try{
          const res = await fetch("https://motivation-quotes-api.p.rapidapi.com/api/quotes", quoteOptions)
          const data = await res.json()
          const newQuote = data[0].quote
          setQuote(newQuote)
         
        } catch(error) {
          console.log("Error:", error)
        }        
      }

      useEffect(() => {
        getQuote()        
                    
      }, [])

    const handleClick = () => {
        getQuote()
    } 

    return (
        <Wrapper onClick={handleClick} data-testid='quote-wrapper'>
            <Title>Inspirational Quotes:</Title>
            <Text data-testid="quote-text">{quote}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 150px;
    display: flex;    
    justify-content: center;
    align-items: center;
    padding: 0 8px;   
   
    @media (min-width: 768px) {
      padding-left: 16px;
    }

    @media (min-width: 1024px) {
      height: 180px;
    }
`

const Text =  styled.div`
    background-color: rgb(180, 224, 76);
    padding: 10px;
    margin-right: 5px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;   
    gap: 5px;
    color: blue;   
`

const Title = styled.h4`
  color: blue;   
`

export default Quotes