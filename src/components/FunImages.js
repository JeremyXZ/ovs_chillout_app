import { useEffect} from 'react';
import styled from 'styled-components';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function CodePen({ codePenSlug, codePenClick}) {
  const CodePenContainer = styled.div`
    height: 250px;   
    margin-bottom: -1em;
    overflow: hidden;
    display: flex;
    gap: 5px;
   
    .codepen {
      height: 250px;
      box-sizing: border-box;
      display: block;
      align-items: center;
      justify-content: center;
      /* border: 2px solid; */
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
          onClick={codePenClick}
          style={{width: "40px", height: "25px", borderRadius: "50%", backgroundColor: "blue", color: "white", cursor: "pointer", padding: "5px", alignSelf: "center" }}
        >Next
        </button>
        <div
          className="codepen"
          data-height="250"
          data-theme-id="default"
          data-slug-hash={codePenSlug}
          data-default-tab="result"
          data-preview="true"
          // style={{ height: '250px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center',  margin: '1em 0', padding: '1em' }}
        >
         
        </div>
      </CodePenContainer>
    );
  }

  return <CodePenEmbed />;
}





// export default function CodePen() {
//   const initialSlug = "gmOwJX"
//   const selectedSlugs = ["bGpjZwN", "WxNVoq", "MWjBRWp", "XWpMONO", "YNrvpY", "BYbjyg", "DByKvO", "wKqyqY" ]
//   const [slug, setSlug] = useState(initialSlug)

//   const switchImages = () => {

//     let index = 0
//       return function () {
//         let item = selectedSlugs[index]
//         index = (index + 1) % selectedSlugs.length
//         return item
//     }
//  }
 
//  const nextImage = switchImages()

//  const handleClick = () => {
//     setSlug(nextImage())
// }

//   const CodePenContainer = styled.div`
//     height: 250px;
   
//     margin-bottom: -1em;
//     /* padding: 1.2em; */
//     overflow: hidden;
   
//     .codepen {
//       height: 250px;
//       box-sizing: border-box;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       /* border: 2px solid; */
//       margin: 1em 0;
//       padding: 1em;        
//     }
   
//     .btn {
//         width: 25px;
//         height: 25px;
//         border-radius: 50%;
//         background-color: blue;
//         color: white;
//         cursor: pointer;
//         padding: 5px 10px;
//     }
//   `;

//   function CodePenEmbed() {
//     useEffect(() => {
//       const script = document.createElement('script');
//       script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
//       script.async = true;
//       document.body.appendChild(script);
//       return () => {
//         document.body.removeChild(script);
//       };
//     }, []);

//     return (
//       <CodePenContainer >
//         <div 
//           className="codepen"
//           data-height="250"
//           data-theme-id="default"
//           data-slug-hash={slug}
//           data-default-tab="result"
//           data-preview="true"
//           style={{ height: '250px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em' }}
//         >   </div>  
//         <button class="btn" onClick={handleClick}>Change Image</button>
//       </CodePenContainer>
//     );
//   }

//   return <CodePenEmbed />;
// }

// const CodePen = () => {
//   return (
//     <>
//     <iframe height="250" style="width: 100%;" scrolling="no" title="Drawing with text" src="https://codepen.io/tholman/embed/DByKvO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
//   See the Pen <a href="https://codepen.io/tholman/pen/DByKvO">
//   Drawing with text</a> by Tim Holman (<a href="https://codepen.io/tholman">@tholman</a>)
//   on <a href="https://codepen.io">CodePen</a>.
// </iframe>
//     </>
//   )
// }
// export default CodePen