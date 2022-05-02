// write js code here corresponding to index.html
// You should add submit event on the form

// document.querySelector("navbar").
document.querySelector("form").addEventListener("submit",myFunction);
function myFunction(){
    event.preventDefault();
    var matchNumber = document.querySelector("#matchNum").value
    var teamA = document.querySelector("#teamA").value
    var teamB = document.querySelector("#teamB").value
    var date = document.querySelector("#date").value
    var venue = document.querySelector("#venue").value

console.log(matchNumber,teamA,teamB,date,venue)
    var tr = document.createElement("tr");

    var th1 = document.createElement("th");
    var match_Number = document.createElement("matchNumber")
    match_Number.innerText = matchNum;

    var th2 = document.createElement("th");
    var team_A = document.createElement("teamA")
    team_A.innerText = teamA;

    var th3 = document.createElement("th");
    var team_B = document.createElement("teamB")
    team_B.innerText = teamB;

    var th4 = document.createElement("th");
    var dat = document.createElement("date");
    dat.innerText = date;

    var th5 = document.createElement("th");
    var ven = document.createElement("venue")
    ven.innerText = venue;

    tr.append(th1,th2,th3,th4,th5);

    var head = document.createElement("thead");
    
    thead.append(tr)

    localStorage.setItem("MasaiHomePage", tr)
     var Masai = (localStorage.getItem("MasaiHomePage"));
     console.log(typeof Masai)

    

    

}