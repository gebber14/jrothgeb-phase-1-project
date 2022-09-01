// To Do list:  
// 1.  Need to add two more event listeners.  Sara suggested I use a change event listener for my radio buttons, 
// and a "submit" event listener (imput form event handler).
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

const allJokes = []
const h3 = document.createElement('h3');
const h2 = document.createElement("h2");


function ShowHideDiv() {
    if(document.getElementById("masterpiece").checked) {
        dispatchEvent.display("Booo!")
    }
    var dvtext = document.getElementById("meh");
    var dvtext = document.getElementById("blah");
    dvtext.style.display = chkYes.checked = "Dont pick me!" ; "Pick me!";
    chkYes.style.display = dvtext.checked = "Thanks!";
}


//DROPDOWN BUTTON CODE
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

//This is to retrieve the joke from the Chuck Norris API.
//How do I clear the value when people refresh or push the button?
const getChuckJoke = () => {
   
  return fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => response.json())
  .then((data) =>{
   //console.log(data);
//    var ul = document.getElementById("list");
//    var li = document.createElement("li");
//    li.appendChild(document.createTextNode(data.value));
//    ul.appendChild(li);
    document.getElementById("noJokes").innerHTML = data.value;
  } )
  .catch(error => {
    
  })
}

// var button = document.getElementById("jokeButton");
// button.addEventListener("click",function(){ alert(1);})

//delete the onclick.
// Need js to find the button that I want to add the eventlistener.  Create variable, then 
//const getRadioButtons = document.querySelectorAll("div.feedbackDiv");
//input[]
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