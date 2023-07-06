/*---------------initialize the variable used in the functions----------*/
var player = 0;
var computer = 0;
var number_of_plays = 0;
var array2 = [];
var choice5 = "";
var final_score = 0;
function information()
{
    let text = document.getElementById("text1");
    text.style.display = "block";
}
function hide_function()
{   
        let text = document.getElementById("text1")
       text.style.display = "none";
}
/*-------------------Random number generator used to pick the item on the list by index----------*/
function getRandomInt(max)
{
    max = 3;
    let choice4 = Math.floor(Math.random() * 3);       
    choice5 = choice4;      
}
/*-------------the function that is called when the player clicks on the rock button -----------*/
function choice_rock()
{
    let choice1 = document.getElementById("rock").value;
    return choice1;       
}
/*-------------the function that is called when the player clicks on the paper button -----------*/
function choice_paper()
{
    let choice2 = document.getElementById("paper").value;
    return choice2;
}
/*-------------the function that is called when the player clicks on the scissors button -----------*/
function choice_scissors()
{
    let choice3 = document.getElementById("scissors").value;
    return choice3;
}
/*-----------this function calls both the players choice and the random function------------*/
function activate1()/* function call by clicking on the rock button*/
{
    /*------------the math random function will generate a random number between 0 and 2
    to be used as the index for choosing the item on the list------------------*/
    getRandomInt(3);
    let player_choice = choice_rock();
    console.log("Player choice " + player_choice);
    let arrays = ["rock", "paper", "scissors"];
    console.log("Computer choice " +  arrays[choice5]);
    /*-----------if functions that tells the program to display the score after the player
    makes  a choice by clicking a button  on the webpage*/
    if(arrays[choice5] === "paper")
    {
        computer += 1;
        console.log("Computer Score " + computer);
    }
    else if(arrays[choice5] === "scissors")
    {
        player += 1;
        console.log("Player Score " + player);
    }
    else
    {
        console.log("No Winner Try Again");
    }
    /*--------the display output using the innerHTML function to display the 
    output in the UI-------------*/
    number_of_plays += 1;
    console.log("Current Score  Computer = " + computer);
    console.log("Current Score Player = " + player);
    console.log("Number of plays currently " + number_of_plays);
    document.getElementById("computer_score").innerHTML = computer;
    document.getElementById("player_score").innerHTML = player;
    document.getElementById("no_of_plays").innerHTML = number_of_plays;
}
/*-----------this function calls both the players choice and the random function------------*/
function activate2()/* function call by clicking on the paper button*/
{ 
    /*------------the math random function will generate a random number between 0 and 2
        to be used as the index for choosing the item on the list------------------*/
    getRandomInt(3);
    let player_choice1 = choice_paper();
    console.log("Player choice " + player_choice1);
    let arrays1 = ["rock", "paper", "scissors"];
    console.log("Computer choice " + arrays1[choice5]);
    /*-----------if functions that tells the program to display the score after the player
    makes  a choice by clicking a button  on the webpage*/
    if(arrays1[choice5] === "rock")
    {
        player += 1;
        console.log("Player Wins " + player);
    }
    else if (arrays1[choice5] === "scissors")
    {
        computer += 1;
        console.log("Computer Wins! " + computer);
    }
    else
    {
        console.log("No Winner Try Again");
    }
     /*--------the display output using the innerHTML function to display the 
    output in the UI-------------*/
    number_of_plays += 1;
    console.log("Current Score  Computer = " + computer);
    console.log("Current Score Player = " + player);  
    console.log("Number of plays currently " + number_of_plays);
    document.getElementById("computer_score").innerHTML = computer;
    document.getElementById("player_score").innerHTML = player;
    document.getElementById("no_of_plays").innerHTML = number_of_plays;
}
function activate3()/* function call by clicking on the scissors button*/
{
    /*------------the math random function will generate a random number between 0 and 2
        to be used as the index for choosing the item on the list------------------*/
    getRandomInt(3);
    let player_choice2 = choice_scissors();    
    console.log("Player choice " + player_choice2);
    let arrays2 = ["rock", "paper", "scissors"];
    console.log("Computer choice " + arrays2[choice5]);
    /*-----------if functions that tells the program to display the score after the player
    makes  a choice by clicking a button  on the webpage*/
    if(arrays2[choice5] === "rock")
    {
        computer += 1;
        console.log("Computer Wins! " + computer);
    }
    else if(arrays2[choice5] === "paper")
    {
        player += 1;
        console.log("Player Wins! " + player);
    }    
    else
    {
        console.log("No Winner Try Again");
    }
    /*--------the display output using the innerHTML function to display the 
    output in the UI-------------*/   number_of_plays += 1;
    console.log("Current Score  Computer = " + computer);
    console.log("Current Score Player = " + player);
    console.log("Number of plays currently " + number_of_plays);
    document.getElementById("computer_score").innerHTML = computer;
    document.getElementById("player_score").innerHTML = player;
    document.getElementById("no_of_plays").innerHTML = number_of_plays;   
}
let users_selection = document.querySelector("#container5");
function written()
{
    users_selection.style.display = "block";
}
function my_function()
{
    document.getElementById("show1").innerHTML = computer;
    document.getElementById("show2").innerHTML = player;
    document.getElementById("show3").innerHTML = number_of_plays;
    written();    
}
function play_again()
{
    location.reload();
}





 


   
   



 
