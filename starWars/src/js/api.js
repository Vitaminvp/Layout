const URL = 'https://swapi.co/api/people/';

const dataFetch = url =>
    fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error(res.statusText);
        });


export const peopleFetch = () => dataFetch(URL)
    .then(({results}) => {
        return Promise.all(
            results.map(person =>
                fetchStarShip(person.starships)
                    .then(starShips => ({...person, starShips}))
            )
        );
    });

const fetchStarShip = urls => Promise.all(urls.map(dataFetch));
