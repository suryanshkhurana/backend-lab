let fruit = {
    apple: {
        type: "sweet",
        quan: 10,
    },
    plum: {
        cond: "good",
    }
};

fruit.message = `I have ${fruit.apple.quan} ${fruit.apple.type} apples. And some ${fruit.plum.cond} plums.`;


exports.fruit = fruit;
