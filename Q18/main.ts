// //Seeing the World: Think of at least five places in the world you’d like to
// visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

//list of places

let places=['Denmark','Canada','Sweden','London','Turkey']

//• Print your array in its original order.

console.log(places)

//• Print your array in alphabetical order without modifying the actual list.
//[...plces] use this for copy
console.log('alphabetical order',[...places].sort())
//original list
console.log('original order',places)

// • Print your array in reverse alphabetical order without changing
//  the order of the original list.

console.log('reverse order',[...places].reverse())
//• Show that your array is still in its original order by printing it again.

console.log('original list',places)
//• Reverse the order of your list. Print the array to show that its order has changed.

console.log('reverse original order', places.reverse())
//rverse the order of your list again. Print the list to show it’s back to its original order.

console.log('back to original',places.reverse())

//• Sort your array so it’s stored in alphabetical order. 
//Print the array to show that its order has been changed.
 console.log('Alphabetical order',places.sort())
//
// • Sort to change your array so it’s stored in reverse alphabetical order. 
//Print the list to show that its order has changed.

console.log('Reverse Original',places.reverse())
