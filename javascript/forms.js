
//will make the forms display below the camp articles.
function mainCampSignUp() {
    let form = document.getElementById("mainCamp-signUpInformation");
    if (form.style.display === "none") {
      form.style.display = "flex"; //this needs to be flex for the syling to work
    }
    else {
      form.style.display = "none";
    }
  }


  //sub-camp form display functions.
  function preTraningSignUp() {
    let form = document.getElementById("preTraning-signUpForm");
    if (form.style.display === "none") {
      form.style.display = "flex";
    }
    else {
      form.style.display = "none";
    }
  }

  function advancedTraningSignUp() {
    let form = document.getElementById("advancedTraning-signUpForm");
    if (form.style.display === "none") {
      form.style.display = "flex";
    }
    else {
      form.style.display = "none";
    }

  }
  function weeklyTraningSignUp() {
    let form = document.getElementById("weeklyTraning-signUpForm");
    if (form.style.display === "none") {
      form.style.display = "flex";
    }
    else {
      form.style.display = "none";
    }
  }