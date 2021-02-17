let checkOutMap = new Map();

function quantityChangeValue(id, operation) {
    var quantity = Number(document.getElementById(id).innerText);
    if (operation == "increment") {
        document.getElementById(id).innerHTML = ++quantity;
    } else {
        (quantity == 1) ? showAddButton(id) : (id, document.getElementById(id).innerHTML = --quantity)
    }
    checkOutMap.set(id, Number(document.getElementById(id).innerHTML));
    console.log("checkOutMap", checkOutMap);
}


// Object.keys(checkOutMap).forEach(function(key) {
//     console.log(key, checkOutMap[key]);
// });

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
}