import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);

  const isEmpty = Object.keys(quotes).length === 0;

  async function getQuotes() {
    try {
      const res = await fetch("https://type.fit/api/quotes");
      const data = await res.json();

      setQuotes(data);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    getQuotes();
  }, []);

  const getRandomQuote = useCallback(() => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
    }
  }, [quotes]);

  useEffect(() => {
    getRandomQuote();
  }, [quotes, getRandomQuote]);

  return (
    <Wrapper data-testid="quote-wrapper">
      <Title>Daily Inspirational Quotes:</Title>
      {!isEmpty && (
        <Text data-testid="quote-text">
          {randomQuote?.text}
          {" - "} {randomQuote?.author}
        </Text>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;

  @media (min-width: 768px) {
    padding-left: 16px;
  }

  @media (min-width: 1024px) {
    height: 180px;
  }
`;

const Text = styled.div`
  background-color: rgb(180, 224, 76);
  padding: 10px;
  margin-right: 5px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  color: blue;
`;

const Title = styled.h4`
  color: blue;
`;

export default Quotes;
