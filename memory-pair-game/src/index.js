import "file-loader!./index.html";
import "./style/style.scss";
import Cards from './js/Cards';




const app = document.querySelector("#app");
const init = () => new Cards(app);

init();
