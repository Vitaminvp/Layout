import "file-loader!./index.html";
import "./style/style.scss";
import Cards from './js/Cards';




const app = document.querySelector("#app");
const cards = new Cards(app);
