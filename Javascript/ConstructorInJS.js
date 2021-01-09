/* Constructor functon for house keepers */
function HouseKeeper (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

var houseKeeper1 = new HouseKeeper(10, 'Jane', ["Bedroom", "lobby", "bathroom"]);

/* Constructor Function with a method calls within them */

function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase = function() {
        alert("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
    this.cleaning = function(){
        alert("Cleaning in progress.");
    }
}
