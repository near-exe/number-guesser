const msg = document.getElementById("Message");
const ScoreT = document.getElementById("Score");
const HighS = document.getElementById("HS");
const NumberField = document.getElementById("quantity");
const questionMark = document.getElementById("?");


let Score = 15;
let won = false;
ScoreT.innerHTML=Score;
let random = Math.floor(Math.random()*1001);
let HighScore = sessionStorage.getItem("HS"); 
HighS.innerHTML=HighScore;
function input()
{
    let guess=NumberField.value;
    if(guess.toString()=="" || guess > 1000 || guess < 0)
    {
        msg.innerHTML="Invalid input";
        return;
    }
    if(Score==0 || won)
    {
        msg.innerHTML="Gotta reset dud";
        return;
    }
    if(guess > random)
    {
        msg.innerHTML="Too high dud";
        Score--;
        ScoreT.innerHTML=Score;
        if(Score==0)
        {
            loss();
        }
    
    }
    else if( guess < random)
    {
        msg.innerHTML="Too low dud";
        Score--;
        ScoreT.innerHTML=Score;
        if(Score==0)
        {
            loss();
        }
    }
    else
    {
        win();
    }
}
function win()
{
    won=true;
    msg.innerHTML="U did it wooo";
    ScoreT.innerHTML=Score;
    if(Score > HighScore)
    {
        HighScore=Score;
        sessionStorage.setItem("HS",HighScore.toString());
        HighS.innerHTML=sessionStorage.getItem("HS");
        
    }
    document.body.style.backgroundColor = "#1f802f";
    questionMark.innerHTML=random;
    NumberField.style.backgroundColor="#1f802f";
    NumberField.style.color="white";
}
function loss()
{
    msg.innerHTML="Skill issue bro";
    document.body.style.backgroundColor="#80231f";
    questionMark.innerHTML=random;
    NumberField.style.backgroundColor="#80231f";
    NumberField.style.color="white";
}
function done()
{
    msg.innerHTML="Gotta reset dud, already failed";
}
//If u know, u know
function pucci()
{
    random = Math.floor(Math.random()*1001);
    Score=15;
    ScoreT.innerHTML=Score;
    document.body.style.backgroundColor = "#222";
    questionMark.innerHTML="?";
    msg.innerHTML="Start guessing dud";
    NumberField.style.backgroundColor="white";
    NumberField.style.color="#222";
    won=false;
}

