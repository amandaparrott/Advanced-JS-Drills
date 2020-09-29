name = 'amanda';
var name;
console.log(name); 

setName();
function setName() {
    var name = 'amanda';
    console.log(name);
};

console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    console.log('some text');
    var answer = (a + b)/2;
    return answer;
};

let fruits = ['peaches', 'bananas', 'strawberries'];

function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);
    function printFavFruit () {
        console.log(favFruit);
    };
    printFavFruit();
    console.log(leastFav);
};
 let leastFav;
 leastFav = fruits[3];

printFruits();

newFunction();
function newFunction() {
    console.log('Hello, amanda');
};


let newAlert = function () {
    alert('this is an alert');
};

alert(newAlert);
