var pens; 
pens = ["orange", "blue", "purple", "green"];
console.log(pens);

// var fourthpen = pens[3];

// console.log(fourthpen);


pens.unshift("Black", "Todo");



var newPens = pens.slice();
console.log("New pens: ", newPens);

 var arraryString = pens.join("  "); 
 console.log("String from array: ", arraryString);