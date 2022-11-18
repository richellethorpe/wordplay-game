// //Turn that sentence into an array using the String.prototype.split() method.
// Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
// Finally, reverse the order of the new array, Array.prototype.join() it back together into a string, and display it to the user.
function handleForm(event) {
  event.preventDefault();
  const userInput = document.getElementById("sentance").value;
  
  const inputArray =userInput.split(" ");
  console.log(inputArray);

  let threeOrMore = []
  inputArray.forEach(element => {
    if (element.length >= 3) {
      threeOrMore.push(element);
    }
  })
  const backwardsArray = threeOrMore.reverse();
  const result = backwardsArray.join(" ");
  console.log(result);

  document.getElementById("result").removeAttribute("class");
  document.querySelector("p#yourResult").innerText= result;
}


window.addEventListener('load', function () {
  document.querySelector('form#wordPlay').addEventListener('submit',handleForm);
});