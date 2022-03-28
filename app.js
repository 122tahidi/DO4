
let Role = prompt("user role");
if (role == "admin") {
    console.log(101);
}   
else if (role =="student") {
    console.log(301);
}
else if (role =="trainer") {
    console.log(406);
}
else if (role =="facaulty") {
    console.log(109);
}
else  {
    console.log(000);
}
// switch statement

switch (role) {
    case "admin":
        console.log(101);
        break;
        case "student":
        console.log(301);
        break;
        case "trainer":
        console.log(406);
        break;
        case "faculty":
        console.log(109);
        break;
        default:
        console.log(0);

}
// logical operators
// and operators (&&) - evalutes to true if all statem evalutes to true. if any of the statement is false the whole equation is false
let age = 15;
if (age > 18 && age <= 35) {
    console.log("pass")
}
let username = "122tahidi"
let password = "tahidi2022"
let usernameinput = prompt("enter username")
let passwordinput = prompt("enter password")
if(username === username && passwordinput === password) {
    alert("authenticated");
}
{
    alert("something went wong pleas try again");
}
// or operator (||)
// eavalutes to true if any of the statement is true; if all state are false it will evalutes to false

let hasparentalpermission = true;
if (age > 18 || hasparentalpermission); {
    alert("you are allowed");
}
 
//not (!) - negetates (flps) the current value
let hasgoodcredit = true;
let hascriminalrecord = false;

if (hasgoodcredit && !hascriminalrecord) {
    console.log("eligiable for a loan");}
    else {
    console.log("not elligiable for a loan")}

 let hasgoodcreditscore = true;
 let hashighincome = true;

 if (hasgoodcreditscore && hashighincome){
     console.log("eligiable for loan")}
     else{
         console.log("not eligiable for a loan")
     }

     let hasGoodcredit = true;
     let hashiGhincome = true;

    if(hasGoodcredit || hashiGhincome){
        console.log("eligiable for loan")}
        else{
            console.log("not eligiable for loan")
        }

    //tenary operator (?)
        if (age > 18 ) {console.log("allowed");}
        else {console.log("not allowed")}
        
        age > 18 ? console.log("allowed") : console.log("not allowed");

        // re write the switch state to use tenary operators 
        