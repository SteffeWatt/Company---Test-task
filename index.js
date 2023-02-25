
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

//------------------------------------TABLE PAGE------------------------------------------------

const table = document.getElementById("tableBody");
table.addEventListener('click', deleteTableRow);
table.addEventListener("click", editTableRow);




function addTableRow(){


    table.innerHTML += '' +
        '<tr>\n' +
        '<td><h2>Steffen</h2></td>\n' +
        '<td><h2>19.12.1997</h2></td>\n' +
        '<td><h2>Steffengravdehaug@hotmail.no</h2></td>\n' +
        '<td>\n' +
        '<div class="Table_Icons">\n' +
        '<img src="Icons/Edit_icon.png" class="EditTableRow">\n' +
        '<img src="Icons/Delete_icon.png" class="DeleteTableRow">\n' +
        '</div>\n' +
        '</td>\n' +
        '</tr>'
}

function editTableRow(e){
    if (!e.target.classList.contains("EditTableRow")) {
        return;
    }

    const RowData = e.target.closest('tr');

    e.target.innerHTML =
        table.innerHTML += '' +
            '<tr>\n' +
            '<td><input>Steffen</input></td>\n' +
            '<td><h2>19.12.1997</h2></td>\n' +
            '<td><h2>Steffengravdehaug@hotmail.no</h2></td>\n' +
            '<td>\n' +
            '<div class="Table_Icons">\n' +
            '<img src="Icons/Checkmark.png" class="SubmitChanges">\n' +
            '<img src="Icons/CancelX.png" class="CancelChanges">\n' +
            '</div>\n' +
            '</td>\n' +
            '</tr>'



    console.log("Test")
}


function deleteTableRow(e){

    if (!e.target.classList.contains("DeleteTableRow")) {
        return;
    }

    const btn = e.target;
    btn.closest('tr').remove();
      

}