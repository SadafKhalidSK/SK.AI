//More Guests: You just found a bigger dinner table, so now more space is
 //available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end 
//of your program informing people that you found a bigger dinner table.


let guest=['Sabbah','Sajjad','Sawera']
guest.forEach(dinner=>
    (console.log(`"Dear ${dinner} ,"You are invited to dinner on Saturday"`)))


   let message="Our one guset Sawera cannot come to Dinner"

   let couldntCome=guest[0]
    console.log( couldntCome,"cannot come to dinner")
   
    guest.splice(0,1,"Saqib")
    
    guest.forEach(dinner=>
    (console.log(`"Dear ${dinner} ,"You are invited to dinner on Saturday"`)))
    console.log('OUR RESPECTED guest,WE HAVE FOUND A BIGGER DINNER TABLE')

   // • Add one new guest to the beginning of your array.
 guest.unshift('Sajila')

 // at the end of array
 guest.push('Sidra')
//  • Add one new guest to the middle of your array. • Use append() to add one new 
//  guest to the end of your list. • Print a new set of invitation messages,
//   one for each person in your list.

//at the middle of array

let middleIndex:number=Math.floor(guest.length/2);
guest.splice(middleIndex,0,'Sabbah')

//print updated list

guest.forEach(dinner=>
    (console.log(`"Dear ${dinner} ,"You are invited to dinner on Saturday"`)))
    
    