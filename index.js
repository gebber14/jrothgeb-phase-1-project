// To Do list:  

// 2. Your project must implement at least one instance of array iteration using available array methods 
//(map, forEach, filter, etc). 
//Manipulating your API data in some way should present an opportunity to implement your array iteration.


//This the code to add the initial pop up
// const introSign = () => {
//     const introText = "Some of these jokes may use some strong language.  Are you ok with that?"
//     //const isOkWithJoke = confirm();
//     if (confirm(introText)=== true) {
//         const yesToJokes = document.getElementById("noJokes");
//         yesToJokes.innerHTML = "Click the button, and your joke will show up here!";
//         //ShowHideDiv();
//     } else {
//         const noToJokes = document.getElementById("noJokes");
//         noToJokes.innerHTML = "I understand.  Thanks for visiting!";
//     }
// }
// introSign();


//Adding a DOM content loaded, my first event listener
window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM is fully loaded and parsed');
});

const allChuckJokeArray = [];
//This is to retrieve the joke from the Chuck Norris API.
const getChuckJoke = () => {
   
  return fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => response.json())
  .then((data) =>{
   //console.log(data);
//Note: I am leaving this commented-out code in as a future idea to 
//  list multiple jokes at once.  For now, I just want to list the one.
   //    var ul = document.getElementById("list");
//    var li = document.createElement("li");
//    li.appendChild(document.createTextNode(data.value));
//    ul.appendChild(li);
    document.getElementById("noJokes").innerHTML = data.value;
    allChuckJokeArray.push(data.value);
    console.log(allChuckJokeArray);
  } )
  .catch(error => {
    
  })
  
}

//This is an event listener to record a user's response when they type a joke into the field.
//This code also takes the suggestions for jokes, adds them to an array, 
//and then uses array.from to return the most recent entry.
//For submitting a new joke:

let jokeSuggestionArray = ["test"];

const form = document.getElementById('jokeForm');
const log = document.getElementById('newJoke');
const jokeField= document.getElementById("jokeInput");

function logSubmit(event) {
event.preventDefault();

log.textContent = `Joke submitted!  Time stamp: ${event.timeStamp}.  Your submitted joke was: ${jokeField.value}`;

jokeSuggestionArray.push(jokeField.value);
console.log(jokeSuggestionArray);

const lastJokeIndex = jokeSuggestionArray.length - 1;
console.log(lastJokeIndex);
const lastJoke = jokeSuggestionArray[lastJokeIndex];
console.log(lastJoke);
}

form.addEventListener('submit', (event)=> {
logSubmit(event)
});


//This is the code for the radion buttons to record a response when each button is clicked.

let radioResult = document.querySelector('#feedbackResult');
document.body.addEventListener('change',function (e) {
    let target = e.target;
    let message;
    switch (target.id) {
        case 'masterpiece':
            message = "Wow, that is quite the compliment!";
            break;
        case 'meh':
            message = "Got it.  I'm going to keep on studying!";
            break;
        case 'blah':
            message = "Ok, kind of mean, but I can take it.";
            break;

    }
    radioResult.textContent = message;
})




//Below is code for the radio buttons, and what message is displayed when each button is clicked.
//This functionality will be added later.
// function ShowHideDiv() {
//     if(document.getElementById("masterpiece").checked) {
//         dispatchEvent.display("Booo!")
//     }
//     const dvtext = document.getElementById("meh");
//     const dvtext = document.getElementById("blah");
//     dvtext.style.display = chkYes.checked = "Dont pick me!" ; "Pick me!";
//     chkYes.style.display = dvtext.checked = "Thanks!";
// }




//DROPDOWN BUTTON CODE  Note:  this functionality will be added later.
//When the user clicks on the button,
//toggle between hiding and showing the dropdown content 
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown menu if the user clicks outside of it
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//    }