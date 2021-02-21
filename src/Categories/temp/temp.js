var orderMap = new Map(JSON.parse(localStorage.getItem('orderList')));
var totalAmount = 0;
document.getElementById('checkoutOrders').innerText = orderMap;
window.onload = function onload() {
    var html = "<table border='1|1'>";
    orderMap.forEach((value, key) => {
        totalAmount += getPrice(key)*value; 
        html += "<tr>";
        html += "<td>" + getName(key) + "</td>";
        html += "<td>" + value + "</td>";
        html += "<td>" + getPrice(key)*value + "</td>";
        html += "</tr>";
    });
    html += "<tr style='height: 15px;'/>"
    html += "<tr><td>Total Amount</td><td>"+ totalAmount + "</td></tr>" 
    html += "</table>";
    document.getElementById("checkoutOrders").innerHTML = html;
};
