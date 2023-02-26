


const introSign = () => {
    const introText = "Some of these jokes may use some strong language.  Are you ok with that?"
    
    if (confirm(introText)=== true) {
        const yesToJokes = document.getElementById("noJokes");
        yesToJokes.innerHTML = "Click the button, and your joke will show up here!";
        
    } else {
        const noToJokes = document.getElementById("noJokes");
        noToJokes.innerHTML = "I understand.  Thanks for visiting!";
    }
}
introSign();



window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM is fully loaded and parsed');
});

const allChuckJokeArray = [];

const getChuckJoke = () => {
   
  return fetch('https://api.chucknorris.io/jokes/random')
  .then((response) => response.json())
  .then((data) =>{
   
    document.getElementById("noJokes").innerHTML = data.value;
    allChuckJokeArray.push(data.value);
    console.log(allChuckJokeArray);
  } )
  .catch(error => {
    console.log("Error retrieving joke")
  })
  
}



let jokeSuggestionArray = [];

const form = document.getElementById('jokeForm');
const log = document.getElementById('newJoke');
const jokeField= document.getElementById("jokeInput");
const previousJokes = document.querySelector('.previous-joke')

console.log(previousJokes);

function logSubmit(event) {
    event.preventDefault();
    
    log.textContent = `Joke submitted!  Time stamp: ${event.timeStamp}.  Your submitted most recent submitted joke was: ${jokeField.value}`;
    
    jokeSuggestionArray.push(jokeField.value);
    console.log(jokeSuggestionArray);

if(jokeSuggestionArray.length == 0){
    previousJokes.textContent =" No previous joke"
}else{
   const jokeList =  jokeSuggestionArray.map((joke)=>{
        return `<h4>${joke}</h4>`
    }).join()

    previousJokes.innerHTML = jokeList
}

}




form.addEventListener('submit', (event)=> {
logSubmit(event)

});









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



