/* Constructor functon for house keepers */
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper(10, 'Jane', ["Bedroom", "lobby", "bathroom"]);
