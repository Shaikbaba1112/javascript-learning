function printPattern(){
    let n = 5;
    for(let i=1; i<=n; i++){
        let row = "*";
        console.log(row.repeat(i));
    };
};
printPattern();

function studentInfo(){
    let student ={
        name: "John Doe",
        age: 20,
        course: "Computer Science"
    };
    console.log(student.name);
    console.log(student.age);
    console.log(student.course);
};
studentInfo();

function multiplyThree(a,b,c){
    return a*b*c;
}
console.log(multiplyThree(2,3,4));
console.log(multiplyThree(5,5,2));

function isEligibleToVote(age){
    let person = {
        name: "Alice",
        age: function(){
            if(age>=18){
                return" eligible to vote";
            } else{
                return" not eligible to vote";
            }
        }
    };
    console.log(person.name + person.age());
};
isEligibleToVote(42);

function findLargest(a,b){
    if(a>b){
        return a + " is the largest number.";
    } else if(b>a){
        return b + " is the largest number.";
    } else{
        return "Both numbers are equal.";
    };
};
console.log(findLargest(10,25));

function calculateDiscount(){
    let product = {
        name: "Laptop",
        price: 800,
        category: "Electronics"
    };
    let discount = 0.2
    let finalPrice = product.price - (product.price * discount);
    console.log("Final price after discount: $" + finalPrice);
};
calculateDiscount();

let x = 10; // global scope

function test(){  // function scope
    let x = 20;
    console.log(x);
};
test();
console.log(x);

function calculate(){
    let result = 100;
    console.log(result);
}
calculate();

function outer(){
    let message = "Hello";
    console.log(message);
    function inner(){
        console.log(message);
    };
    inner();
}
outer();

// passing variable from parent to child function or passing information from parent to child function is known as Lexical Scope
function parent(){
    let a = 10;
    function child(){
        let b = 20;
        console.log(a + b);
        console.log(b); // Accessing b here is valid
    };
    child();
    console.log(a); // Accessing a here is valid
}
parent();

function FunExpression(){
    let devide = function(a,b){    // Function Expression
        return a/b;
    };
    console.log(devide(4,2));
};
FunExpression();

function temparature(){
    let celsiusToFahrenheit = function(){
        let celsius = 10;
        let fahrenheit = (celsius * 9/5) + 32;
        return fahrenheit;
    };
    console.log("Temperature in Fahrenheit: " + celsiusToFahrenheit() + "°F");
};
temparature();



function add(a,b){
    return a + b;
};


function product(a,b){
    return a * b;
};


function executeOperation(a,b, operationFunc){



    // let operationFunc = function (a,b){
    // return a + b;
    // };


    return operationFunc(a,b);
};



console.log(executeOperation(5,3, add));
console.log(executeOperation(5,3, product));



function num(n){
    for(let i=0; i<n; i++){
        console.log("Hello World");
    }
};
function repeat(n, operation){
        operation(n);
    }
console.log(repeat(4, num));

function methodss(){
    let student = {
        name: "Alice",
        marks: [85, 90, 78],
        average: function(){
            let total = 0;
            for(let i=0; i<this.marks.length; i++){
                total += this.marks[i];
            }
            return total / this.marks.length;
        }
    };
    console.log("Average marks: " + student.average());
};
methodss();

function methods(){
    let rectangle = {
        length: 10,
        width: 5,
    };
    rectangle.area = function(){
        return this.length * this.width;
    };
    console.log("Area of rectangle: " + rectangle.area());
};
methods();

function method(){
    let rectangle = {
        length: 10,
        width: 5,
    };
    rectangle.perimeter = function(){
        return 2 * (this.length + this.width);
    };
    console.log("Perimeter of rectangle: " + rectangle.perimeter());
};
method();