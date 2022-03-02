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
  fetch(`http://numbersapi.com/#42` + number)
    //the Promise sytax, needs a .them
    //returns the Promis as map.data - we want to map the responce to
    //if working with JSON set: .then(response => response.json())
    .then((response) => response.text())
    //this
    .then((data) => {
      //   console.log(data);
      //check to see if the number is equial to something or `not = nothing`
      if (number != ``) {
        //then proceed
        //displacy the text
        fact.style.display = `block`;
        factText.innerHTML = data;
      }
    })
    //this logs any errors in the request
    .catch((err) => console.log(err));

  //make a request to your API usifn the number value
}
