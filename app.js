//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.
//my name is Muneeeba
//date 11-march -24
console.log("hello world simple program");
//Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.
var members = ['yaman', 'haiqa', 'minsa', 'ayesha'];
for (var i = 0; i < members.length; i++) {
    console.log(members[i]);
}
//Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
var member = ['yaman', 'haiqa', 'minsa', 'ayesha'];
var message = 'i am fresh as like a flower';
for (var i = 0; i < member.length; i++) {
    console.log(message + member[i]);
}
