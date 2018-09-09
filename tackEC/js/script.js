
const arr = [1, 2, 3, 4, 5, 5];
const obj = {
    param: 0,
    param1: 1,
    param2: 2,
    param3: 3,
    param4: 6,
    param5: 9,
    param6: 8
};
const obj2 = {
    param7: 0,
    param8: 1,
    param9: 2,
    param10: 3,
    param11: 6,
    param12: 9,
    param13: {param: 99}
};
const sameString = "string";
const funcForMap = x => x*20;
const funcForFilter = x => x < 5;

const Concat = function(elem){
    if(elem instanceof Array){
        let newArr = [...elem];

        if(arguments.length > 1){
            for(let i=1; i < arguments.length; i++){
                newArr  = [...newArr, ...arguments[i]];
            }
        }
        return newArr;
    }else if (elem instanceof Object){
        let newObj = {...elem}
        if(arguments.length > 1){
            for(let i=1; i < arguments.length; i++){
                newObj  = {...newObj, ...arguments[i]};
            }
        }
        return newObj;
    }else {
        return elem;
    }
};

const Filter = (elem, func) => {
    if(elem instanceof Array){
        const tempArr = [...elem];
        let newArr = [];
        for(let i=0; i < tempArr.length; i++){
            if(func(tempArr[i])) newArr.push(tempArr[i]);
        }
        return newArr;
    }else if (elem instanceof Object){
        const newObj = {...elem}
        for(let key in newObj){
                if(!func(newObj[key])) {
                    delete newObj[key];
                }
            }
        return newObj;
    }else {
        return func(elem);
    }
}

const Map = (elem, func) => {
    if(elem instanceof Array){
        const newArr = [...elem];
        for(let i=0; i<newArr.length; i++){
            newArr[i] = func(newArr[i]);
        }
        return newArr;
    }else if (elem instanceof Object){
        const newObj = {...elem}

        for(let key in newObj){
            newObj[key] = func(newObj[key]);
        }
        return newObj;
    }else {
        return func(elem);
    }
}


// console.log('Map(arr, func)', Map(obj, funcForMap));
// console.log('Filter(arr, func)', Filter(obj, funcForFilter));
console.log('Concat(arr, arr)', Concat(arr, arr));
console.log('Concat(obj, obj)', Concat(obj, obj2));



console.log('arr', arr);
console.log('object', obj);

// let x = [
//     {
//         foo: {
//             bar: 5
//         }
//     },
//     {
//         foo: {
//             bar: 4
//         }
//     },
//     {
//         foo: {
//             bar: 3
//         }
//     },
//     {
//         foo: {
//             bar: 9
//         }
//     }
// ];


// const y = x => x.filter((item, i) => {
//     const newItem = {...item};
//     console.log(newItem);
//     return newItem.foo.bar < 4;
// });
//
//     console.log("x1", y(x));
//     console.log("y", y);
//     console.log("x", x);


// const x = {
//     val: 2
// };
// const x1 = x => Object.assign({}, x, { val: x.val + 1 });
//
// console.log(x1(x));
// console.log(x);
//
//
// const arr = [
//     {prop: 1},
//     {prop: 2},
//     {prop: 3},
//     {prop: 8}
// ];
// const arr2 = [
//     {prop: 4},
//     {prop: 4},
//     {prop: 4},
//     {prop: 1}
// ];
//
// const arrfunc = arr => {
//     const newarr = arr.map((item, i) => {
//         console.log('item', item);
//         // item1 = Object.assign({}, item, {prop: item.prop +1.5});
//         item1 = {...item, prop: item.prop + 1.5};
//         return item1;
//         });
//     return newarr;
// }
// console.log('arr1', arrfunc(arr));
// console.log('arr2', arrfunc(arr2));
//
// console.log('arr', arr);