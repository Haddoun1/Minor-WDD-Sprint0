console.log("test");

const mezelfKnop = document.getElementById("mezelfKnop");
const mezelfKnopOpen = document.getElementById("mezelfKnopOpen");
const leerdoelenKnop = document.getElementById("leerdoelenKnop");
const leerdoelenKnopOpen = document.getElementById("leerdoelenKnopOpen");
const alexKnop = document.getElementById("alexKnop");
const alexKnopOpen = document.getElementById("alexKnopOpen");
const juliusKnop = document.getElementById("juliusKnop");
const juliusKnopOpen = document.getElementById("juliusKnopOpen");
const sanneKnop = document.getElementById("sanneKnop");
const sanneKnopOpen = document.getElementById("sanneKnopOpen");


// ?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526"

mezelfKnop.addEventListener("click", () => mezelfKnopOpen.showModal());

leerdoelenKnop.addEventListener("click", () => leerdoelenKnopOpen.showModal());

alexKnop.addEventListener("click", () => alexKnopOpen.showModal());

juliusKnop.addEventListener("click", () => juliusKnopOpen.showModal());

sanneKnop.addEventListener("click", () => sanneKnopOpen.showModal());


/* https://chatgpt.com/share/698d92fc-d534-8005-a678-d16abab0fc55 */

let deLijst = document.querySelector("form")

const base = "https://fdnd.directus.app/items"

let endpointMezelf = "/person/313"
let endpointSanne = "/person/71"
let endpointAlex = "/person/279"
let endpointJulius = "/person/299"

let urlMezelf = base + endpointMezelf
let urlSanne = base + endpointSanne
let urlAlex = base + endpointAlex
let urlJulius = base + endpointJulius


getMezelf()

async function getMezelf() {

    let response = await fetch(urlMezelf)
    let responseJSON = await response.json()

    let persoon = responseJSON.data

    const h2 = document.querySelector("#mezelfKnopOpen h2")
    const p = document.querySelector("#mezelfKnopOpen p")
    const img = document.querySelector("#mezelfKnopOpen img")

    const leeftijd = berekenLeeftijd(persoon.birthdate)

    h2.textContent = persoon.name

    p.textContent = `Hi, Ik ben ${persoon.name}. Ik ben ${leeftijd} jaar oud en ik woon in ${persoon.residency}. Mijn hobbies zijn tekenen, koken, het beoefenen van vechtsporten en gamen.`

    img.src = persoon.avatar
    img.alt = `Profielfoto van ${persoon.name}`
}

getSanne()

async function getSanne() {

    let response = await fetch(urlSanne)
    let responseJSON = await response.json()

    let persoon = responseJSON.data

    const h2 = document.querySelector("#sanneKnopOpen h2")
    const p = document.querySelector("#sanneKnopOpen p")
    const img = document.querySelector("#sanneKnopOpen img")

    const leeftijd = berekenLeeftijd(persoon.birthdate)

    h2.textContent = persoon.name

    p.textContent = `Hi, Ik ben ${persoon.name}. Ik ben ${leeftijd} jaar oud en ik woon in ${persoon.residency ?? "... uhm idk"}.`

    img.src = persoon.avatar
    img.alt = `Profielfoto van ${persoon.name}`
}

getAlex()

async function getAlex() {

    let response = await fetch(urlAlex)
    let responseJSON = await response.json()

    let persoon = responseJSON.data

    const h2 = document.querySelector("#alexKnopOpen h2")
    const p = document.querySelector("#alexKnopOpen p")
    const img = document.querySelector("#alexKnopOpen img")

    const leeftijd = berekenLeeftijd(persoon.birthdate)

    h2.textContent = persoon.name

    p.textContent = `Hi, Ik ben ${persoon.name}. Ik ben ${leeftijd} jaar oud en ik woon in ${persoon.residency}.`

    img.src = persoon.avatar
    img.alt = `Profielfoto van ${persoon.name}`
}

getJulius()

async function getJulius() {

    let response = await fetch(urlJulius)
    let responseJSON = await response.json()

    let persoon = responseJSON.data

    const h2 = document.querySelector("#juliusKnopOpen h2")
    const p = document.querySelector("#juliusKnopOpen p")
    const img = document.querySelector("#juliusKnopOpen img")

    const leeftijd = berekenLeeftijd(persoon.birthdate)

    h2.textContent = persoon.name

    p.textContent = `Hi, Ik ben ${persoon.name}. Ik ben ${leeftijd} jaar oud en ik woon in ${persoon.residency ?? "... uhm idk"}.`

    img.src = persoon.avatar
    img.alt = `Profielfoto van ${persoon.name}`
}


function berekenLeeftijd(birthdate) {
    const vandaag = new Date();
    const geboortedatum = new Date(birthdate);

    let leeftijd = vandaag.getFullYear() - geboortedatum.getFullYear();

    const maandVerschil = vandaag.getMonth() - geboortedatum.getMonth();

    if (
        maandVerschil < 0 || 
        (maandVerschil === 0 && vandaag.getDate() < geboortedatum.getDate())
    ) {
        leeftijd--;
    }

    return leeftijd;
}

