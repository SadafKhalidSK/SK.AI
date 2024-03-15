"use strict";
//Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples.
//Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
let favTransportation = ['Car', 'Truck', 'Van', 'Motorcycle'];
favTransportation.forEach(fav => (console.log(`"I would like to own a ${fav}"`)));
//.....................
let Transportation = ['Car', 'Truck', 'Van', ' Motorcycle'];
//Transportation.forEach(fav=>
//
Transportation.map((item) => (console.log(`"I would like to own a ,${item}"`)));
