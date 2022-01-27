export const getGifs = async (category) => {
    const KEY = 'OkpfeRLseOMtrhFGqsxzHs6TbASjdLUU'
    const PATH = 'https://api.giphy.com/v1/gifs'
    const URL = `${PATH}/search?api_key=${KEY}&q=${ encodeURI(category)}&limit=10`
    const resp = await fetch(URL);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

    // setImages(gifs);
}