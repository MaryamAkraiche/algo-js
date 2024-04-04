// Create a function named askTvSerie() that will ask the user
// for the following data about its favorite TV serie:
// Name
// Production year
// Names of the cast members (there can be as much as the user want)
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
let tvSerie = askTvSerie();
console.log(tvSerie);