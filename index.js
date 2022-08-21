const { mainModule } = require("process");

const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

function ShowHideDiv() {
    if(document.getElementById("masterpiece").checked) {
        dispatchEvent.display("Booo!")
    }
    var dvtext = document.getElementById("meh");
    var dvtext = document.getElementById("blah");
    dvtext.style.display = chkYes.checked = "Dont pick me!" ; "Pick me!";
    chkYes.style.display = dvtext.checked = "Thanks!";
}

const introSign = () => {
    const isOkWithJoke = confirm("Some of these jokes may use some strong language.  Are you ok with that?");
    if (isOkWithJoke) {
        main();
    } else {
        const app = document.getElementById("app");
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }