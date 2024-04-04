
const prompt = require('prompt-sync')();
function askTvSerie(){
    let name = prompt("Enter the name of the serie: ");
    let productionYear = prompt("Enter the production year: ");
    let castMembers = prompt("Enter as much as you want names of the cast members: ");
    let castMembersList = castMembers.split(",");
    let tvSerie = {
        name: name,
        productionYear: productionYear,
        castMembers: castMembersList,
    }
    return tvSerie;
}


function randomizeCast(tvSerie){
    let randomCast = tvSerie.castMembers.slice();
    for (let i = randomCast.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomCast[i], randomCast[j]] = [randomCast[j], randomCast[i]];
    }
    return randomCast;
}
let tvSerie = askTvSerie();
console.log("Original cast:", tvSerie.castMembers);
let randomizedCast = randomizeCast(tvSerie); 
console.log("Randomized cast:", randomizedCast);