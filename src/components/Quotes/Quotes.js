import React, { useState, useEffect } from "react";
import styled from "styled-components";

const rapidKey = process.env.REACT_APP_RAPID_API_KEY;

const quoteOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${rapidKey}`,
    "X-RapidAPI-Host":
      "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
  },
  params: {
    token: "ipworld.info",
  },
};

function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  async function getQuote() {
    try {
      const res = await fetch(
        "https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote",
        quoteOptions
      );
      const data = await res.json();
      const newQuote = data.text;
      const newAuthor = data.author;
      setQuote(newQuote);
      setAuthor(newAuthor);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  useEffect(() => {
    getQuote();
  }, []);

  // const handleClick = () => {
  //   getQuote();
  // };

  return (
    <Wrapper data-testid="quote-wrapper">
      <Title>Daily Inspirational Quotes:</Title>
      <Text data-testid="quote-text">
        {quote} - {author}
      </Text>
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
