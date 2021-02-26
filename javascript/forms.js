
let preCamp = document.getElementById("preTraning-signUpForm");
let advCamp = document.getElementById("advancedTraning-signUpForm");
let weeklyCamp = document.getElementById("weeklyTraning-signUpForm");
let mainCamp = document.getElementById("mainCamp-signUpInformation");

//will make the forms display below the camp articles.
//main camp infromation
function mainCampSignUp() {
    if (mainCamp.style.display === "none") {
      mainCamp.style.display = "flex"; //this needs to be flex for the syling to work
      //closes all the other forms on the window.
      preCamp.style.display = "none";
      advCamp.style.display = "none";
      weeklyCamp.style.display = "none";
    }
    else {
      mainCamp.style.display = "none";
    }
  }


  //pre-traning camp form
  function preTraningSignUp() {
    if (preCamp.style.display === "none") {
      preCamp.style.display = "flex"; //this needs to be flex for the syling to work
      //closes all the other forms on the window.
      advCamp.style.display = "none";
      weeklyCamp.style.display = "none";
      mainCamp.style.display = "none";
      
    }
    else {
      preCamp.style.display = "none";
    }
  }
//advanced traning camp form
  function advancedTraningSignUp() {
    if (advCamp.style.display === "none") {
      advCamp.style.display = "flex"; //this needs to be flex for the syling to work
      //closes all the other forms on the window.
      preCamp.style.display = "none";
      weeklyCamp.style.display = "none";
      mainCamp.style.display = "none";
    }
    else {
      advCamp.style.display = "none";
    }
  }
  //weekly traning camp form
  function weeklyTraningSignUp() {
    if (weeklyCamp.style.display === "none") {
      weeklyCamp.style.display = "flex"; //this needs to be flex for the syling to work
      //closes all the other forms on the window.
      preCamp.style.display = "none";
      advCamp.style.display = "none";
      mainCamp.style.display = "none";
    }
    else {
      weeklyCamp.style.display = "none";
    }
  }