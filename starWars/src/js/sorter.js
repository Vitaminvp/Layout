const state = {
    mass: 'asc',
    gender: 'all',
    name: ''
};
let people = [];
let draw = null;

const sortPeople = people => {
    const slised = [...people];
    const runSorting = (a, b) => a.mass - b.mass;
    if(state.mass === 'asc'){
        slised.sort(runSorting);
    }else{
        slised.sort((a, b) => runSorting(b, a));
    }
    return slised;
};

const filterPeople = people => {
    if(state.gender === 'all') return people;
    return people.filter(({gender}) => gender === state.gender);
};

const filterPeopleByName = people => {
    return people.filter(({name}) => name.toLowerCase().includes(state.name.toLowerCase()));
};

// const getDataSetValue = (elements, key) => {
//     const checked = Array.from(elements).find(( { checked } ) => checked);
//     return checked.dataset[key];
// };

const processPeople = ({ currentTarget, target }) => {
    if(target.checked) state[target.name] = target.dataset.value;
    // const massSelected = getDataSetValue(currentTarget.elements.mass, 'order');
    // const genderFilter = getDataSetValue(currentTarget.elements.gender, 'gender');
    // state.mass = massSelected;
    // state.gender = genderFilter;
    const inputString = currentTarget.elements.name.value;
    if(inputString) state.name = currentTarget.elements.name.value;

    const sorted = sortPeople(people);
    const filtered = filterPeople(sorted);
    const filteredName = state.name ? filterPeopleByName(filtered) : filtered;
    draw(filteredName);
};

export default (initData, drawPeople) => {
    people = initData;
    draw = drawPeople;
    return processPeople;
} ;
