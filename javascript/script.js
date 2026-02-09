console.log("test");

const mezelfKnop = document.getElementById("mezelfKnop");
const mezelfKnopOpen = document.getElementById("mezelfKnopOpen");
const leerdoelenKnop = document.getElementById("leerdoelenKnop");
const leerdoelenKnopOpen = document.getElementById("leerdoelenKnopOpen");

mezelfKnop.addEventListener("click", () => mezelfKnopOpen.showModal());

leerdoelenKnop.addEventListener("click", () => leerdoelenKnopOpen.showModal());
