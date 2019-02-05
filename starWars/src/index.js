import 'file-loader!./index.html';
import { peopleFetch } from './js/api';
import { makePeoplesList } from './js/list';
import makeSorter from './js/sorter';
import './style/style.scss';
const app = document.getElementById("app");
const form = document.querySelector(".filters");

const drawPeople = people => {
    let clone = app.cloneNode(true);
    const peopleList = makePeoplesList(people);
    clone.innerHTML = '';
    clone.append(peopleList);
    app.replaceWith(clone);
};
const init = () => {
    peopleFetch()
        .then(people => {
            drawPeople(people);
            const handleChange = makeSorter(people, drawPeople);
            form.addEventListener('change', handleChange);
        });

};

init();
