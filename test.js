const numbers = [];
var i = 0;
for(; i<5; i++) {
    numbers.push(i);
}
console.log(numbers);

var container = document.getElementById("container");
container.innerHTML += numbers;