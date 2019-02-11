export const shuffle = arr => arr.sort(() => 0.5 - Math.random());

export const generateId = () => {
    return `_${Math.random().toString(36).substr(2, 9)}`;
};
