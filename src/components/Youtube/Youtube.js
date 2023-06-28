import styled from "styled-components";
import React, { useState } from "react";

// const rapidKey = process.env.REACT_APP_RAPID_API_KEY;
const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": rapidKey,
//     "X-RapidAPI-Host": "youtube-music-api-detailed.p.rapidapi.com",
//   },
// };

function Youtube({ setMusics }) {
  const [title, setTitle] = useState("");

  async function getMusics(title) {
    // title = encodeURIComponent(title);
    // const url = `https://youtube-music-api-detailed.p.rapidapi.com/popular/search?lang=en&query=${title}&limit=10`;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}&maxResults=9&type=video&key=${youtubeApiKey}`;

    try {
      const res = await fetch(url);

      const data = await res.json();
      const allMusics = data.items;
      const playableMusics = allMusics.filter((music) => music.id.videoId);
      const random6Items = playableMusics
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);

      setMusics(random6Items);
    } catch (err) {
      console.log("Error:", err);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a search term");
      return;
    }
    getMusics(title);
    setTitle("");
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        value={title}
        placeholder="key in your music title"
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: "10px 20px",
        }}
      ></input>
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          backgroundColor: "rgb(180, 224, 76)",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </Wrapper>
  );
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
`;

// const Form = styled.form`
//     display: flex;
//     justify-content: flex-start;
//     gap: 16px;
//     padding-left: 0;
//     margin-left: 0;
// `

export default Youtube;
