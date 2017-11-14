CREATE DATABASE Bamazon;

USE bamazon;

CREATE TABLE Products (
ItemID int NOT NULL,
ProductName varchar(50) NOT NULL,
DepartmentName varchar(50) NOT NULL,
Price DECIMAL(5,3) NOT NULL,
StockQuantity int NOT NULL);

ALTER TABLE Products DROP COLUMN Price;
ALTER TABLE Products ADD COLUMN Price DECIMAL(10,2) NOT NULL;

DELETE FROM Products WHERE ItemID = 1 AND ProductName = 'Alarm Clock' LIMIT 1
DELETE FROM Products WHERE ItemID = 2 AND ProductName = 'Fitbit' LIMIT 1


INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
1,
'Alarm Clock',
'Home',
49.99,
25);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
2,
'Fitbit',
'Fitness',
49.99,
100);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
3,
'Amazon Echo',
'Home',
99.99,
150);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
4,
'Record Player',
'Electronics',
110.99,
8);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
5,
'Pacifier',
'Baby',
10.50,
70);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
6,
'Nail Polish',
'Beauty',
12.99,
100);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
7,
'Iphone Charger',
'Electronics',
19.99,
50);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
8,
'Detergent',
'Home',
11.99,
200);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
9,
'Headphones',
'Electronics',
100.00,
60);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
10,
'Toaster',
'Kitchen',
35.95,
50);