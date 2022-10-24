const onlineUsers = document.querySelector(".onlineUsers")
const guestUsers = document.querySelector(".guestUsers")
const totalUsers = document.querySelector(".totalUsers")

const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const p3 = document.querySelector("#p3")

const closedTickets = document.querySelector("#closedTickets")
const topCloser = document.querySelector("#topCloser")

const patching = document.querySelector("#patching")
const serversOnline = document.querySelector("#serversOnline")
const serversOffline = document.querySelector("#serversOffline")

const engineers = ["Daniel", "Trevor", "Rafael", "Nathan", "Wade", "Tyson", "James", "Evan", "Sasha", "Sandra", "Elijah"]

let usersOnline = getRandomLarge();
let guestsOnline = getRandomSmall();

let p1TicketNum = getRandomSmall();
let p2TicketNum = getRandomLarge();
let p3TicketNum = getRandomLarge();
let closedTicketNum = getRandomLarge();
let topCloserNum = topEngineerRandom();
let patchPercent = getPatchPercent();
let serversOnlineNum = getRandomLarge();
let serversOfflineNum = getRandomSmall();

function getRandomLarge () {
    let bigNum = Math.floor(Math.random() * 1000);
    return bigNum;
}
function getRandomSmall () {
    let smallNum = Math.floor(Math.random() * 30);
    if (smallNum < 2) {smallNum =2}
    return smallNum;
}
function topEngineerRandom () {
    return engineers[Math.floor(Math.random() * engineers.length)]
}
function getPatchPercent () {
    let percentNum = Math.floor(Math.random() * 100);
    if (percentNum < 1) {percentNum =1}
    return percentNum;
}

totalUsers.innerText = (usersOnline+guestsOnline) + " Active Users"
onlineUsers.innerText = usersOnline + " Users Online"
guestUsers.innerText = guestsOnline + " Guests Online"

p1.innerText = p1TicketNum + " P1 Tickets"
p2.innerText = p2TicketNum + " P2 Tickets"
p3.innerText = p3TicketNum + " P3 Tickets"
closedTickets.innerText = closedTicketNum + " Closed Tickets"
topCloser.innerText = "Most closed tickets: " + topCloserNum 

patching.innerText = ` Patching ${patchPercent}% `
serversOnline.innerText = " " + serversOnlineNum + " Servers Online"
serversOffline.innerText = " " + serversOfflineNum + " Servers Offline"