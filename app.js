//Assignment-7
//Question-1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your nick name");
// var fullName = firstName +" " + secondName;
// alert("Sir! your full name is " +fullName);

//Question-2
// var mobileName = prompt("Enter your favorite mobile name");
// var length = mobileName.length;
// document.write("My favorite phone is: " + mobileName);
// document.write("<br>")
// document.write("Length of the string: "+ length);

//Question-3
// var country = "Pakistani"
// var findIndex = country.indexOf("n")
// document.write("String: " +country);
// document.write("<br>");
// document.write("Index of 'n':"+findIndex);

//Question-4
// var text = "Hello World";
// var findIndex = text.lastIndexOf("l");
// document.write("String: "+text +"<br>");
// document.write("Last index of 'l': "+ findIndex)

//Question-5
//  var country = "Pakistani"
// var charIndex = country.charAt("3")
// document.write("String: " +country);
// document.write("<br>");
// document.write("Charater at index 3: "+charIndex);

//Question-6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" "+lastName);
// document.write("Sir! your name is: "+fullName)

//Question-7
// var city = "Hyderabad";
// var replace = city.replace("Hyder","Islam")
// document.write("City: "+city);
// document.write("<br>");
// document.write("After replacement: "+replace);

//Question-8
// var message ="Ali and Sami are best friends. They play cricket and football together.";
// var replace = message.replace(/and/g, "&");
// document.write(replace)

//Question-9
// var str = "472";
// var num = Number(str);
// document.write("Value: " +str+"<br>");
// document.write("Type: "+typeof(str)+"<br>");
// document.write("Value: "+num+"<br>")
// document.write("Type: "+typeof(num)+"<br>")

//Question-10
// var input = prompt("Enter any word to convert in title case");
// var titleCase = input.slice(0,1);
// var firstChar = titleCase.toUpperCase();
// var charLowerCase = input.slice(1)
// var lastChar = charLowerCase.toLowerCase()
// document.write("User input: "+input);
// document.write("<br>")
// document.write("Title case: "+(firstChar+lastChar));

//Question-11
// var text = prompt("Enter the word")
// var text1 = text.toUpperCase();
// document.write("User input: "+text);
// document.write("<br>");
// document.write("Upper case: "+text1)

//Question-12
// var num = "35.36"
// var str = num.replace("35.36","3536");
// document.write("Number: "+num);
// document.write("<br>");
// document.write("String: "+str)

//Question-13
// var userName = prompt("Enter your name please!");
// var flag = false;
// for (var i=0; i<userName.length; i++) {
//     if (userName[i] === "@" || userName[i] === "!" || userName[i] === ","|| userName[i] === "." || userName[i] === "#" ){
//         flag= true;
//         alert("enter a valid name please")
//         break;
//     }
// }
// if (flag === false) {
//     alert("your name is "+userName)
// }

//Question-14
// var item = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to Disco bakery.What do you want Sir/Ma'am").toLowerCase();
// var flag = false;
// for (var i = 0 ; i < item.length; i++) {
//     if (userInput === item[i]){
//         flag = true
//         var index = item.indexOf(userInput)
//         document.write(userInput + "<b>"+" is available"+ "</b>" +" at "+index+ " in our bakery")
//         break;
//     }
// }if (flag === false) {
//     document.write("We are sorry! "+userInput+ "<b>"+" not available"+ "</b>" + " in our bakery")

// }

//Question-16
// var university = "University of Karachi";
// var char = university.split("");
// console.log(char)

//Question-17
// var country = prompt("Enter the country name")
// var lastchr = country.charAt(country.length - 1)
// document.write("User input: "+country);
// document.write("<br>");
// document.write("Last Character of input: "+lastchr);

//Question-18
// var str ="the quick brown fox jumps over the lazy dog"
// var count = str.match(/the/g).length
// console.log(count)