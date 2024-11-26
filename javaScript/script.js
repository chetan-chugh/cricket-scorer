function detailSubmit(){
    
    let hostTeamName = document.querySelector("#host-team-name").value;
    let hostTeamColor = document.querySelector("#host-team-name");
    let visitorTeamName =  document.querySelector("#visitor-team-name").value;
    let visitorTeamColor = document.querySelector("#visitor-team-name");
    let hostTossWon = document.querySelector("#host-toss-won");
    let visitorTossWon = document.querySelector("#visitor-toss-won");
    let bat = document.querySelector("#bat");
    let bowl = document.querySelector("#bowl");
    let over = document.querySelector("#over-to").value;
    let overErrorColor = document.querySelector("#over-to");
    let striker = document.querySelector("#striker").value;
    let strikerColor = document.querySelector("#striker");
    let nonStriker = document.querySelector("#non-striker").value;
    let nonStrikerColor = document.querySelector("#non-striker");
    let bowler = document.querySelector("#bowler").value;
    let bowlerColor = document.querySelector("#bowler");

    /*ERROR*/
    let hostTeamNameError = document.querySelector("#host-team-name-error");
    let visitorTeamNameError = document.querySelector("#visitor-team-name-error");
    let tossError = document.querySelector("#toss-error");
    let optedError = document.querySelector("#opted-error");
    let overError = document.querySelector("#over-error");
    let strikerError = document.querySelector("#striker-error");
    let nonStrikerError = document.querySelector("#non-striker-error");
    let bowlerError = document.querySelector("#bowler-error")

    /*Error assign string*/
    hostTeamNameError.textContent = "";
    visitorTeamNameError.textContent = "";
    tossError.textContent="";
    optedError.textContent="";
    overError.textContent = "";
    strikerError.textContent = "";
    nonStrikerError.textContent = "";
    bowlerError.textContent = "";
    
    /*Team Name Check*/
    /*  Host Team Check */
    if(hostTeamName===""){
        hostTeamColor.style.borderBottom="2px solid red";
        hostTeamNameError.textContent = "Enter Host Team Name";
        hostTeamNameError.style.color="red";
    }
    else if(hostTeamName!=""){
        hostTeamColor.style.borderBottom="none";
        hostTeamNameError.textContent = "";
        hostTeamNameError.style.color="none";
    }

    /*Visitor Team Check*/
    if(visitorTeamName===""){
        visitorTeamColor.style.borderBottom="2px solid red";
        visitorTeamNameError.textContent = "Enter Visitor Team Name";
        visitorTeamNameError.style.color="red";
    }
    else if(visitorTeamName!=""){
        visitorTeamColor.style.borderBottom="none";
        visitorTeamNameError.textContent = "";
        visitorTeamNameError.style.color="none";
    }

    /*Toss Error*/
    if(hostTossWon===null || visitorTossWon===null){
        tossError.textContent = "Please select";
        tossError.style.color="red";
    }
    else if(hostTossWon!=null || visitorTossWon!=null){
        alert(tossError);
        tossError.textContent = "";
        tossError.style.color="none";
    }

    /*Opted Check*/
    if(bat===null || bowl===null){
        optedError.textContent = "Please select";
        optedError.style.color="red";
    }

    else if(bat!=null || bowl!=null){
        optedError.textContent = "";
        optedError.style.color="none";
    }

    /*Over Check*/
    if(over===""){
        overErrorColor.style.borderBottom="2px solid red";
        overError.textContent = "Enter Over";
        overError.style.color="red";
    }
    else if(over<=0){
        overErrorColor.style.borderBottom="2px solid red";
        overError.textContent = "Enter valid number";
        overError.style.color="red";
    }
    else if(over!=""){
        overErrorColor.style.borderBottom="none";
        overError.textContent = "";
        overError.style.color="none";
    }

    /*Batsman*/
    /*Striker Check*/
    if(striker===""){
        strikerColor.style.borderBottom="2px solid red";
        strikerError.textContent = "Enter Player Name";
        strikerError.style.color="red";
    }
    else if(striker!=""){
        strikerColor.style.borderBottom="none";
        strikerError.textContent = "";
        strikerError.style.color="none";
    }

    /*Non-Striker check */
    if(nonStriker===""){
        nonStrikerColor.style.borderBottom="2px solid red";
        nonStrikerError.textContent = "Enter Player Name";
        nonStrikerError.style.color="red";
    }
    else if(nonStriker!=""){
        nonStrikerColor.style.borderBottom="none";
        nonStrikerError.textContent = "";
        nonStrikerError.style.color="none";
    }

    /*Bolwer Check*/
    if(bowler===""){
        bowlerColor.style.borderBottom="2px solid red";
        bowlerError.textContent = "Enter Player Name";
        bowlerError.style.color="red";
    }
    else if(bowler!=""){
        bowlerColor.style.borderBottom="none";
        bowlerError.textContent = "";
        bowlerError.style.color="none";
    }

    // console.log("Host Team:"+hostTeamName);
    // console.log("Visitor Team:"+visitorTeamName);
    // console.log("Toss:"+hostTossWon);
    // console.log("Toss:"+visitorTossWon);
    // console.log("Opted(bat):"+bat);
    // console.log("Opted(bowl):"+bowl);
    // console.log("Over:"+over);
    // console.log("Striker Name:"+striker);
    // console.log("Non Striker Name:"+nonStriker);
    // console.log("Bowler Name:"+bowler);
}