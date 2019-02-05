const URL = 'https://swapi.co/api/people/';

const dataFetch = url =>
    fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText);
        })
        .then(({ results }) => results);


export const peopleFetch = () => dataFetch(URL)
    .then(results => {
        console.log("results", results);
        return Promise.all(
            results.map(person =>
                fetchStarship(person.starships)
                    .then(starships => ({...person, starships}))
            )
        );
    });

const fetchStarship = urls => Promise.all(urls.map(dataFetch));