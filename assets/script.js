// Assignment Code
var global = ""
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
];

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","L","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
];

var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","_","-","=","+","~",".","/","<",">","\\",];

var numbers = ["0","1","2","3","4","5","6","7","8","9",];

function createpassword(){
   var passworstrength = prompt("Choose length of password.")
   var capLetter = confirm("Include UpperCase Characters");
   var lowercaseletter = confirm("Include LowerCase Characters");
   var specialsymbol = confirm("Include Special Characters");
   var randomNumber = confirm("Include Numbers");

  var keycodechoice = {
    passworstrength: passworstrength,                    
      capLetter: capLetter,
      lowercaseletter: lowercaseletter,
      specialsymbol: specialsymbol,
      randomNumber: randomNumber,
  }

  var outcome = [];
  var charactersneeded = [];
  function selectionRandomChar(array) {
      return array[Math.floor(Math.random() * array.length)];
  }    

  if(keycodechoice.capLetter) {
    outcome.push(selectionRandomChar(upperCase));
    charactersneeded = charactersneeded.concat(upperCase);     
   //console.log(charactersneeded);              
  }
  if(keycodechoice.lowercaseletter) {
    outcome.push(selectionRandomChar(lowerCase));
    charactersneeded = charactersneeded.concat(lowerCase);            
  } 
  if(keycodechoice.specialsymbol) {
    outcome.push(selectionRandomChar(specialCharacters));
    charactersneeded = charactersneeded.concat(specialCharacters);       
  }
  if(keycodechoice.randomNumber){
    outcome.push(selectionRandomChar(numbers));
    charactersneeded = charactersneeded.concat(numbers);               
  }

   //console.log(outcome);
   var currentpassworstrength = outcome.length;       


  for (var i = 0; i < keycodechoice.passworstrength -  currentpassworstrength; i++) {      
     var randomChar = selectionRandomChar(charactersneeded);              
      outcome.push(randomChar);
  } 
  console.log(outcome);
  outcome.map(function(str){
       global +=str
       console.log(typeof str)
  })

}



var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
var passcode = createpassword();
var inputText = document.querySelector("#password");
    inputText.value = global;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);