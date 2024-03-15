//Your Own Array: Think of your favorite mode of transportation, 
//such as a motorcycle or a car, and make a list that stores several examples.
//Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”
var favTransportation = ['1.Car', '2.Truck', '3.Van', '4.Motorcycle'];
favTransportation.forEach(function (fav) {
    return (console.log("\"I would like to own a ".concat(fav, "\"")));
});
//.....................
var Transportation = ['Car', 'Truck', 'Van', ' Motorcycle'];
//Transportation.forEach(fav=>
//(console.log (`"I would like to own a ${fav}"`)))
Transportation.map(function (item) {
    return (console.log("\"I would like to own a ,".concat(item, ".\"")));
});
