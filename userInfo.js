const sayName = () => {
    console.log("Hello there john");
};

const sayAddress = () => {
    console.log("Street of Elitess");
};

//exporting

// module.exports = sayName;

module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;