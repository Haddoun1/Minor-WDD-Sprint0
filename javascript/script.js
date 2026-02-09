console.log("test");

const mezelfKnop = document.getElementById("mezelfKnop");
const mezelfKnopOpen = document.getElementById("mezelfKnopOpen");
const leerdoelenKnop = document.getElementById("leerdoelenKnop");
const leerdoelenKnopOpen = document.getElementById("leerdoelenKnopOpen");

mezelfKnop.addEventListener("click", () => mezelfKnopOpen.showModal());

leerdoelenKnop.addEventListener("click", () => leerdoelenKnopOpen.showModal());


// ?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526"

const base = "https://fdnd.directus.app/items"
let endpoint = "/person?filter[squads][squad_id][tribe][name]=CMD%20Minor%20Web%20Dev&filter[squads][squad_id][cohort]=2526&sort=name&filter[fav_tag][_nempty]"
let url = base + endpoint

let deLijst = document.querySelector("ul")

getMinorMensen()

async function getMinorMensen() {

    let response = await fetch(url)

    let responseJSON = await response.json();

    let deMinorMensen = responseJSON.data

    console.log(deMinorMensen)

    deMinorMensen.forEach( eenMinorMens => {
        console.log(eenMinorMens)

       let minorMensHTML =
       ` <li>
      <h2>
        ${eenMinorMens.name} en dan de achternaam
      </h2>
      <p>
         ${eenMinorMens.fav_tag}
      </p>
      <img src="${eenMinorMens.avatar}">
    </li>`

    deLijst.insertAdjacentHTML("beforeend", minorMensHTML)

    })
}