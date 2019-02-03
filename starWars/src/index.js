import { peopleFetch } from './js/api';
import { makePeoplesList } from './js/list';
import './style/style.scss';
const app = document.getElementById("app");

const init = () => {
    peopleFetch()
        .then(peoples => {
            app.append(makePeoplesList(peoples));
        });
};

init();