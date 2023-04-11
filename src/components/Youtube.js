import styled from 'styled-components';
import React, {useState} from 'react'


const rapidKey = process.env.REACT_APP_RAPID_API_KEY

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${rapidKey}`,
		'X-RapidAPI-Host': 'ytube-videos.p.rapidapi.com'
	}
};

function YoutubeMusic({setMusics}) {
   
    const [title, setTitle] = useState('')

   
    async function getMusics(title) {
        // title = encodeURIComponent(title);
        try {
        const res = await fetch(`https://ytube-videos.p.rapidapi.com/search-music?q=${title}&max=6&lang=EN`, options)
        const data =  await res.json()
                
        setMusics(data)
        console.log('from music', data)

        } catch(err) {
            console.log("Error:", err)
        }            
    }

    function handleSubmit(e) {
        e.preventDefault()
        getMusics(title)
        setTitle('')
    }


    console.log("title", title)
    // console.log("music array", musics)
    return(
        
             <Wrapper onSubmit={handleSubmit}>
                <input 
                    autoFocus
                    type="text"
                    value={title}
                    placeholder="key in your music title"
                    onChange={(e) => setTitle(e.target.value)}
                    style= {{
                        padding: "10px 20px"
                        
                        }}
                ></input>
                <button 
                    style = {{padding: "10px 20px",                    
                    backgroundColor: "rgb(180, 224, 76)",
                    borderRadius: "5px",
                    cursor: "pointer"
                    }}
                >Search
                </button>
            </Wrapper>            
        
    )
}

const Wrapper = styled.form`
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    gap: 16px;
   

    @media (min-width: 768px) {
    height: 180px;
  }

`


// const Form = styled.form`
//     display: flex;
//     justify-content: flex-start;
//     gap: 16px;
//     padding-left: 0;
//     margin-left: 0;
// `


export default YoutubeMusic