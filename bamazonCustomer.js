var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3000,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazon"
});


//Functions
function displayAll() {
    //show all ids, names, and products from database.
    connection.query('SELECT * FROM Products', function(error, response) {
        if (error) { console.log(error) };
        //New instance of our constructor
        var theDisplayTable = new Table({
            //declare the value categories
            head: ['Item ID', 'Product Name', 'Department', 'Price', 'Quantity'],
            //set widths to scale
            colWidths: [10, 30, 18, 10, 14]
        });
        //for each row of the loop
        for (i = 0; i < response.length; i++) {
            //push data to table
            theDisplayTable.push(
                [response[i].ItemID, response[i].ProductName, response[i].DepartmentName, response[i].Price, response[i].StockQuantity]
            );
        }
        //amazon products should appear in console
        console.log(theDisplayTable.toString());
        inquireForPurchase();
    });


}; 



//////////////////

function inquireForPurchase() {
    //get item ID and quantity from user. 
    inquirer.prompt([

        {
            name: "id",
            type: "input",
            message: "What is the item number of the product you wish to purchase?"
        }, {
            name: 'quantity',
            type: 'input',
            message: "How many would you like to buy?"
        },

    ]).then(function(answers) {
        //set captured input as variables, pass variables as parameters.
        var quantityDesired = answers.quantity;
        var IDDesired = answers.id;
        purchaseFromDatabase(IDDesired, quantityDesired);
    });

}; 
//////////////////////////////

// 
function purchaseFromDatabase(ID, quantityNeeded) {
    //check to see if product is availabel for purchase. Subtract quantity purchased from stock in data base. If product not available, inform customer.
    connection.query('SELECT * FROM Products WHERE ItemID = ' + ID, function(error, response) {
        if (error) { console.log(error) };

        //if in stock
        if (quantityNeeded <= response[0].StockQuantity) {
            //calculate cost
            var totalCost = response[0].Price * quantityNeeded;
            //inform user
            console.log("Item is in stock!");
            console.log("Your total cost for " + quantityNeeded + " " + response[0].ProductName + " is " + totalCost );
            //update database, minus purchased quantity
            connection.query('UPDATE Products SET StockQuantity = StockQuantity - ' + quantityNeeded + ' WHERE ItemID = ' + ID);
        } else {
            console.log("Our apologies. We don't have enough " + response[0].ProductName + " to fulfill your order.");
        };
        displayAll();
    });



}; 

  displayAll();


