import styled from 'styled-components';
import {useState} from 'react'
import Player from './Player';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1678496cbemsha53fcfb968cd5e9p1f48a8jsn430498a0ffc1',
		'X-RapidAPI-Host': 'ytube-videos.p.rapidapi.com'
	}
};

function YoutubeMusic({className}) {
    const [musics, setMusics] = useState([])
    const [title, setTitle] = useState('')

   
    async function getMusics(title) {
        // title = encodeURIComponent(title);
        try {
        const res = await fetch(`https://ytube-videos.p.rapidapi.com/search-music?q=${title}&max=10&lang=EN`, options)
        const data =  await res.json()
                
        setMusics(data)
        console.log('from music', data)

        } catch(err) {
            console.log("Error:", err)
        }            
    }

    function handleSubmit(e) {
        e.preventDefault();
        getMusics(title)
    }


    console.log("title", title)
    console.log("music array", musics)
    return(
        <Wrapper >
             <form onSubmit={handleSubmit}>
                <input 
                    autoFocus
                    type="text"
                    value={title}
                    placeholder="key in your music title"
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <button className="title-search">Search</button>
            </form>
            {musics && (<Video>
                <Image><img src={musics[1].thumbnail}/></Image>
                <Info>
                <div>Title: {musics[1].title}</div>
                <div>Artist: {musics[1].artist}</div>
                <div>Album: {musics[1].album}</div>
                <div>Duration: {musics[1].duration}</div>
                {/* <pre>{JSON.stringify(musics[1], null, 2)}</pre> */}


                </Info>
                
            </Video>) 
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    align-items: center;
    padding: 5px;
    gap: 5px;

`

const Video = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5px;


`
const Image = styled.div`
    width: 180px;

    & > img {
        width: 100%;
        display: block;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
`

export default YoutubeMusic