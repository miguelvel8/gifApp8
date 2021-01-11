export const getGifts = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=yBN2qnyMzYvDOGI5ITghnVcgV7G19dQ0&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs  = data.map (imag => {
        return {
            id: imag.id,
            title: imag.title,
            url: imag.images.downsized_medium.url
        }
    })
    return gifs
}