const state = {
    sortMassBy: 'asc',
    filterGenderBy: 'all'
};
let people = [];
let draw = null;

const sortPeople = people => {
    const slised = [...people];
    const runSorting = (a, b) => a.mass - b.mass;
    if(state.sortMassBy === 'asc'){
        slised.sort(runSorting);
    }else{
        slised.sort((a, b) => runSorting(b, a));
    }
    return slised;
};

const filterPeople = people => {
    if(state.filterGenderBy === 'all') return people;
    return people.filter(({gender}) => gender === state.filterGenderBy);
};

const getDataSetValue = (elements, key) => {
    const checked = Array.from(elements).find(( { checked } ) => checked);
    return checked.dataset[key];
};



const processPeople = ({ currentTarget }) => {
    const massSelected = getDataSetValue(currentTarget.elements.mass, 'order');
    const genderFilter = getDataSetValue(currentTarget.elements.gender, 'gender');

    state.sortMassBy = massSelected;
    state.filterGenderBy = genderFilter;
    console.log("people", people);
    const sorted = sortPeople(people);
    const filtered = filterPeople(sorted);
    console.log("filtered", filtered);
    draw(filtered);
};

export default (initData, drawPeople) => {
    people = initData;
    draw = drawPeople;
    return processPeople;
} ;
