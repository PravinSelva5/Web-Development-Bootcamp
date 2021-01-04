function whosPaying(names) {

/******Don't change the code above*******/

    //Write your code here.
    var length = names.length;

    var payingPersonIndex = Math.random(length) * 6;
    var rounded = Math.round(payingPersonIndex) - 1;

    if (rounded === -1){
        return ( names[rounded + 1] + " is going to buy lunch today!");
    }else {
     return names[rounded] + "is going to buy lunch today!";
    }

/******Don't change the code below*******/
}



/*


Another Solution  


function whosPaying(names) {

/* *****Don't change the code above****** */

    //Write your code here.
    var length = names.length;
    var payingPersonIndex = Math.random(length) * 6;
    var payingPersonIndexFloored = Math.floor(payingPersonIndex);
    var payingPerson = names[payingPersonIndexFloored];

    return payingPerson + " is going to buy lunch today!";
/******Don't change the code below*******/
}




*/
