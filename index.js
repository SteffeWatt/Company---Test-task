
let loginPage = document.getElementById("LoginMainPage");
let TablePage = document.getElementById("TableSection");

let logOut = document.getElementById("LogoutButton");

function hideLoginPage(){
    loginPage.style.display = "none";
    TablePage.style.display = "block";

    logOut.style.display = "block";
}

function ShowLoginPage(){
    loginPage.style.display = "block";
    TablePage.style.display = "none";

    logOut.style.display = "none";
}