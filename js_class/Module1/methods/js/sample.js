let customers = [
    {
        firstname: "Amadi",
        lastname: "Kingsley",
        phone: ["09034523435"],
        email: "amadikngs@gmail.com",
        items: ["Milk", "Milo", "Bread"],
        amount: 1500
    },
    {
        firstname: "Amadi",
        lastname: "Goshen",
        phone: ["08012346789", "07021212341"],
        email: "goshamadi@gmail.com",
        items: ["Biscuit", "Groundnut"],
        amount: 300
    },
    {
        firstname: "Joshua",
        lastname: "Hebrew",
        phone: ["090238354723"],
        email: "hebjosh@gmail.com",
        items: ["Milk"],
        amount: 800
    }
]

let totalAmount = 0;

// for (let i = 0; i < customers.length; i++) {
//     const customer = customers[i];
//     let itemsBought;
//     let no_items = customer.items.length;
//     // console.log(no_items > 0 ? no_items : 'No _item' );
//     if (no_items > 0) {
//         itemsBought = no_items + " item(s)";
//     } else {
//         itemsBought = "No Item";
//     }
    
//     console.log(customer.firstname + " " + customer.lastname + "\n" + customer.email + "\nBought: " + itemsBought + " - ₦" + customer.amount);
//     totalAmount = totalAmount + customer.amount
// }

customers.forEach(function(customer){
    let itemsBought;
    let no_items = customer.items.length;
    // console.log(no_items > 0 ? no_items : 'No _item' );
    if (no_items > 0) {
        itemsBought = no_items + " item(s)";
    } else {
        itemsBought = "No Item";
    }
    
    console.log(customer.firstname + " " + customer.lastname + "\n" + customer.email + "\nBought: " + itemsBought + " - ₦" + customer.amount);
    totalAmount = totalAmount + customer.amount
})

console.log("The total amount sold is " + totalAmount);