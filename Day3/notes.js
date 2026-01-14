// Example 1 Drivers License Check
let driverAge=20;
if(driverAge>=18){
    console.log("Eligible for a license.");
}

// Example 2 Temperature Check
let temperature=35;
if(temperature>30){
    console.log("It's hot outside!");
}

// Example 3 Password Validation
let password="secure123";
if(password.length>=8){
    console.log("Strong password");
}

// Example 4 Grading System
let score=75;
if(score>=90){
    console.log("Grade:A+");
} else if(score>=75){
    console.log("Grade:A");
} else if(score>=60){
    console.log("Grade:B");
} else if(score>=33){
    console.log("Grade:C");
}

// Example 5 Traffic Speed Check
let speed=85;
if(speed>100){
    console.log("Severe speeding - Heavy fine");
} else if(speed>80){
    console.log("Speeding = Warning");
} else if(speed>60){
    console.log("Normal speed");
}

// Example 6 Age Category
let age=35;
if(age>=60){
    console.log("Senior citizen");
} else if(age>=18){
    console.log("Adult");
} else if(age>=13){
    console.log("Teenager");
}

// Example 7 Voting Eligibility
let ageVote=16;
if(ageVote>=18){
    console.log("You can vote");
} else{
    console.log("You cannot vote yet");
}

// Example 8 Even or Odd
let number=7;
if(number%2===0){
    console.log("Even number");
} else{
    console.log("Odd number");
}

// Example 9 Complete Chain
let Temperature=15;
if(Temperature>30){
    console.log("Hot");
} else if(Temperature>20){
    console.log("Warm");
} else{
    console.log("Cold");
}

// Example 10 Login System
let username="admin";
let Password="1234";
if(username==="admin"&&Password==="1234"){
    console.log("Login successful!");
} else{
    console.log("Invalid credentials");
}

// Example 11 Exam Results (Nested Cocditionals)
let marks=85;
if(marks>=33){
    if(marks>=80){
        console.log("Outstanding");
    } else{
        console.log("Pass");
    }
} else{
    console.log("Better luck next time!");
}

// Example 12 Age and Ticket Pricing
let ages=25;
let isStudent=true;
if(ages<18){
    console.log("Child ticket: $5");
} else{
    if(isStudent){
        console.log("Student ticket: $8");
    } else{
        console.log("Adult ticket: $12");
    }
}

// Example 13 Number Classification
let num=15;
if(num>0){
    if(num%2===0){
        console.log("Positive even number");
    } else{
        console.log("Positive odd number");
    }
} else if(num<0){
    console.log("Negative number");
} else{
    console.log("Zero");
}

// Example 14 Driver Eligibility (Logical Operators Logical AND &&)
let a=25;
let hasLicense=true;
if(a>=18 && hasLicense){
    console.log("Can drive");
} else{
    console.log("Cannot drive");
}

// Example 15 Grade Range
let s=85;
if(s>=80 && s<=100){
    console.log("Grade A");
}

// Example 16 Login Validation
let userN="admin";
let paasW="1234";
if(userN === "admin" && paasW === "1234"){
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// Example 17 Weekent and Good Weather
let isWeekend=true;
let isSunny=true;
if(isWeekend && isSunny){
    console.log("Let's go to the beach!");
}

// Example 18 Weekent Check (Logical OR ||)
let day="Saturday";
if(day==="Saturday" || day==="Sunday"){
    console.log("It's the weekend");
}

// Example 19 Free Admission 
let Ag=65;
if(Ag<5 || Ag>60){
    console.log("Free admission");
} else{
    console.log("Regular price");
}

// Example 20 Hodiday or Birthday
let isHoliday=false;
let isBirthday=true;
if(isHoliday || isBirthday){
    console.log("Day off!");
}

// Example 21 Emergency Contact
let isEmergency=true;
let isVIP=false;
if(isEmergency || isVIP){
    console.log("Priority access");
}

// Example 22 Not Logged In (Logical NOT !)
let isLoggedIn=false;
if(!isLoggedIn){
    console.log("Please log in");
}

// Example 23 Not a Weekent 
let isWeekendd=false;
if(!isWeekendd){
    console.log("Time to work!");
}

// Example 24 Inverting Conditions
console.log(!(5>3));
console.log(!(10<2));
console.log(!true);
console.log(!false);

// Example 25 Not Emply
let usernames="";
if(!usernames){
    console.log("Username is required");
}

// Example 26 Voting Eligibility (Combining Logical Operators)
let A=25;
let isCitizen=true;
let hasVoted=false;
if(A>=18 && isCitizen && !hasVoted){
    console.log("Eligible to vote");
}

// Example 27 Discount Eligibility
let AG=70;
let isStudents=false;
if(AG>60 || isStudents){
    console.log("10% discount applies");
}

// Example 28 Access Control
let isAdmin=false;
let isModerator=true;
let isOwner=false;
if(isAdmin || isModerator || isOwner){
    console.log("Acccess granted");
}

// Example 29 Complex Validation
let temperatures=25;
let isRaining=false;
if((temperatures>20 && temperatures<30 && !isRaining)){
    console.log("Perfect weather for a picnic");
}

// Example 30 Checking Strings (Truthy and Falsy Values)
let u="";
if(u){
    console.log("Welcome,"+u);
} else{
    console.log("Please enter a username");
}

// Example 31 Checking Numbers
let sc=0;
if(sc){
    console.log("You have" + sc + "points");
} else {
    console.log("No points yet");
}

// Example 32 Multiple Checks
if("hello"){
    console.log("Truthy!");
}
if(0){
    console.log("The won't run");
}
if(""){
    console.log("This won't run");
}
if([]){
    console.log("Arrays are truthy!");
}

// Example 33 Practical Use
let userInput=prompt("Enter your name");
if(userInput){
    alert("Hello," + userInput);
} else{
    alert("You did't enter a name");
}

// Example 34 Traffic Light (Switch Statement)
let signal="yello";
switch(signal){
    case "red":console.log("Stop");
    break;
    case "yello":console.log("Caution");
    break;
    case "green":console.log("Go");
    break;
    default:console.log("Invalid Signal");
}

// Example 35 Day of the Week
let days=3;
switch(days){
    case 1:console.log("Monday");
    break;
    case 2:console.log("Tuesday");
    break;
    case 3:console.log("Wednesday");
    break;
    case 4:console.log("Thursday");
    break;
    case 5:console.log("Friday");
    break;
    default:console.log("Weekend");
}

// Example 36 Multiple Cases for Same Code
let dayss="Saturday";
switch(dayss){
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday");
        break;
    default:
        console.log("Invalid day");                            
}

// Example 37 Grade Feedback
let grade="B";
switch(grade){
    case "A":console.log("Excellent work!");
    break;
    case "B":console.log("Good jog!");
    break;
    case "C":console.log("You passed");
    break;
    case "D":console.log("Failed");
    break;
    default:console.log("Invalid grade");
}

// Example 38 Simple Message (User Interactions)
alert("Welcome to our website!");

// Example 39 With Variables
let userName="SHAIK BABA";
alert("Hello," + userName + "!");

// Example 40 With Template Literals
let scores=95;
alert(`Your scores is ${scores}!`);

// Example 41 Notification
alert("File has been deleted successfully");

// Example 42 Getting Name
let usersName=prompt("What is your name?");
console.log("Hello," + usersName);

// Example 43 Getting Age with Conversion
let ageStr=prompt("Enter your age:");
let ageS=Number(ageStr);
if(ageS>=18){
    alert("You are an adult");
} else{
    alert("You are a minor");
}

// Example 44 With Default Value
let color=prompt("Favorite color?","blue");
console.log("color");

// Example 45 Calculator
let num1=Number(prompt("Enter first number:"));
let num2=Number(prompt("Enter second number"));
let sum=num1+num2;
alert(`The sum is: ${sum}`);

// Example 45 Temperature Check
let temp=Number(prompt("What's the temperature?"));
if(temp>30){
    alert("It's hot!");
} else if(temp>20){
    alert("It's warm");
} else {
    alert("It's cold");
}

// Example 46 Grade Calculator 
let scr=Number(prompt("Enter your score"));
let G;
if(scr>=90){
    grade="A";
} else if(scr>=80){
    grade="B";
} else if(scr>=70){
    grade="C";
} else{
    grade="F";
}

// Example 47 Simple Login
let UserName=prompt("Enter username:");
let PassWord=prompt("Enter password:");
if(UserName === "admin" && PassWord === "1234"){
    alert("Login successful!");
} else{
    alert("Invalid credentials");
}

// Example 48 Number Guessing
let secretNumber=7;
let guess=Number(prompt("Guess the number (1-10):"));
if(guess === secretNumber){
    alert("Correct You won!");
} else{
    alert("Wrong! The number was" + secretNumber);
}

// Example 49 Divisibility Checker
let Num=Number(prompt("Enter a number:"));
if(Num%10 === 0){
    console.log("Good");
} else{
    console.log("Bad");
}

// Example 50 User Profile
let Name=prompt("What is your name?");
let Age=prompt("What is your age?");
alert(`${Name} is ${Age} years old.`);

// Example 51 Quaterly Months
let Quaterly=Number(prompt("Enter quarter(1-4):"));
switch(Quaterly){
    case 1:console.log("January,February,Mearch");
    break;
    case 2:console.log("April,May,June");
    break;
    case 3:console.log("July,August,September");
    break;
    case 4:console.log("October,November,December");
    break;
    default:console.log("Invalid quarter");
}

// Example 52 Golden String
let str=prompt("Enter a string:");
if((str[0] === 'A' || str[0] === 'a') && str.length>5){
    console.log("Golden string!");
} else{
    console.log("Not a golden string");
}

// Example 53 Largest of Three Numbers
let n1=Number(prompt("Enter first number:"));
let n2=Number(prompt("Enter second number:"));
let n3=Number(prompt("Enter third number:"));
let largest;
if(n1>=n2 && n1>=n3){
    largest=n1;
} else if(n2>=n1 && n2>=n3){
    largest=n2;
} else{
    largest=n3;
}
alert(`The largest number is: ${largest}`);

// Example 54 Shopping Discount
let total=Number(prompt("Enter cart total:"));
if(total>100){
    let discount=total*0.2;
    total=total-discount;
    alert(`20 discount applied! New total:$${total}`);
} else if(total>50){
    let discount=total*0.1;
    total=total-discount;
    alert(`10% discount applied! New total: $${total}`);
} else{
    alert(`Total: $${total}`);
}

// Example 55 Leap Year Checker
let year=Number(prompt("Enter a year:"));
if((year%4 === 0 && year%100 !==0) || (year%400 === 0)){
    alert(`${year} is a leap year`);
} else{
    alert(`${year} is not a leap year`);
}