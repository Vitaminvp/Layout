const state = {
    sortMassBy: 'asc'
};
let people = [];
const processPeople = ({ currentTarget }) => {
    const massSelected = Array.from(currentTarget.elements.mass).find(({ checked }) => checked);
    state.sortMassBy = massSelected.dataset.order;
    console.log("state", state);
};

export default initData => {
    people = initData;
    return processPeople;
} ;
