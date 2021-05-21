
let apiKey = 'nBAYk2vkWhWn_frzSCYPHRU5bwFjHjSCrsCDEEyJcbA'
export const FetchProductImages = async () => {
    return await fetch('https://api.unsplash.com/search/photos?page=2&query=product?orientation=squareish', {
        method: 'GET',
        headers: {
            'Authorization': 'Client-ID ' + apiKey,
            'Accept': 'application/json',
            'Cache-Control': 'no-cache'
        }
    }).then((response) => response.json());
};