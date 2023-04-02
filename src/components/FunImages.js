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


  const CodePenContainer = styled.div`
    height: 250px;   
    overflow: hidden;
    display: flex;
    gap: 5px;
    
    .codepen {
      height: 250px;
      box-sizing: border-box;
      display: block;
      align-items: center;
      justify-content: center;
      margin: 1em 0;
      padding: 1em;        
    }
  `;
 
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
      <CodePenContainer>
        <button
          onClick={handleClick}
          style={{width: "40px", height: "25px", borderRadius: "50%", backgroundColor: "blue", color: "white", cursor: "pointer", padding: "5px", alignSelf: "center" }}
        >Next
        </button>
        <div
          className="codepen"
          data-height="250"
          data-theme-id="default"
          data-slug-hash={slug}
          data-default-tab="result"
          data-preview="true"
          // style={{ height: '250px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center',  margin: '1em 0', padding: '1em' }}
        >
        
        </div>
      </CodePenContainer>
    )
  }
  
    return <CodePenEmbed />
  }

 