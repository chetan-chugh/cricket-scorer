/*Total Score*/
let totalScore = Number(document.querySelector("#total-score").innerHTML);

/*Striker*/
let strikerRun = Number(document.querySelector("#striker-run").innerHTML);
let strikerBowl=Number(document.querySelector("#striker-bowl").innerHTML);
let strikerFour = Number(document.querySelector("#striker-4s").innerHTML);
let strikerSix = Number(document.querySelector("#striker-6s").innerHTML);

function striker(){
    strikerBowl++;
    document.querySelector("#striker-bowl").innerHTML=strikerBowl;
}

function striker4(){
    strikerFour++;
    document.querySelector("#striker-4s").innerHTML=strikerFour;
}

function striker6(){
    strikerSix++;
    document.querySelector("#striker-6s").innerHTML=strikerSix;
}

/*Non Striker*/
let nonStrikerRun = Number(document.querySelector("#non-striker-run").innerHTML);
let nonStrikerBowl=Number(document.querySelector("#non-striker-bowl").innerHTML);
let nonStrikerFour = Number(document.querySelector("#non-striker-4s").innerHTML);
let nonStrikerSix = Number(document.querySelector("#non-striker-6s").innerHTML);

function nonStriker(){
    nonStrikerBowl++;
    document.querySelector("#non-striker-bowl").innerHTML=nonStrikerBowl;
}

function nonStriker4(){
    nonStrikerFour++;
    document.querySelector("#non-striker-4s").innerHTML=nonStrikerFour;
}

function nonStriker6(){
    nonStrikerSix++;
    document.querySelector("#non-striker-6s").innerHTML=nonStrikerSix;
}

/*Strike Change*/
let strikeSymbol = document.querySelector("#strike-symbol").innerHTML;
let nonStrikeSymbol = document.querySelector("#non-strike-symbol").innerHTML;
function strikerChange(){
    strikeSymbol = document.querySelector("#strike-symbol").innerHTML="";
    nonStrikeSymbol = document.querySelector("#non-strike-symbol").innerHTML="*";
    document.querySelector("#non-strike-symbol").style.visibility="visible";                                  
}

function nonStrikerChange(){
    strikeSymbol = document.querySelector("#strike-symbol").innerHTML="*";
    nonStrikeSymbol = document.querySelector("#non-strike-symbol").innerHTML="";
    document.querySelector("#strike-symbol").style.visibility="visible"; 
}

/*Bowler*/
let bowlerOver = Number(document.querySelector("#bowler-over").innerHTML);
let other = Number(document.querySelector("#other").innerHTML);
let bowlerRun = Number(document.querySelector("#bowler-run").innerHTML);
let madian = Number(document.querySelector("#madian").innerHTML);
function madianOver(){
    if(bowlerRun==0 && )
}

function bowlOver(){
    bowlerOver += 1;
    document.querySelector("#bowler-over").innerHTML=bowlerOver;
    if(bowlerOver==6){
        bowlerOver=0;
        other+=1;
        document.querySelector("#bowler-over").innerHTML=bowlerOver;
        document.querySelector("#other").innerHTML=other;
        alert("Over Complete");
        prompt("Enter Bowler Name");
        if(strikeSymbol=='*'){
            strikerChange()
        }
        else if(nonStrikeSymbol=='*'){
            nonStrikerChange();
        }
    }
}

/*Run Functions*/
function zeroRun(){
    if(strikeSymbol=='*'){
        striker();
    }
    
    else if(nonStrikeSymbol=='*'){
        nonStriker();
    }

    bowlOver();
}

function oneRun(){
    totalScore++;
    document.querySelector("#total-score").innerHTML=totalScore;

    if(strikeSymbol=='*'){
        strikerRun++;
        document.querySelector("#striker-run").innerHTML=strikerRun;
        striker();
        strikerChange();
    }
    
    else if(nonStrikeSymbol=='*'){
        nonStrikerRun++;
        document.querySelector("#non-striker-run").innerHTML=nonStrikerRun;
        nonStriker();
        nonStrikerChange();
    }

    bowlerRun++;
    document.querySelector("#bowler-run").innerHTML=bowlerRun;
    bowlOver();
    
}

function twoRun(){
    totalScore+=2;
    document.querySelector("#total-score").innerHTML=totalScore;

    if(strikeSymbol=='*'){
        strikerRun+=2;
        document.querySelector("#striker-run").innerHTML=strikerRun;
        striker();
    }
    
    else if(nonStrikeSymbol=='*'){
        nonStrikerRun+=2;
        document.querySelector("#non-striker-run").innerHTML=nonStrikerRun;
        nonStriker();
    }

    bowlerRun+=2;
    document.querySelector("#bowler-run").innerHTML=bowlerRun;
    bowlOver();
}

function threeRun(){
    totalScore+=3;
    document.querySelector("#total-score").innerHTML=totalScore;

    if(strikeSymbol=='*'){
        strikerRun+=3;
        document.querySelector("#striker-run").innerHTML=strikerRun;
        striker();
        strikerChange();
    }
    
    else if(nonStrikeSymbol=='*'){
        nonStrikerRun+=3;
        document.querySelector("#non-striker-run").innerHTML=nonStrikerRun;
        nonStriker();
        nonStrikerChange();
    }

    bowlerRun+=3;
    document.querySelector("#bowler-run").innerHTML=bowlerRun;
    bowlOver();
}

function fourRun(){
    totalScore+=4;
    document.querySelector("#total-score").innerHTML=totalScore;

    if(strikeSymbol=='*'){
        strikerRun+=4;
        document.querySelector("#striker-run").innerHTML=strikerRun;
        striker();
        striker4();
    }
    
    else if(nonStrikeSymbol=='*'){
        nonStrikerRun+=4;
        document.querySelector("#non-striker-run").innerHTML=nonStrikerRun;
        nonStriker();
        nonStriker4();
    }

    bowlerRun+=4;
    document.querySelector("#bowler-run").innerHTML=bowlerRun;
    bowlOver();
}

function sixRun(){
    totalScore+=6;
    document.querySelector("#total-score").innerHTML=totalScore;

    if(strikeSymbol=='*'){
        strikerRun+=6;
        document.querySelector("#striker-run").innerHTML=strikerRun;
        striker();
        striker6();
    }
    
    else if(nonStrikeSymbol=='*'){
        nonStrikerRun+=6;
        document.querySelector("#non-striker-run").innerHTML=nonStrikerRun;
        nonStriker();
        nonStriker6();
    }

    bowlerRun+=6;
    document.querySelector("#bowler-run").innerHTML=bowlerRun;
    bowlOver();
}