class Block {
    constructor(name) {
        this.name = name;
    }
    render() {
        const block = document.createElement('DIV');
        block.className = "block";
        const input = document.createElement('INPUT');
        const title = document.createElement('H2');
        const p = document.createElement('P');
        input.addEventListener('input', (e) =>
           p.innerHTML = e.target.value
        );
        title.innerHTML = this.name;
        block.appendChild(title);
        block.appendChild(input);
        block.appendChild(p);
        return block;
    }
}

export default Block;