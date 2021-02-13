function changeUserName() {
    var formData = new FormData(document.querySelector('form'));
    localStorage.setItem("loggedUserName", formData.get("firstName") + " " + formData.get("lastName"));
    document.getElementById("loggedUserName").innerHTML = localStorage.getItem("loggedUserName");
};
// document.getElementById("loggedUserName").innerHTML = localstorage.getItem('loggedUserName');
var userName = localStorage.getItem("loggedUserName");
document.getElementById("loggedUserName").innerHTML = userName;


// quantity incrementer
function modifyQuantity(id, operation) {
    console.log(localStorage.getItem(id) + "see");
    if (localStorage.getItem(id) > 0) {
        if (operation == 'increment') {
            localStorage.setItem(id, Number(localStorage.getItem(id)) + 1);
        } else {
            localStorage.setItem(id, Number(localStorage.getItem(id)) - 1);
        }
    } else {
        (operation == 'increment') ? localStorage.setItem(id, 1) : localStorage.setItem(id, 0);
    }
    if (localStorage.getItem(id) > 0) {
        document.getElementById(id).innerHTML = '( ' + localStorage.getItem(id) + " )";
    } else {
        document.getElementById(id).innerHTML = '';
    }
}