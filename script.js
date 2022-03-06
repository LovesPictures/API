// this is my first API!
console.log(`I am working`);

// variable for the fact
let fact = document.querySelector("#fact");
// variable for the factText
let factText = document.querySelector("#factText");

// create a variable for the input event
let numberInput = document.querySelector(`#numberInput`);
// create event listener for input event
numberInput.addEventListener(`input`, getFactFetch);

//get the thing
function getFactFetch() {
  //   console.log(2356);
  //get the value of the input field
  let number = numberInput.value;
  //   console.log(number);

  //fetch whatever is in the URL and the number variable - this returns a ~ Promise ~
  fetch(`http://numbersapi.com/` + number)
    //the Promise syntax, needs a .them
    //returns the Promise as map.data - we want to map the response to
    //if working with JSON set: .then(response => response.json())
    .then((response) => response.text())
    //this
    .then((data) => {
      //   console.log(data);
      //check to see if the number is equal to something or `not = nothing`
      if (number != ``) {
        //then proceed
        //display the text
        fact.style.display = `block`;
        factText.innerHTML = data;
      }
    })
    //this logs any errors in the request
    .catch((err) => console.log(err));

  //make a request to your API using the number value
}
