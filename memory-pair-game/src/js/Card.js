import { generateId } from './functions';
import { APP_CONFIG } from './constants';

class Card {
    constructor(target, callback, imageSrc) {
        this.target = target;
        this.callback = callback;
        this.render(imageSrc);
        this.id = "";
    }

    render(imageSrc) {
        const fragment = document.createDocumentFragment();
        const flipContainer = document.createElement('div');
        const flipper = document.createElement('div');
        const front = document.createElement('div');
        const back = document.createElement('div');
        flipContainer.classList.add('flip-container');
        flipper.classList.add('flipper');
        front.classList.add('front');
        back.classList.add('back');
        flipContainer.id = generateId();
        flipper.appendChild(front);
        flipper.appendChild(back);
        flipContainer.appendChild(flipper);
        fragment.appendChild(flipContainer);
        flipContainer.addEventListener('click', () => {
            if (this.id === flipContainer.id) return;
            if (flipContainer.classList.contains('on')) {
                flipContainer.classList.remove('on');
            } else {
                flipContainer.classList.add('on');
                this.callback(imageSrc, flipContainer.id);
                setTimeout(() => {
                    flipContainer.classList.remove('on');
                    this.id = "";
                }, APP_CONFIG.cardFlipTime);
            }
            this.id = flipContainer.id;
        });
        back.innerHTML = `<img src='${imageSrc}' alt='alt'>`;
        this.target.appendChild(fragment);
    }
}

export default Card;
