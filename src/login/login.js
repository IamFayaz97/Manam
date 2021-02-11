function changeUserName(){

    var formData = new FormData(document.querySelector('form'));
    localStorage.setItem("loggedUserName", formData.get("firstName") + " " + formData.get("lastName"));
    document.getElementById("loggedUserName").innerHTML = localStorage.getItem("loggedUserName");
};
// document.getElementById("loggedUserName").innerHTML = localstorage.getItem('loggedUserName');
var userName = localStorage.getItem("loggedUserName");

document.getElementById("loggedUserName").innerHTML = userName;