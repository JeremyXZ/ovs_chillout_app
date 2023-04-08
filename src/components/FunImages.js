import { useEffect, useState} from 'react';
import styled from 'styled-components';
  
export default function CodePen() {

  const initialSlug = "gmOwJX"
  const selectedSlugs = ["gmOwJX","bGpjZwN", "MWjBRWp", "WxNVoq", "XWpMONO", "YNrvpY", "BYbjyg", "DByKvO", "wKqyqY", "DdGRYG" ]
  const [slug, setSlug] = useState(initialSlug)
  const [IsFullScreen, setIsFullScreen] = useState(false)
  // const [imageSize, setImageSize] = useState({ width: null, height: null });
  // const imgRef = useRef(null);
  const [imgSize, setImgSize] = useState({ width: null, height: null });
  
  const handleClick = () => {
    const currentIndex = selectedSlugs.indexOf(slug);
    const nextIndex = (currentIndex + 1) % selectedSlugs.length;
    setSlug(selectedSlugs[nextIndex]);
  };
  
 

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

  const getFullScreen = (width, height) => {
    const doc = document.documentElement;
    if (doc.requestFullscreen) {
      doc.requestFullscreen();
    }
    setIsFullScreen(true);
    setImgSize({ width, height });
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
        {/* <Button onClick={() => getFullScreen("100%", "100%")}>Enlarge</Button>  */}
        
        <Image>
          <img
          // ref={imgRef}       
          className="codepen"
          data-height="150"
          datat-width="300"
          data-theme-id="default"
          data-slug-hash={slug}
          data-default-tab="result"
          data-preview="true"          
          />        
        </Image>            
      </Wrapper>
      {IsFullScreen && <FullScreenWrapper>
        <FullImage>
            <img
            className="codepen"
            // data-height="100%"           
            data-theme-id="default"
            data-slug-hash={slug}
            data-default-tab="result"
            data-preview="true" 
            style={{ width: imgSize.width, height: imgSize.height }}

            />        
          </FullImage>
          <Button onClick={() => getFullScreen(400, "200%")}>Enlarge</Button>  
          <Button onClick={() => setIsFullScreen(false)}>Exit full screen</Button>  
      </FullScreenWrapper>
        }
      </>
    )
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
    

     /* & img {
      display: block;      
      /* width: 800px;
      height: 550px; */
      /* width: ${imgSize.width}px;
      height: ${imgSize.height}px;
      object-fit: cover; */
      */
`;

const FullImage = styled.div`
  display: flex;
  height: 90%;
  overflow: hidden;
  border: none;

  & img {
    display: block;
    width: ${imgSize.width};
    height: ${imgSize.height};
    /* object-fit: ${imgSize.width === "100%" ? "contain" : "cover"}; */
    object-fit: cover;
  }
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
      width: 40px; 
      height: 40px;
      border-radius: 50% ;
      background-color: blue;
      color: white;
      cursor: pointer; 
      padding: 5px; 
      align-self: center;
      margin-right: 8px;
    
`

const Image = styled.div`
      display: flex;
      /* flex-grow: 1; */
      height: 90%;
      /* max-width: 100%; */
      overflow: hidden;
      border: none;      
    `
  


  return <CodePenEmbed />
}
