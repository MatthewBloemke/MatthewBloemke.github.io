let buttons = document.querySelector("#rsvpButton")
let lastInput = document.getElementById("lastName")
let firstInput = document.getElementById("firstName")
let rsvpCase = [
    '<b>Please click the link to rsvp!</b>',
    '<b>Please click the link to rsvp yourself!</b>',
    '<b>Please click the link to rsvp you and your plus one!</b>',
    '<b>Please click the link to rsvp you and your spouse!</b>',
    '<b>Please click the link to rsvp you and your family!</b>',
];

let guestList = [
    {name: 'kyle danner', rsvp: 4},
    {name: 'josh abbott', rsvp: 3},
    {name: 'felicia abbott', rsvp: 3},
    {name: 'andrea danner', rsvp: 4},
    {name: 'andy lefebre', rsvp: 3},
    {name: 'trudi lefebre', rsvp: 3},
    {name: "gloria bertram", rsvp: 3},
    {name: "jim bertram", rsvp: 3},
    {name: "gus mendoza", rsvp: 2},
    {name: "ryan dunton", rsvp: 4},
    {name: "tommy volk", rsvp: 1},
    {name: "shelah driver", rsvp: 2},
    {name: "ross lester", rsvp: 3},
    {name: "trudy lester", rsvp: 3},
    {name: "sara webb", rsvp: 2},
    {name: "allison winkler", rsvp: 2},
    {name: "sarah kohnen", rsvp: 3},
    {name: "andrew kohnen", rsvp: 3},
    {name: "kallie friesen", rsvp: 3},
    {name: "will friesen", rsvp: 3},
    {name: "amanda lester", rsvp: 3},
    {name: "samuel lester", rsvp: 3},
    {name: "cici holmquist", rsvp: 1},
    {name: "scott tintes", rsvp: 3},
    {name: "brandi tintes", rsvp: 3},
    {name: "corey vahlbusch", rsvp: 0},
    {name: "jadan tish", rsvp: 3},
    {name: "paige tish", rsvp: 3},
    {name: "josh petersen", rsvp: 2},
    {name: "caleb meger", rsvp: 2},
    {name: "abigail lester", rsvp: 0},
    {name: "bob bitgood", rsvp: 1},
    {name: "don lester", rsvp: 3},
    {name: "marilyn lester", rsvp: 3},
    {name: "brent lester", rsvp: 3},
    {name: "charlotte lester", rsvp: 3},
    {name: "caitlyn lester", rsvp: 2},
    {name: "stephanie butz", rsvp: 2},
    {name: "wil lester", rsvp: 2},
    {name: "jake lester", rsvp: 4},
    {name: "christina cook", rsvp: 4},
    {name: "steve lester", rsvp: 3},
    {name: "tama lester", rsvp: 3},
    {name: "anna evans", rsvp: 3},
    {name: "dustin evans", rsvp: 3},
    {name: "laura lester", rsvp: 0},
    {name: "elizabeth lester", rsvp: 0},
    {name: "sarah arnold", rsvp: 1},
    {name: "jim abeyta", rsvp: 3},
    {name: "lori abeyta", rsvp: 3},
    {name: "marcia amundson", rsvp: 3},
    {name: "chris amundson", rsvp: 3},
    {name: "nathan benson", rsvp: 1},
    {name: "steven chafer", rsvp: 3},
    {name: "tami chafer", rsvp: 3},
    {name: "mike coady", rsvp: 4},
    {name: "terri coady", rsvp: 4},
    {name: "hannah coady", rsvp: 4},
    {name: "jamie coder", rsvp: 4},
    {name: "ralph coder", rsvp: 4},
    {name: "samantha fisher", rsvp: 3},
    {name: "jay fisher", rsvp: 3},
    {name: "jamie fisher", rsvp: 3},
    {name: "ben fisher", rsvp: 3},
    {name: "todd flicek", rsvp: 4},
    {name: "jalene flicek", rsvp: 4},
    {name: "mike hadden", rsvp: 4},
    {name: "gretchen hadden", rsvp: 4},
    {name: "christen helgerson", rsvp: 3},
    {name: "darren helgerson", rsvp: 3},
    {name: "andrea helgerson", rsvp: 3},
    {name: "adam helgerson", rsvp: 3},
    {name: "robby kay", rsvp: 3},
    {name: "lori kay", rsvp: 3},
    {name: "jacob klinkner", rsvp: 2},
    {name: "corey kohnen", rsvp: 4},
    {name: "heather kohnen", rsvp: 4},
    {name: "hannah kohnen", rsvp: 4},
    {name: "jenny kuklok", rsvp: 4},
    {name: "doug kuklok", rsvp: 4},
    {name: "josh lieder", rsvp: 4},
    {name: "sarah lieder", rsvp: 4},
    {name: "abby meyer", rsvp: 2},
    {name: "dee norling", rsvp: 3},
    {name: "palmer norling", rsvp: 3},
    {name: "lanae olson", rsvp: 2},
    {name: "amber pogreba", rsvp: 2},
    {name: "wayne sanders", rsvp: 3},
    {name: "bonita sanders", rsvp: 3},
    {name: "pete stadem", rsvp: 3},
    {name: "kari stadem", rsvp: 3},
    {name: "peggy thompson", rsvp: 3},
    {name: "ted thompson", rsvp: 3},
    {name: "david twite", rsvp: 3},
    {name: "tracy twite", rsvp: 3},
    {name: "jr vandyken", rsvp: 4},
    {name: "andi vandyken", rsvp: 4},
    {name: "lindsey vo", rsvp: 3},
    {name: "michael vo", rsvp: 3},
    {name: "kathy webb", rsvp: 3},
    {name: "clay webb", rsvp: 3},
    {name: "kymberly west", rsvp: 4},
    {name: "clint west", rsvp: 4},
    {name: "sue williamson", rsvp: 3}, 
    {name: "randy williamson", rsvp: 3},
    {name: "kari winkler", rsvp: 4},
    {name: "gerard winkler", rsvp: 4},
    {name: "mike mesmer", rsvp: 3},
    {name: "sarah mesmer", rsvp: 3},
    {name: "mary kay lind", rsvp: 3},
    {name: "gary lind", rsvp: 3},
    {name: "kelly johnston", rsvp: 3},
    {name: "charles johnston", rsvp: 3},   
    {name: "chuck keane", rsvp: 3},
    {name: "heather keane", rsvp: 3},
    {name: "john-marc hazukah", rsvp: 1},
    {name: "catie anthony", rsvp: 2},
    {name: "jeremy mckinney", rsvp: 3},
    {name: "meri mckinney", rsvp: 3},
    {name: "keith hutman", rsvp: 3},
    {name: "cindi hutman", rsvp: 3},
    {name: "larry mitley", rsvp: 3},
    {name: "sue mitley", rsvp: 3},
    {name: "dale bloemke", rsvp: 2},
    {name: "lisa bloemke", rsvp: 2},
    {name: "donny bloemke", rsvp: 3},
    {name: "sherry bloemke", rsvp: 3},
    {name: "jeff kopseng", rsvp: 3},
    {name: "alan bloemke", rsvp: 3},
    {name: "justin bloemke", rsvp: 2},  
    {name: "brock bloemke", rsvp: 3},
    {name: "jody bloemke", rsvp: 3},
    {name: "bruno drews", rsvp: 0},
    {name: "bob fischer", rsvp: 3},
    {name: "marie fischer", rsvp: 3},
    {name: "rocky konz", rsvp: 3},
    {name: "ann konz", rsvp: 3},
    {name: "kay ludewig", rsvp: 3},
    {name: "eugine ludewig", rsvp: 3},
    {name: "ruth ann miller", rsvp: 3},
    {name: "dave miller", rsvp: 3},
    {name: "leah miller", rsvp: 2},
    {name: "brian miller", rsvp: 3},
    {name: "jenny miller", rsvp: 3},
    {name: "nancy nachreiner", rsvp: 4},
    {name: "linda nelson", rsvp: 3},
    {name: "lee nelson", rsvp: 3},
    {name: "melissa roiger", rsvp: 4},
    {name: "brandon roiger", rsvp: 4},
    {name: "alexia roiger", rsvp: 2},
    {name: "ed schottenbauer", rsvp: 3},
    {name: "pearl schottenbauer", rsvp: 3},
    {name: "suzanne wels", rsvp: 4},
    {name: "brian wels", rsvp: 4},
    {name: "racheal crissinger", rsvp: 2},
    {name: "greg curtis", rsvp: 2},
    {name: "chrissy dunton", rsvp: 4},
    {name: "chris dunton", rsvp: 4},
    {name: "chad olthoff", rsvp: 2},
    {name: "levi rainwater", rsvp: 2},
    {name: "shari winkelmann", rsvp: 3},
    {name: "dean winklemann", rsvp: 3},
    {name: "clint imker", rsvp: 3},
    {name: "kaci imker", rsvp: 3},
    {name: "maddy leinen", rsvp: 3},
    {name: "brandon marks", rsvp: 3},
    {name: "sadie marks", rsvp: 3},
    {name: "adam leinen", rsvp: 3},
    {name: "hali winkelmann", rsvp: 2},
    {name: "russ anderson", rsvp: 3},
    {name: "kim anderson", rsvp: 3},
]
let fName = ""
let nameCheck = ""
buttons.onclick = function rsvpFunction() {
    first = (document.getElementById("firstName").value).toLowerCase()
    last = (document.getElementById("lastName").value).toLowerCase()
    if (first[first.length-1] === " ") {
        first = first.slice(0, first.length-1)
    }
    if (last[last.length-1] === " ") {
        last = last.slice(0, last.length-1)
    }
    fName = first + " " + last;

    nameCheck = guestList.find((person) => person.name === fName)
    if (nameCheck) {
        document.getElementById("rsvpBody").style.display = "block"
        document.getElementById("rsvpIntro").style.display = "none"
        document.getElementById("results").innerHTML = rsvpCase[nameCheck.rsvp]
    } else {
        document.getElementById("results").innerHTML = "<b>Sorry, that name is not on the list</b>"
        document.getElementById("rsvpBody").style.display = "none"
        document.getElementById("rsvpIntro").style.display = "block"
    }
    
}
firstInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        lastInput.focus()
    }
})
lastInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        buttons.onclick();
    }
})