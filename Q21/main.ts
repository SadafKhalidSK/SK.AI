//Q21.  They think of something you could store in a TypeScript OBJECT 


let student:{ID:number,studetName:string,Batch:string,session:number}=
{ID:2004561,
studetName:"Sadaf Khalid",
Batch:"Summer",
session:2024,
}
console.log(student)

// ....OR.....
interface studentData{ID:number
    ;
    studetName:string;
    Batch:string;
    session:number}
let studentData={ID:8798632,
    studetName:" Khalid",
    Batch:"Winter",
    session:2025,
}
console.log(studentData)