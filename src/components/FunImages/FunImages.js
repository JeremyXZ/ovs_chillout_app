import React, { useEffect, useState} from 'react';
import styled from 'styled-components';
// import Constellation from './particleImages/Constellation'
  
export default function FunImages() {

  const initialSlug = "gmOwJX"
  const selectedSlugs = ["bGpjZwN", "MWjBRWp", "WxNVoq", "XWpMONO", "YNrvpY", "BYbjyg", "DByKvO", "wKqyqY", "DdGRYG", "VYmXLM" ]
  const [slug, setSlug] = useState(initialSlug)
  const [IsFullScreen, setIsFullScreen] = useState(false)
  // const [imageSize, setImageSize] = useState({ width: null, height: null });
  // const imgRef = useRef(null);
  // const [imgSize, setImgSize] = useState({ width: null, height: null });
  // const [play, setPlay] = useState(true)
  
  const handleClick = () => {
    const currentIndex = selectedSlugs.indexOf(slug);
    const nextIndex = (currentIndex + 1) % selectedSlugs.length;
    setSlug(selectedSlugs[nextIndex]);
  };
  
  // const playConstellation = () => {
  //   setPlay()

  // }

  
   function CodePenEmbed() {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);

   useEffect(() => {
    document.addEventListener("fullscreenchange", exitFullScreen);
    return () => {
      document.removeEventListener("fullscreenchange", exitFullScreen);
    };
  }, []);

  const getFullScreen = () => {
    const doc = document.documentElement;
    if (doc.requestFullscreen) {
      doc.requestFullscreen();
    }
    setIsFullScreen(true);
    // setImgSize({ width, height });
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement === null) {
      setIsFullScreen(false);
     
    }
  };
  return (
    <>    
      <Wrapper>
        <Button
          onClick={handleClick}
          
        >Next
        </Button>
        <Button onClick={() => getFullScreen()}>Expand</Button> 
        
        <Image>
          <img
          // ref={imgRef}       
          className="codepen"
          data-height="150"         
          data-theme-id="default"
          data-slug-hash={slug}
          data-default-tab="result"
          data-preview="true" 
          alt=''         
          />                  
        </Image>            
      </Wrapper>
      
      {IsFullScreen && <FullScreenWrapper>
        <FullImage>
                 <img
                  data-editable="true"
                  className="codepen"
                  data-height="60%" 
                                    
                  // data-theme-id="default"
                  data-slug-hash={slug}
                  // data-default-tab="none"
                  data-preview="true" 
                  alt=''
                    style={{boxSizing: "content-box", padding: "0", margin:"0"}}
                />          
                
                {/* (<Constellation width={900} height={900} />)  */}
                
              </FullImage>   
              {/* <Button onClick={()=> setPlay(!play)}>playConstellation</Button>   */}
              <Button onClick={() => setIsFullScreen(false)}>Exit full screen</Button>        
         
      </FullScreenWrapper>
      }
      </>
    )
  }
  return <CodePenEmbed />
}

const FullScreenWrapper = styled.div`
    
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;


 
`;

const FullImage = styled.div`
display: flex;
height: 100%;
overflow: hidden;
border: none;
resize: both;


`;

const Wrapper = styled.div`
height: 150px;
/* max-height: 100%; */
/* width: 25.5625em; */
display: flex;
justify-content: center;
align-items: center;
padding: 0 8px;   


@media (min-width: 768px) {
  height: 180px;
  padding-left: 16px;
  justify-content: space-between;
}

`
const Button = styled.button`      
  width: 65px; 
  height: 65px;
  border-radius: 50% ;
  background-color: blue;
  color: white;
  cursor: pointer; 
  padding: 15px; 
  align-self: center;
  margin: 0 8px;

`

const Image = styled.div`
  display: flex;
  /* flex-grow: 1; */
  height: 90%;
  max-width: 80%;
  overflow: hidden;
  border: none;      
`