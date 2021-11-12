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
    if(Number.isInteger(fizzValue)  && Number.isInteger(buzzValue)){
        //we call generateNumbers
        let numbers = generateNumbers(fizzValue, buzzValue);
        //we call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("You must enter numbers")
    }

    //We call fizzBuzz

    //Call displayData and write values to the screen.
    
}

function fizzBuzz(fizzValue, buzzValue) {
    
    //Initialize the returnArray
    let returnArray = [];
    //loop from 1 to 100.

    //Check the current in three steps.
    //Check to see if divisible by Both (3 and 5)
    //If so, push 'FizzBuzz' into an array and not the number.

    //Check to see if divisible by fizz value (3)
    //If so, push 'Fizz' into an array and not the number.
    
    //Check to see if divisible by buzz value (5)
    //If so, push 'Buzz' into an array and not the number.
    
    //If none, then push the number into the array.

    returnArray;

}

function displayData(fbArray) {
    
    //Loop over the aray and create a tablerow for each idem.

    //Add all the rows to the table.

}

