
export const FetchProductImages = async () => {
    return await fetch('https://api.unsplash.com/search/photos?page=1&query=code', {
        method: 'GET',
        headers: {
            'Authorization': 'Client-ID ' + process.env.REACT_APP_UNSPLASH_APIKEY,
            'Accept': 'application/json',
            'Cache-Control': 'no-cache'
        }
    }).then((response) => response.json());
};
// export const FetchProductImagesRow = async () => {
//     return await fetch('https://api.unsplash.com/search/photos?page=2&query=product', {
//         method: 'GET',
//         headers: {
//             'Authorization': 'Client-ID ' + process.env.REACT_APP_UNSPLASH_APIKEY,
//             'Accept': 'application/json',
//             'Cache-Control': 'no-cache'
//         }
//     }).then((response) => response.json());
// };
