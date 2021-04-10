

//RESULT BUTTON
 numberWin = 1;
 numberLost = 1;
var numCal = numberWin + numberLost-1;
 document.getElementById("resultReady").addEventListener("click", function() {      
         var userInputData = document.getElementById("userInput").value;
         var userNumber = parseInt(userInputData);
         var randomNumber =Math.floor (Math.random()*5) + 1 ;
          if (userNumber==randomNumber){
                document.getElementById("currrentResult").innerText = "বাহ!-আপনি সঠিক সংখ্যাটি দিয়েছেন-0" + randomNumber;
                document.getElementById("currrentResultFail").innerText =" ";
                document.getElementById("userInput").value = " ";
                document.getElementById("finalResult").innerText = "সঠিক উত্তর - "+ numberWin ;
                document.getElementById("three").innerText ="মোট খেলেছেন = " + numCal;
                   numberWin++; 
                   numCal++;
          }
          else {
                document.getElementById("currrentResultFail").innerText = "দুঃখিত-সঠিক সংখ্যাটি হচ্ছে-0" + randomNumber;
                document.getElementById("currrentResult").innerText = "try again";
                document.getElementById("userInput").value = "";
                document.getElementById("finalResulttwo").innerText = "ভুল উত্তর - "+ numberLost ;
                document.getElementById("three").innerText = "মোট খেলেছেন = " + numCal ;
                   numberLost++;
                   numCal++;                             
          }                 
    })
//result button end

// //reset button         
// document.getElementById("removeResult").addEventListener("click", function(){
//    document.getElementById("userInput").value = "";
//    document.getElementById("currrentResult").innerText = "please try again";
//    document.getElementById("currrentResultFail").innerText = "please try again"; 
//    document.getElementById("finalResult").innerText = "Try Again" ;
//    document.getElementById("finalResult").innerText = " 0"; 
//    document.getElementById("finalResulttwo").innerText = "Try Again" ;
//    document.getElementById("finalResulttwo").innerText = "0 ";
//    document.getElementById("three").innerText = "Try Again";
//    document.getElementById("three").innerText = "0"; 
//      numCal--  ;
//      resultReady--;
//      alert("if you start again-you will click this button many times");
//  })    
 //reset button end

//  function myFunc() {
//       document.getElementById("userInput").value = '';
//       document.getElementById("three").innerText = '';
//       document.getElementById("three").value = '';
//   }





 
