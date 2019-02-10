import 'file-loader!./index.html';
import Block from './js/list';
import './style/style.scss';

const app = document.getElementById("app");

const drawBlocks = () => {
    const fragment = document.createDocumentFragment();

    ["first", "second", "third"].forEach(item => fragment.appendChild(new Block(item).render()));
    return fragment;
};

const init = () => {
    app.appendChild(drawBlocks());
};

init();
