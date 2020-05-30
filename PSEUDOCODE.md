# PSUEDOCODE SHEET

# TABLES
<strong>Wine Table</strong>
id, non null auto_inc,
<br>
name, varchar not null,
<br>
year, int not null,
<br>
variety, varchar
<br>
description, varchar
<br>
price, FOREIGN KEY(price_id)
<br>
<!-- stock, FOREIGN KEY -->
winery, FOREIGN KEY
<br>
PK(id)


<strong>Price List Table</strong>
<br>
id, non null auto_inc,
<br>
wine_id, FOREIGN KEY(wine_id)
<br>
price, 


<strong>Winery Table</strong>
<br>
Winery_name, varchar
<br>
postcode, int
<br>
owner, FOREIGN KEY (userid)


<strong>User Table</strong>
<br>
username, varchar
<br>
email, varchar
<br>
password, varchar
<br>
admin, boolean
<br>
postcode, int
<br>


<strong>Events Table</strong>
<br>
id, pk auto nonull
<br>
event_title, varchar
<br>
event_date, varchar



<!-- <strong>Inventory Table</strong>  -->

# GUIDE

* Make an account _C_
This would be a post method in which the users email, name, password, postcode and wether or not the user is an admin user would be logged into a single row in the users table of the datatbase
This would be usefull for if the user would like to order wine / book a wine tour so that they can keep recipt of purchases they have made/ view dates of events they have booked, this should be done by email

* Enter the details of my wineries _C_
INSERT INTO winery table (blahblahblah) VALUES (blahblahblah)
The admin user can enter the details of their winery so that it is logged in the database and they can add wines to that winery's list of products

* Get winery details
SELECT * FROM Wine Table WHERE winery_ForeignKey = winery.primarykey
Can add more restrictions later on, (eg between price 20aud - 40aud, wine score of 9+)

* Search winery by geo-location
This is our flex spot for using new technology
This would feature could use static locations on a map to display all vinyards around a user (Dont know how to do this but it is NEW technolgy so space to learn)

* Book tasting/tour by date
The admin user should be able to create and chose when events are going to happen (maybe push this to a table)













