import inquirer from "inquirer";
const input1=await inquirer.prompt({
    name:"numb1",
    type:"number",
    message:"Enter your fist number",
})

const input2=await inquirer.prompt({
    name:"numb2",
    type:"number",
    message:"Enter your 2nd value"
})
let total= input1.numb1*input2.numb2;
console.log(total)