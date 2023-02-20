
let loginPage = document.getElementById("LoginMainPage");
let TablePage = document.getElementById("TableSection");

function hideLoginPage(){
    loginPage.style.display = "none";
    TablePage.style.display = "block";
}

function ShowLoginPage(){
    loginPage.style.display = "block";
    TablePage.style.display = "none";
}