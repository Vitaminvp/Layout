
const processPeople = ({ currentTarget }) => {
    console.log("currentTarget.elements", currentTarget.elements.mass);
    const massSelected = Array.from(currentTarget.elements.mass).find(({ checked }) => checked);
    console.log("massSelected", massSelected);
};

export default processPeople;
