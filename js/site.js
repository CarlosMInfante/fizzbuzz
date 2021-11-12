//Get values from the user.  We need to get the fizz and the buzz value.
function getValues() {

    //Get the user values from the page.
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    let numbers = [];

    //Parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    
    //Check that the numbers are integers.
        //This is checking if both values are integers.  If true, continue into loop.
    if(Number.isInteger(fizzValue)  && Number.isInteger(buzzValue)){

        //callfizzBuzz
        let fbArray = FizzBuzz(fizzValue, buzzValue);
     
    } else {
        alert("You must enter numbers")
    }   
    
}
//Start of FizzBuzz function, called from if loop.
function fizzBuzz(fizzValue, buzzValue) {
    
    //Initialize the returnArray
    let returnArray = [];

    //loop from 1 to 100.
    for (let i = 1; index <= 100; i++)1{
          //Check the current in three steps.
        //Check to see if divisible by Both (3 and 5)
        //If so, push 'FizzBuzz' into an array and not the number.
        if(i % fizzValue == 0 && i % buzzValue == 0){
            
            returnArray.push('FizzBuzz');

            //Check to see if divisible by fizz value (3)
            //If so, push 'Fizz' into an array and not the number.
        }else if (i % fizzValue == 0){

            returnArray.push('Fizz');
            //Check to see if divisible by buzz value (5)
            //If so, push 'Buzz' into an array and not the number.
        }else if (i % buzzValue == 0){

            returnArray.push('Buzz');

            //If none, then push the number into the array.
        }else{
            
            returnArray.push(i);

        }        
    }

    returnArray;

}

function displayData(fbArray) {
    
    //Loop over the aray and create a tablerow for each idem.

    //Add all the rows to the table.

}

