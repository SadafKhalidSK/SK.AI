// 14.Guest List: If you could invite anyone, living or deceased, to dinner, who
//  would you invite? Make a list that includes at least three people you’d like
//   to invite to dinner. Then use your list to print a message to each person,
//    inviting them to dinner.

//....invitation 

let guest=['Sabbah','Sajjad','Sawera']
guest.forEach(dinner=>
    (console.log(`"Dear ${dinner} ,"You are invited to dinner on Saturday"`)))

   //one guset Sawera couldnot come to dinnerrrrr....
  // let guests=['Sabbah','Sajjad','Sawera']
   let message="Our one guset Sawera cannot come to Dinner"
//guests.forEach(dinner=>
    //(console.log(`"Dear ${dinner} ,"You are invited to dinner on Saturday"`)))
   let couldntCome=guest[0]
    console.log( couldntCome,"cannot come to dinner")
    //• Modify your list, replacing the name of the guest who can’t make it
    // with the name of the new person you are inviting.
    guest.splice(0,1,"Saqib")
    //• Print a second set of invitation messages, one for each person who is still in your list.

    guest.forEach(dinner=>
    (console.log(`"Dear ${dinner} ,"You are invited to dinner on Saturday"`)))

//..




