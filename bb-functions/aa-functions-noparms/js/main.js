// basic function declaration with no parameters.
function greetUser() {
    let myname;
    const GREETING = 'Good afternoon ';
    console.log('before prompt');
    myname = prompt('Enter name:');
    console.log('after prompt');
    console.log('before alert');
    alert(GREETING + myname);
    console.log('after alert');
}
//calling the function with no arguments.
greetUser();

//this is a function with no paramenters and no statements.
function fun() {}

//calling this function, of course, does nothing
fun()