import { useState } from 'react'
import styled from 'styled-components'
const baseURL = "https://v2.jokeapi.dev"
const categories = ["Programming", "Misc", "Pun", "Spooky", "Christmas"]
const params = [
    "blacklistFlags=nsfw,religious,racist",
    "idRange=0-100"
]



function Jokes() {
    const [jokes, setJokes] = useState({part1: null, part2: null})
   

    const handleClick = () => {
        getJokes();
        
    }
    async function getJokes() {
        const res = await fetch(`${baseURL}/joke/${categories.join(",")}?${params.join("&")}`)
        const data = await res.json()
        if(data.type === "single") {
            console.log(data.joke)
            setJokes(prevState => (
                {...prevState, part1: data.joke}
            ))
        } else {
            console.log(data.setup);
            setJokes(prevState => (
                {...prevState, part1: data.setup}
            ))
            setTimeout(() => {               
                setJokes(prevState => (
                    {...prevState, part2: data.delivery }
                ))
            }, 3000);
        }
    }   
    // useEffect(() => {
    //     getJokes()
    // }, [])
    

    return(
        <Wrapper onClick = {handleClick}>
            <Title>Random Joke:</Title>
            {jokes.part1 && <Text>
                <div>{jokes.part1}</div>
                <div>{jokes.part2}</div>
            </Text>
            }
        </Wrapper>
        )
        
}

const Wrapper = styled.div`
     padding: 8px;
    /* background-color: blue; */
    display: flex;
    justify-content: center;
    padding: 0 8px;
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
   
    gap: 10px;
    color: blue;
`
const Title = styled.h4`    
    font-family: 'FontdinerSwanky', sans-serif;
    /* margin-left: 8px; */
    color: blue;
`

export default Jokes