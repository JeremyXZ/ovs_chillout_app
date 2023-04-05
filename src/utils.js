//getting images from Splash site

  
export async function getImage(setImageUrl) { 
    const numImagesAvailable = 2100 // total photos in the collection
    const numItemsToGenerate = 20; //how many photos you want to display
    const imageWidth = 900;    //image width in pixels
    const imageHeight = 900;   //image height in pixels
    const collectionID = 3672442  //Beach & Coastal, the collection ID from the original url
    // collection ID: mountain: 401930 beach: 928423, landscape: 11649432, sea: 3403106 (find out by going to
    // https://unsplash.com/collections/  click card and read number after collection/)
    const randomNum = Math.floor(numImagesAvailable* Math.random())
    const endPoint = `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNum}`
    // "https://source.unsplash.com/collection/3672442/900x900/?sig=167"
    //`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNum}`

    try{
      const res = await fetch(endPoint)
      // const data = await res.json()
      const data = res.url
      // const randomUrl = data[randomNum].urls.full
      setImageUrl(data)
      
      console.log("success to fetch")
     
    } catch(err) {
      console.log("Error:", err)
    }
}