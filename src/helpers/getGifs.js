const getGifs = async (category) => {
    const apiKey = "CYMyeU8cKkUcD8myc1pnsgDAmrfI9iZA";
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(data);
    return gifs;
  };

  export default getGifs;