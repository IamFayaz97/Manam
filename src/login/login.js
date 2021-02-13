function changeUserName() {
    var formData = new FormData(document.querySelector('form'));
    localStorage.setItem("loggedUserName", formData.get("firstName") + " " + formData.get("lastName"));
    document.getElementById("loggedUserName").innerHTML = localStorage.getItem("loggedUserName");
};
var userName = localStorage.getItem("loggedUserName");
document.getElementById("loggedUserName").innerHTML = userName;


// quantity incrementer
function modifyQuantity(id, operation) {
    var quantity = Number(localStorage.getItem(id));
        if (operation == 'increment') {
            localStorage.setItem(id, quantity + 1);//increment the quantity
        } else {
            (quantity == 1) ? showAddButton(id) : localStorage.setItem(id, quantity - 1); //check and decrement the quantity
        }

    document.getElementById(id).innerHTML = '( ' + localStorage.getItem(id) + " )";

}

//hide add button and show modify buttons
function hideAddButton(id) {
    var addButton = document.getElementById('addButton_' + id);
    var modifyButtons = document.getElementById('modifyButtons_' + id);
    addButton.style.display = "none"; //hiding Add button
    localStorage.setItem(id, 1);
    document.getElementById(id).innerHTML = '( ' + localStorage.getItem(id) + " )";
    modifyButtons.style.display = "block"; //showing increment and decrement buttons
}

//show add button and hide modify buttons
function showAddButton(id){
    document.getElementById('addButton_' + id).style.display = "block";
    document.getElementById('modifyButtons_' + id).style.display = "none";
    localStorage.setItem(id, 0);
}

var lunch_ChickenBiryani = 200;
var lunch_EggBiryani = 150;
var lunch_FullVegMeal = 100;
var lunch_CurdRice = 50;
var lunch_VegPulaav = 75;
var lunch_Tandoori = 100;