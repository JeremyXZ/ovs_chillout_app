import React, { useEffect } from 'react';
import styled from 'styled-components';

export default function CodePen({ codePenSlug }) {
  const CodePenContainer = styled.div`
    height: 300px;
    border: 2px solid;
    margin: 1em 0;
    padding: 1em;

    .codepen {
      height: 300px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid;
      margin: 1em 0;
      padding: 1em;

      > span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
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
        <p
          className="codepen"
          data-height="500"
          data-theme-id="default"
          data-slug-hash={codePenSlug}
          data-default-tab="result"
          data-user="juliangarnier"
          data-preview="true"
          style={{ height: '300px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em 0', padding: '1em' }}
        >
          <span>
            See the Pen
            <a href={`https://codepen.io/juliangarnier/pen/${codePenSlug}`}>Anime.js Fireworks canvas demo</a>
            by Julian Garnier (<a href="https://codepen.io/juliangarnier">@juliangarnier</a>) on
            <a href="https://codepen.io">CodePen</a>.
          </span>
        </p>
      </CodePenContainer>
    );
  }

  return <CodePenEmbed />;
}
