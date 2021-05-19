let arrayAvatars = []

let apiKey = 'nBAYk2vkWhWn_frzSCYPHRU5bwFjHjSCrsCDEEyJcbA'
export const FetchProductImages = async () => {
    await fetch('https://api.unsplash.com/search/photos?page=1&query=product', {
        method: 'GET',
        headers: {
            'Authorization': 'Client-ID ' + apiKey,
            'Accept': 'application/json',
            'Cache-Control': 'no-cache'
        }
    }).then((response) => {
        let getData = response.json()
        // console.log(getData)
        getData.then((data) => {
            console.log(data)
            arrayAvatars.push(data.results)

        })
    }).catch((err) => console.error(err))
}