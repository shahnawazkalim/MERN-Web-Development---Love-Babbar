// Run command in terminal :
// node index.js

// Error Handling----------------------------------------
try{
    console.log("Try block starts here.");
    console.log(age);
    console.log("I have printed my age above"); //This line will not be executed because error found above
}
catch(err1){
    console.log("You got an error that's why You are Inside Cath block");
    // console.log("Error is Printed Here : ", err1);
}