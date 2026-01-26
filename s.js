let userscore=0;
let computerscore=0;
let result;
let usersc=document.getElementById("you-score");
let compsc=document.getElementById("comp-score");
let msg=document.getElementById("status1");
const choices=document.querySelectorAll("button");

const arr=["Rock","Paper","Scissor"];


function random(arr){
    let index=Math.floor(Math.random()*3);
    return arr[index];
}
choices.forEach(choice =>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
    let compChoice=random(arr);
    if(userChoice === compChoice){
        result=`Draw, Your and computer choice is ${userChoice}`;
        msg.innerHTML=result;
    }else if( (userChoice === "Rock") && (compChoice === "Paper")){
        computerscore++;
        result=`You Lose,Comp choice is ${compChoice}`;
        msg.innerHTML=result;
        compsc.innerHTML=computerscore;
        usersc.innerHTML=userscore;
    }else if(( userChoice === "Rock") && (compChoice === "Scissor")){
        userscore++;
        result=`You Win,Comp choice is ${compChoice}`;
        msg.innerHTML=result;
        compsc.innerHTML=computerscore;
        usersc.innerHTML=userscore;
    }else if( (userChoice === "Paper") && (compChoice === "Scissor")){
        computerscore++;
        result=`You Lose,Comp choice is ${compChoice}`;
        msg.innerHTML=result;
        compsc.innerHTML=computerscore;
        usersc.innerHTML=userscore;
    }else if( (userChoice === "Paper") && (compChoice === "Rock")){
        userscore++;
        result=`You Win,Comp choice is ${compChoice}`;
        msg.innerHTML=result;
        compsc.innerHTML=computerscore;
        usersc.innerHTML=userscore;
    }else if( (userChoice === "Scissor") && (compChoice === "Paper")){
        userscore++;
        result=`You Win,Comp choice is ${compChoice}`;
        msg.innerHTML=result;
        compsc.innerHTML=computerscore;
        usersc.innerHTML=userscore;
    }else if( (userChoice === "Scissor") && (compChoice === "Rock")){
        computerscore++;
        result=`You Lose,Comp choice is ${compChoice}`;
        msg.innerHTML=result;
        compsc.innerHTML=computerscore;
        usersc.innerHTML=userscore;
    }
 });
}); 