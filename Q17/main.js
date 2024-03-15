"use strict";
//17.Shrinking Guest List: You just found out that your new dinner table won’t
//  arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a
//  message saying that you can invite only two people for dinner.
let guest = ['Sabbah', 'Sajjad', 'Sawera'];
guest.forEach(dinner => (console.log(`"Dear ${dinner} ,"You are invited to dinner on Saturday"`)));
let message = "Our one guset Sawera cannot come to Dinner";
let couldntCome = guest[0];
console.log(couldntCome, "cannot come to dinner");
guest.splice(0, 1, "Saqib");
guest.forEach(dinner => (console.log(`"Dear ${dinner} ,"You are invited to dinner on Saturday"`)));
console.log('OUR RESPECTED guest,WE HAVE FOUND A BIGGER DINNER TABLE');
guest.unshift('Sajila');
guest.push('Sidra');
let middleIndex = Math.floor(guest.length / 2);
guest.splice(middleIndex, 0, 'Sabbah');
guest.forEach(dinner => (console.log(`"Dear ${dinner} ,"You are invited to dinner on Saturday"`)));
console.log('Sorry ! We can invite only two people for Dinner');
//• Remove guests from your list one at a time until only two names remain 
// in your list. Each time you pop a name from your list, print a message to 
//  pethatrson letting them know you’re sorry you can’t invite them to dinner.
while (guest.length > 2) {
    let removeGuest = guest.pop();
    console.log(`"Sorry ${removeGuest}, I cannot invite you to Dinner"`);
}
//.• Print a message to each of the two people still on your list, 
//letting them know they’re still invited.
guest.forEach(dinner => (console.log(`"Dear ${dinner} ,"You are still invited to dinner on Saturday"`)));
//• Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.
guest.pop();
guest.pop();
console.log(guest);
guest.forEach(dinner => (console.log(`"Dear ${dinner} ,"You are still invited to dinner on Saturday"`)));
