const URL = 'https://swapi.co/api/people/';

const dataFetch = url =>
    fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText);
        })
        .then(console.log);


export const peopleFetch = () => dataFetch(URL);