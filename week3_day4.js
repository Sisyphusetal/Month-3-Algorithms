const object1 = {
    closedCreditMemos: [],
    closedDeliveryOrders: [],
    closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
    ],
    openCreditMemos: [],
    openDeliveryOrders: [
        {
            id: 123,
            type: "delivery",
            gateCode: "#2552",
        },
        {
            id: 153,
            type: "delivery",
            instructions: "Place in secure delivery box.",
        },
    ],
    openPickupOrders: [
        {
            id: 123,
            type: "pickup",
        },
    ],
    returnPickupOrders: [],
};

const expected1 = [
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 123, type: "pickup" },
];

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */
// function flattenObjectOfArrays(obj) {
//     let orders = [];

//     for(let key in obj) {
//         // console.log(obj[key].filter(value => value.length > 1))
//         if(obj[key].length == 0) {
//             console.log("empty")
//         }



//     }
// }

// console.log(flattenObjectOfArrays(object1))

// console.log(object1['closedCreditMemos'].length);


function flattenObjectOfArrays(obj) {

    //declare new empty array
    const flatArr = [];

    //for loop to iterate through keys within each object
    for (const key in obj) {
        //declare a new variable that's == object key 
        const array = obj[key];
        //iterate through that new list of object keys ... ++
        for (let i = 0; i < array.length; i++) {
            //identify id & type in each object , and those become the new array index value (aka [i])
            const { id, type } = array[i]
            //use push to add those id and type values into the new flatArr
            flatArr.push({ id, type });
        }
    }
    //   console.log(flatArr);
    return flatArr;

}