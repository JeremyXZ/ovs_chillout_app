import { useEffect, useState} from 'react';
import styled from 'styled-components';
  
export default function CodePen() {

  const initialSlug = "gmOwJX"
  const selectedSlugs = ["gmOwJX","bGpjZwN", "MWjBRWp", "WxNVoq", "XWpMONO", "YNrvpY", "BYbjyg", "DByKvO", "wKqyqY" ]
  const [slug, setSlug] = useState(initialSlug)

  
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

   

  return (
      <Wrapper>
        <Button
          onClick={handleClick}
          
        >Next
        </Button>
        <Image>
          <img
          className="codepen"
          data-height="150"
          data-theme-id="default"
          data-slug-hash={slug}
          data-default-tab="result"
          data-preview="true" 
          />        
        </Image>     
        
      </Wrapper>
    )
  }

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

 