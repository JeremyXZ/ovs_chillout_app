
import {useState, useEffect} from 'react'
import styled from 'styled-components';

const quoteOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1678496cbemsha53fcfb968cd5e9p1f48a8jsn430498a0ffc1',
		'X-RapidAPI-Host': 'motivation-quotes-api.p.rapidapi.com'
	}
};


function Quotes() {
    const [quote, setQuote] = useState('')
    async function getQuote() {
        try{
          const res = await fetch("https://motivation-quotes-api.p.rapidapi.com/api/quotes", quoteOptions)
          const data = await res.json()
          const newQuote = data[0].quote
          setQuote(newQuote)
          console.log(newQuote)
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
        <Wrapper onClick={handleClick}>
            <Title>Inspirational Quotes</Title>
            <Text>{quote}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Text =  styled.div`
    background-color: rgb(180, 224, 76);
    width: 80%;
    padding: 10px;
    margin: 5px;
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