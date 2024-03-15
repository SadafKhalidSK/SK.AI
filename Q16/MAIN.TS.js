//More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end 
//of your program informing people that you found a bigger dinner table.
var guest = ['Sabbah', 'Sajjad', 'Sawera'];
guest.forEach(function (dinner) {
    return (console.log("\"Dear ".concat(dinner, " ,\"You are invited to dinner on Saturday\"")));
});
var message = "Our one guset Sawera cannot come to Dinner";
var couldntCome = guest[0];
console.log(couldntCome, "cannot come to dinner");
guest.splice(0, 1, "Saqib");
guest.forEach(function (dinner) {
    return (console.log("\"Dear ".concat(dinner, " ,\"You are invited to dinner on Saturday\"")));
});
console.log('OUR RESPECTED guest,WE HAVE FOUND A BIGGER DINNER TABLE');
