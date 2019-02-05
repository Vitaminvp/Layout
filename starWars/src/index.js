import 'file-loader!./index.html';
import { peopleFetch } from './js/api';
import { makePeoplesList } from './js/list';
import processPeople from './js/sorter';
import './style/style.scss';
const app = document.getElementById("app");
const form = document.querySelector(".filters");
const init = () => {
    peopleFetch()
        .then(peoples => {
            app.append(makePeoplesList(peoples));
        });
    form.addEventListener('change', processPeople);
};

init();
