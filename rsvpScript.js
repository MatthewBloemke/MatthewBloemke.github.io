let buttons = document.querySelector("#dingus")
console.log(buttons)

let rsvpCase = [
    
];
let plusOneList = [
    {name: "ryan dunton", rsvp: true},
    {name: "cici holmquist", rsvp: false},
]

buttons.onclick = function test() {
    let fName = (document.getElementById("fullName").value).toLowerCase()
    let nameCheck = plusOneList.find((person) => person.name === fName)
    let answer =""
    if (nameCheck.rsvp) {
        answer = "Yes!"
        document.getElementById("rsvpBody").style.display = "block"
    } else {
        answer = "No, Sorry"
    }
    document.getElementById("results").innerHTML = answer
}