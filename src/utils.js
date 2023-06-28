//getting images from unsplash site
const unsplashApiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

export async function getImage(setImageUrl) {
  const endPoint = `https://api.unsplash.com/photos/random?client_id=${unsplashApiKey}`;

  try {
    const res = await fetch(endPoint);
    const data = await res.json();
    const url = data.urls.regular;

    setImageUrl(url);

    console.log("success to fetch");
  } catch (err) {
    console.log("Error:", err);
  }
}
