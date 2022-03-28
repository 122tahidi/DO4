// re write the switch state to use tenary operators 
let role = prompt("your role");
role == "admin" ? console.log(101):
role == "student" ? console.log(301):
role == "trainer" ? console.log(406):
role == "faculty" ? console.log(109):
console.log(0)