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
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //Call displayData and write values to the screen
        displayData(fbArray);

    } else {
        alert("You must enter numbers")
    }   
    
}
//Start of FizzBuzz function, called from if loop.
function fizzBuzz(fizzValue, buzzValue) {
    
    //Initialize the returnArray
    let returnArray = [];

    //loop from 1 to 100.
    for (let i = 1; i <= 100; i++){
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

    return returnArray;

}
//Loop over the aray and create a tablerow for each idem.
function displayData(fbArray) {
    
    //Get the table body element from the page.
    let tableBody = document.getElementById("results");

    //Get the template row
    let templateRow = document.getElementById("fbTemplate");

    //Clear the table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        //Grab just the td tags and put into array.
        let rowCols = tableRow.querySelectorAll("td");

        rows[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rows[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];

        rows[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];

        rows[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];

        rows[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];


        //Add all the rows to the table.
        tableBody.appendChild(tableRow);
    }
    

}

