exports.getDate = function (){ // module is removed cause it's leveraging on nodejs shortcut...
    let today = new Date();

    let options ={
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);

}

//      ABOVE IS AN ANONIMOUS FUNCTION
// module.exports.getDate = getDate;

// function getDate(){
//     let today = new Date();

//     let options ={
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     };

//     return today.toLocaleDateString("en-US", options);

// }