/*alert('hi')
var mylist=['apples','oranges']
mylist.forEach(function(value, index){
    alert("i have "+value);
});
*/
console.log("hello");

var a = document.getElementById("num-a");
var b = document.getElementById("num-b");
var addSum = document.getElementById("add-sum");

a.addEventListener("input", add);
b.addEventListener("input", add);
    

function add(){
    var one = parseFloat(a.value) || 0;
    var two = parseFloat(b.value) || 0;
    console.log(one, two);
    addSum.innerHTML = "your sum is: "+(one+two);
}