
var amount = 0;
document.getElementById('amount').innerText = amount;

let checkOutMap = new Map();

window.onload = function onload(){
    for (let index = 0; index < lunch_menu.length; index++) {
        document.getElementById(lunch_menu[index].id + "_price").innerText = "Rs. " + lunch_menu[index].price;
    }
};

function quantityChangeValue(id, operation) {
    var quantity = Number(document.getElementById(id).innerText);
    if (operation == "increment") {
        document.getElementById(id).innerHTML = ++quantity;
        document.getElementById('amount').innerText = Number(document.getElementById('amount').innerText) + getPrice(id);
    } else {
        document.getElementById('amount').innerText = (Number(document.getElementById('amount').innerText) != 0)
            ? Number(document.getElementById('amount').innerText) - getPrice(id)
            : 0;
        (quantity == 1) ? showAddButton(id) : (id, document.getElementById(id).innerHTML = --quantity)
    }
    checkOutMap.set(id, Number(document.getElementById(id).innerHTML));
    console.log("checkOutMap", checkOutMap);
}

function showAddButton(id) {
    document.getElementById('addButton_' + id).style.display = "block";
    document.getElementById('modifyButtons_' + id).style.display = "none";
    document.getElementById(id).innerHTML = 0;
    checkOutMap.delete(id);
}

function hideAddButton(id) {
    var count = 0;
    var addButton = document.getElementById('addButton_' + id);
    var modifyButtons = document.getElementById('modifyButtons_' + id);
    addButton.style.display = "none"; //hiding Add button
    document.getElementById(id).innerHTML = ++count;
    modifyButtons.style.display = "block";
    checkOutMap.set(id, count);
    console.log(document.getElementById('amount').innerText);
    document.getElementById('amount').innerText = Number(document.getElementById('amount').innerText) + getPrice(id);
}

function checkout() {
    console.log("checkOut", checkOutMap);
    localStorage.setItem('orderList', JSON.stringify(Array.from(checkOutMap.entries())));
}




