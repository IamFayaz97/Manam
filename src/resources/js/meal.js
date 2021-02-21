var lunch_menu = [
    {"id": "chickenBiryani","name" : "Chicken Biryani", "price" : 200, "desc": "Delicious Hyderabadi Chicken biryani that makes your day.", "image": "../../../src/resources/images/lunch/chickenBiryani.jpg"},
    {"id": "eggBiryani","name" : "Egg Biryani", "price" : 150, "desc": "Delicious veg biryani that makes your day.", "image": "../../../src/resources/images/lunch/chickenBiryani.jpg"},
    {"id": "fullVegMeal","name" : "Full Veg Meal", "price" : 100, "desc": "", "image": ""},
    {"id": "curdRice","name" : "Curd Rice", "price" : 80, "desc": "", "image": ""},
    {"id": "vegPulaav","name" : "Veg Pulaav", "price" : 100, "desc": "", "image": ""},
    {"id": "tandoori","name" : "Tandoori Roti", "price" : 120, "desc": "", "image": ""}
];

function getName(id){
    for (let index = 0; index < lunch_menu.length; index++) {
        if (lunch_menu[index].id == id){
            return lunch_menu[index].name;
        }
    }
    return "";
}

function getPrice(id){
    for (let index = 0; index < lunch_menu.length; index++) {
        if (lunch_menu[index].id == id){
            return lunch_menu[index].price;
        }
    }
    return 0;
}
